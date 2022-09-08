import React, { useState } from 'react'
import type { Ingredient, RecipeStep, Recipe } from '../App'


interface Props {
    tempRecipe: Recipe,
    setTempRecipe: React.Dispatch<React.SetStateAction<Recipe>>
    tempRecipeStepArray: RecipeStep[],
    tempRecipeName: string,
    setTempRecipeName: React.Dispatch<React.SetStateAction<string>>,
    allRecipes: Recipe[],
    setAllRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>,
    tempIngredientArray: Ingredient[]
}

export const RecipeAssembly: React.FC<Props> = ({ tempRecipeStepArray, tempRecipe, setTempRecipe, tempRecipeName, setTempRecipeName, allRecipes, setAllRecipes, tempIngredientArray }) => {
    
    const handleClick = () => {
        setTempRecipe({
            name: tempRecipeName,
            img: '',
            id: allRecipes.length,
            recipeText: tempRecipeStepArray,
            ingredientList: tempIngredientArray
        })
    }

    const handleSubmit = () => {
        setAllRecipes(allRecipes => [...allRecipes, tempRecipe])
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTempRecipeName(e.target.value);
    }

    return (
        <div>
            <h5>Name for Recipe</h5>
            <input name="name" onChange={handleChange} value={tempRecipeName}></input>
            <button type="button" onClick={handleClick}>Save Recipe</button>
            <button type="button" onClick={handleSubmit}>Submit Saved Recipe</button>
        </div>
    )
}