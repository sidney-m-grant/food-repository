import React from "react";
import type { Recipe } from '../App'


interface Props {
    recipe: Recipe
    setCurrentRecipe: React.Dispatch<React.SetStateAction<Recipe>>
}

export const IndividualRecipe: React.FC<Props> = ({ recipe, setCurrentRecipe }) => {

    const handleClick = () => {
        setCurrentRecipe(recipe)
      }

    return (
        <div>
            <h1>{recipe.name}</h1>
            <img src={recipe.img} alt="" className="recipe-image"/>
            <button onClick={handleClick} className="button" name={recipe.name}>select recipe</button>
        </div>
    )
}