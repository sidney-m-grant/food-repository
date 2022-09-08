import React, { useState } from "react";
import type { Ingredient, RecipeStep } from '../App'

  interface Props  {
    tempIngredient: Ingredient,
    setTempIngredient: React.Dispatch<React.SetStateAction<Ingredient>>,
    tempIngredientArray: Ingredient[],
    setTempIngredientArray: React.Dispatch<React.SetStateAction<Ingredient[]>>
  }

export const IngredientInput: React.FC<Props> = ({ tempIngredient, setTempIngredient, tempIngredientArray, setTempIngredientArray }) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTempIngredient(prevState => ({...prevState, [e.target.name]: e.target.value}))
    }

    const handleClick = () => {
        setTempIngredient(prevState => ({...prevState, id: tempIngredientArray.length+1}))
        setTempIngredientArray(tempIngredientArray => [...tempIngredientArray, tempIngredient])
    }

    const tempIngredientList = tempIngredientArray.map(singleIngredient => {
        return <h5 key={singleIngredient.id}>{singleIngredient.name} {singleIngredient.amount} {singleIngredient.unit}</h5>
    })

    return (
        <div>
            <form>
                <input type="text" name="name" onChange={handleChange} value={tempIngredient.name} />
                <input type="number" name="amount" onChange={handleChange} value={tempIngredient.amount} />
                <input type="text" name="unit" onChange={handleChange} value={tempIngredient.unit} />
                <button type="button" onClick={handleClick}>Submit Ingredient</button>
            </form>
            {tempIngredientList}
        </div>
    )
}