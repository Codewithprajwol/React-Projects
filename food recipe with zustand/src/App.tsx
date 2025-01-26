import { ReactElement, FC, useState } from "react";
import { useStore } from "./store/recipeStore";

import { Recipe } from "./store/recipeStore";

const App: FC = (): ReactElement => {
  const { recipes, addRecipe, removeRecipe } = useStore();
  const [name, setName] = useState<string>("");
  const [ingredients, setIngredients] = useState<string>("");
  const [instructions, setInstructions] = useState<string>("");
  const [editing, setEditing] = useState<Recipe | null>(null);

  const handleAddRecipe = () => {
    if (
      name.trim() === "" ||
      ingredients.trim() === "" ||
      instructions.trim() === ""
    )
      return;

    addRecipe({ id: Date.now(), name, ingredients:ingredients.split(',').map((ingredient)=>ingredient.trim()),instructions });
    setName('')
    setIngredients('')
    setInstructions('')
  };

  const handleEditRecipe=(recipe:Recipe)=>{
    setEditing(recipe)
   setName(recipe.name)
   setIngredients(recipe.ingredients.join(', '))
   setInstructions(recipe.instructions)

  }
  const handleUpdateRecipe=()=>{
    if (
      name.trim() === "" ||
      ingredients.trim() === "" ||
      instructions.trim() === ""
    )
      return;
      if(editing){
        removeRecipe(editing.id)

        addRecipe({id:Date.now(),name,ingredients:ingredients.split(',').map((ingredients)=>ingredients.trim()),instructions})
        setEditing(null)
      }
      setName('')
      setIngredients('')
      setInstructions('')
  }

  const cancelEditHandle=()=>{
    setEditing(null)
    setName('')
    setIngredients('')
    setInstructions('')
  }
  const HandleDeleteRecipe=(recipe:Recipe)=>{
    if(editing) return
    removeRecipe(recipe.id)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-400 pt-5">
      <div className="p-6 rounded-lg w-full max-w-2xl bg-white shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-green-300">
          Vegeterian Food Recipe
        </h1>
        <div className="space-y-4 mb-6">
          <input
            type="text"
            className=" px-4 py-2 w-full border rounded-lg border-gray-300 focus:ring-2 focus:outline-none focus:ring-green-300"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="recipe name"
          />
          <input
            type="text"
            className=" px-4 py-2 w-full border rounded-lg border-gray-300 focus:ring-2 focus:outline-none focus:ring-green-300"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="ingredients, comma sepearated"
          />
          <textarea
            className=" px-4 py-2 w-full border rounded-lg border-gray-300 focus:ring-2 focus:outline-none focus:ring-green-300"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="instructions"
          />
          {editing ? (
            <div className="flex items-center justify-between">
              <button
                className="px-4 py-2 bg-amber-400 rounded-lg text-white focus:bg-amber-600 focus:ring-2 focus:ring-yellow-900 cursor-pointer"
                onClick={handleUpdateRecipe}
              >
                update
              </button>
              <button className="px-4 py-2 bg-red-400 rounded-lg text-white focus:bg-red-600 focus:ring-2 focus:ring-red-900 cursor-pointer" onClick={cancelEditHandle}>
                Cancel
              </button>
            </div>
          ) : (
            <>
              <button
                className="px-4 py-2 bg-green-400 rounded-lg text-white focus:bg-green-600 focus:ring-2 focus:ring-green-900 cursor-pointer"
                onClick={handleAddRecipe}
              >
                Add Recipe
              </button>
            </>
          )}
        </div>
        <div>
          <ul className="flex item-center justify-center flex-col-reverse gap-5 ">
            {recipes.map((recipe) => (
              <li
                key={recipe.id}
                className="p-4 bg-green-50 rounded-lg shadow-sm"
              >
                <h2 className="text-xl font-semibold text-green-800 mb-1 ">
                  {recipe.name}
                </h2>
                <p className="text-gray-700 mb-1">
                  <strong>Ingredients:</strong>
                  {recipe.ingredients.join(", ")}
                </p>
                <p className="text-gray-700 mb-2">{recipe.instructions}</p>
                <div className="flex items-center justify-between">
                  <button
                    className="px-4 py-2 bg-amber-400 rounded-lg text-white focus:bg-amber-600 focus:ring-2 focus:ring-yellow-900 cursor-pointer"
                    onClick={() => handleEditRecipe(recipe)}
                  >
                    Edit
                  </button>

                  <button
                    className="px-4 py-2 bg-red-400 rounded-lg text-white focus:bg-red-600 focus:ring-2 focus:ring-red-900 cursor-pointer"
                    onClick={() => HandleDeleteRecipe(recipe)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
