import React, { useState, useEffect, useRef, MouseEventHandler } from 'react';
import './App.css';
import { IndividualRecipe } from './components/IndividualRecipe'
import { CurrentRecipe } from './features/CurrentRecipe'
import { DeselectButton } from './features/DeselectButton';
import { recipeList } from './features/StoredData'
import { SearchBar } from './features/SearchBar'
import { IngredientInput } from './features/IngredientInput'
import { RecipeInput } from './features/RecipeInput'
import { RecipeAssembly } from './components/RecipeAssembly';
import Fuse from 'fuse.js'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth, db } from './firebase'
import { addDoc, collection, getDocs } from "firebase/firestore"


export type Ingredient = {
  name: string;
  amount: number;
  unit: string;
  id: number;
}

export type RecipeStep = {
  stepNumber: number;
  text: string;
}

export type Recipe = {
  name: string;
  img: string;
  id: number;
  recipeText: RecipeStep[];
  ingredientList: Ingredient[];
}

function App() {

  const recipesCollectionRef = collection(db, 'recipes')

  const initialState: Recipe[] = [{ 
    name: 'No Recipe Selected', 
    img: "", 
    id: 0, 
    recipeText: [{
      stepNumber: 1, 
      text: ''
    }], 
    ingredientList: [{
      name: 'nothing', 
      amount: 0, 
      unit: '', 
      id: 1
    }] 
  }]

  const [currentRecipe, setCurrentRecipe] = useState<Recipe>(initialState[0]);
  const [allRecipes, setAllRecipes] = useState<Recipe[]>(initialState)
  const [searchInput, setSearchInput] = useState<string>('')
  const [toggleRecipeInput, setToggleRecipeInput] = useState<boolean>(false);
  const [tempIngredient, setTempIngredient] = useState<Ingredient>({name: '', amount: 0, unit: '', id: 0})
  const [tempIngredientArray, setTempIngredientArray] = useState<Ingredient[]>([])
  const [tempRecipeStep, setTempRecipeStep] = useState<RecipeStep>({stepNumber: 0, text: ''})
  const [tempRecipeStepArray, setTempRecipeStepArray] = useState<RecipeStep[]>([])
  const [tempRecipe, setTempRecipe] = useState<Recipe>({name: '', img: '', id: 0, recipeText: [{stepNumber: 1, text: ''}], ingredientList: [{name: '', amount: 0, unit: '', id: 1}] })
  const [tempRecipeName, setTempRecipeName] = useState<string>('');

  // sign up elements

  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [user, setUser] = useState<object | null>({})

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })

    //function to register new user
    const register = async () => {
      try {
        const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword )
        console.log(user)
      } catch(error) {
        console.log()
      }
    }

    // sign up authorization form
    const signUpForm = (
      <div>
        <input placeholder="Register Email" onChange={(event) => {
          setRegisterEmail(event.target.value)
        }}></input>
        <input placeholder="Register Password" onChange={(event) => {
          setRegisterPassword(event.target.value)
        }}></input>
        <button onClick={register}>Submit</button>
      </div>
    )

    const signInForm = (
      <div>
        <input placeholder="Login Email" onChange={(event) => {
          setLoginEmail(event.target.value)
        }}></input>
        <input placeholder="Login Password" onChange={(event) => {
          setLoginPassword(event.target.value)
        }}></input>
      {/*  <button onClick={logIn}>Submit</button> */}
      </div>
    )

    //options for fuse search engine
  const options = {
    keys: [
        "name",
        "ingredientList.name"
    ]}

    const fuse = new Fuse(allRecipes, options)

  const results = fuse.search(searchInput);
  const itemResults = searchInput ? results.map(result => result.item) : allRecipes;

  const filteredItems = itemResults.filter(item => item.id !== 0)
{/*
  const listItems = filteredItems.map(
    (recipe) => <IndividualRecipe key={recipe.id} recipe={recipe} setCurrentRecipe={setCurrentRecipe}/>
  ) /*}
 
{/*}
  useEffect(() => {
    const getData = async () => {
      const recipes = await getDocs(recipesCollectionRef);
      const recipesArray: Recipe[] = [];
      recipes.forEach((doc) => {
        const temp = doc.data();
        const recipeToAdd: Recipe = {
          name: temp.name,
          img: temp.img,
          id: temp.id,
          recipeText: temp.recipeText,
          ingredientList: temp.IngredientList
        }
        recipesArray.push(recipeToAdd)
      })
     // setAllRecipes(recipesArray)
    }
  }, []) */}
{/*
  useEffect(() => {
    setAllRecipes(recipeList);
  }, []); */}

  return (
    <div>
      {signUpForm}
      <button type="button" onClick={() => setToggleRecipeInput(!toggleRecipeInput)}>Toggle Recipe Input</button>
      {toggleRecipeInput && (
        <div>
          <SearchBar setSearchInput={setSearchInput} searchInput={searchInput} />
          <CurrentRecipe currentRecipe={currentRecipe} />
        {/*}  <DeselectButton setCurrentRecipe={setCurrentRecipe} recipe={allRecipes[0]} /> */}
        {/*<ul>
          {listItems}
      </ul>*/}
        </div>
      )}
      {!toggleRecipeInput && (
        <div>
          <IngredientInput 
            tempIngredient={tempIngredient} 
            setTempIngredient={setTempIngredient} 
            tempIngredientArray={tempIngredientArray} 
            setTempIngredientArray={setTempIngredientArray}
          />
          <RecipeInput
            tempRecipeStep={tempRecipeStep}
            setTempRecipeStep={setTempRecipeStep}
            tempRecipeStepArray={tempRecipeStepArray}
            setTempRecipeStepArray={setTempRecipeStepArray}
          />
          <RecipeAssembly
            tempIngredientArray={tempIngredientArray}
            allRecipes={allRecipes}
            setAllRecipes={setAllRecipes}
            tempRecipeStepArray={tempRecipeStepArray}
            tempRecipe={tempRecipe}
            setTempRecipe={setTempRecipe}
            tempRecipeName={tempRecipeName}
            setTempRecipeName={setTempRecipeName}
          />
        </div>
      )}
    </div>
  );
}

export default App;
