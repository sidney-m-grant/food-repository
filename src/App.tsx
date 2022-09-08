import React, { useState, useEffect } from 'react';
import './App.css';
import { IndividualRecipe } from './components/IndividualRecipe'
import { CurrentRecipe } from './features/CurrentRecipe'
import { DeselectButton } from './features/DeselectButton';
import { recipeList } from './features/StoredData'
import { SearchBar } from './features/SearchBar'
import { IngredientInput } from './features/IngredientInput'
import { RecipeInput } from './features/RecipeInput'
import { RecipeAssembly } from './components/RecipeAssembly';

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

  const initialState: Recipe[] = [{ name: 'No Recipe Selected', img: "", id: 0, recipeText: [{stepNumber: 1, text: ''}], ingredientList: [{name: 'nothing', amount: 0, unit: '', id: 1}] }]

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


  useEffect(() => {
    setAllRecipes(recipeList)
  }, [])

  const filteredItems = allRecipes.filter(item => item.name.toLowerCase().includes(searchInput) && item.id !== 0)

  const listItems = filteredItems.map(
    (recipe) => <IndividualRecipe key={recipe.id} recipe={recipe} setCurrentRecipe={setCurrentRecipe}/>
  )

  return (
    <div>
      <button type="button" onClick={() => setToggleRecipeInput(!toggleRecipeInput)}>Toggle Recipe Input</button>
      {toggleRecipeInput && (
        <div>
          <SearchBar setSearchInput={setSearchInput} searchInput={searchInput} />
          <CurrentRecipe currentRecipe={currentRecipe} />
          <DeselectButton setCurrentRecipe={setCurrentRecipe} recipe={allRecipes[0]} />
        <ul>
          {listItems}
        </ul>
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
