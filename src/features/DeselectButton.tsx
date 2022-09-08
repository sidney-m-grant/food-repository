import React from "react";
import type { Ingredient, RecipeStep, Recipe } from '../App'

interface Props {
    recipe: Recipe,
    setCurrentRecipe: React.Dispatch<React.SetStateAction<Recipe>>
}

export const DeselectButton: React.FC<Props> = ({ setCurrentRecipe, recipe }) => {
   
    const handleClick = () => {
        setCurrentRecipe(recipe)
      }

    return (
        <button type="button" onClick={handleClick}>Deselect Current Recipe</button>
    )
}