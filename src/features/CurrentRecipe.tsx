import React from "react";
import '../App.css';
import type { Ingredient, Recipe, RecipeStep } from '../App'


interface Props {
    currentRecipe: Recipe
}

export const CurrentRecipe: React.FC<Props> = ({ currentRecipe }) => {

    const currentIngredientList = currentRecipe.ingredientList.map((singleIngredient) => {
       if (currentRecipe.id > 0){
            return <h5 key={singleIngredient.id}>{singleIngredient.name} {singleIngredient.amount} {singleIngredient.unit}</h5>
       }
    })

    const currentRecipeSteps = currentRecipe.recipeText.map((step) => {
        if (currentRecipe.id > 0){
            return <h5 key ={step.stepNumber}>{step.stepNumber}. {step.text}</h5>
        }
    })

    return (
        <div>
            <h1>{currentRecipe.name}</h1>
            <div className="current-recipe-grid-container">
                <div className="ingredients-container">{currentIngredientList}</div>
                <div className="recipe-container">{currentRecipeSteps}</div>
            </div>
        </div>
    )
 }