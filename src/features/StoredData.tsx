import type { Ingredient, RecipeStep, Recipe } from '../App'

export const recipeList: Recipe[] = [
    { name: 'No Recipe Selected', img: "", id: 0, 
        recipeText: [{stepNumber: 1, text: ''}], 
        ingredientList: [{name: 'nothing', amount: 0, unit: '', id: 1}] 
    },
    { name: 'Mapo Tofu', img: './images/IMG_0548.jpeg', id: 1,
        recipeText: [
            {stepNumber: 1, text: 'Toast the peppercorns over hight heat until lightly smoking. Pound in a mortar and pestle until finely ground.'}, 
            {stepNumber: 2, text: 'Heat two tablespoons of neutral oil in a wok until smoking. Add beef and cook, stirring constantly for one minute. Add minced garlic and ginger and cook until fragrant. Add doubanjiang and cook untill oil starts to turn red.'},
            {stepNumber: 3, text: 'Add wine, soy sauce and chicken stock and bring to a boil. Pour in cornstarch mixed with cold water to desired thickness.'},
            {stepNumber: 4, text: 'Add tofu in half-inch cubes, folding it in carefully. Fold in chili oil and scallions and simmer for thirty seconds. Sprinkle with ground peppercorns and serve.'}

        ], 
        ingredientList: [
            {name: 'Silken Tofu', amount: 1.5, unit: 'pounds', id: 1},
            {name: 'Sichuan Peppercorns', amount: 5, unit: 'grams', id: 2},
            {name: 'Cornstarch', amount: 1, unit: 'teaspoon', id: 3},
            {name: 'Fatty Ground Beef', amount: 120, unit: 'grams', id: 4},
            {name: 'Pixian Doubanjiang', amount: 30, unit: 'grams', id: 5},
            {name: 'Shaoxing Wine', amount: 2, unit: 'tablespoons', id: 6},
            {name: 'Chicken Stock', amount: .25, unit: 'cups', id: 7},
            {name: 'Soy Sauce', amount: 1, unit: 'tablespoon', id: 8},
            {name: 'Chili Oil', amount: .25, unit: 'cups', id: 9},
            {name: 'Scallions', amount: 3, unit: '', id: 10},
            {name: 'Garlice', amount: 2, unit: 'teaspoons', id: 11},
        ] 
    },
    { name: 'Dan Dan Noodles', img: './images/IMG_0542.jpeg', id: 2,
        recipeText: [
            {stepNumber: 1, text: ''}
        ], 
        ingredientList: [
            {name: 'nothing', amount: 0, unit: '', id: 1}
        ] 
    }
  ]