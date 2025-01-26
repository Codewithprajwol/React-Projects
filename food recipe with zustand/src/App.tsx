import {ReactElement,FC, useState} from 'react'
import { useStore } from './store/recipeStore'


import { Recipe } from './store/recipeStore'

const App:FC = ():ReactElement => {
const {recipes,addRecipe,removeRecipe}=useStore()
const [name,setName]=useState<string>('');
const [ingredients,setIngredients]=useState<string>('')
const [instructions,setInstructions]=useState<string>('')
const [editing,setEditing]=useState<Recipe | null>(null)
  return (
    <div className='text-2xl font-bold underline'>App</div>
  )
}

export default App