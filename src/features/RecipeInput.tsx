import React, { useState } from 'react'
import type { RecipeStep } from '../App'


interface Props {
    tempRecipeStep: RecipeStep,
    setTempRecipeStep: React.Dispatch<React.SetStateAction<RecipeStep>>,
    tempRecipeStepArray: RecipeStep[],
    setTempRecipeStepArray: React.Dispatch<React.SetStateAction<RecipeStep[]>>
}

export const RecipeInput: React.FC<Props> = ({ tempRecipeStep, setTempRecipeStep, tempRecipeStepArray, setTempRecipeStepArray }) => {
    

    const handleChangeArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTempRecipeStep(prevState => ({...prevState, [e.target.name]: e.target.value}))
    }

    const handleClick = () => {
        setTempRecipeStep(prevState => ({...prevState, stepNumber: tempRecipeStepArray.length+1}))
        setTempRecipeStepArray(tempRecipeStepArray => [...tempRecipeStepArray, tempRecipeStep])
    }

    const tempRecipeStepList = tempRecipeStepArray.map(step => {
        return <p key={step.stepNumber}>{step.stepNumber}. {step.text}</p>
    })

    return (
        <div>
            <div>
                <textarea name="text" onChange={handleChangeArea} value={tempRecipeStep.text} />
            </div>
            <button type="button" onClick={handleClick}>Submit Recipe Step</button>
            {tempRecipeStepList}
        </div>
    )
}