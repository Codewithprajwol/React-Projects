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
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-400">
      <div className="p-6 rounded-lg w-full max-w-2xl bg-white shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-green-300">
          Recipe App
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
            <>
              <button
                className="px-4 py-2 bg-amber-400 rounded-lg text-white focus:bg-amber-600 focus:ring-2 focus:ring-yellow-900 cursor-pointer"
                onClick={handleUpdateRecipe}
              >
                update
              </button>
              <button className="Px-4 py-2 bg-red-400 rounded-lg text-white focus:bg-red-600 focus:ring-2 focus:ring-red-900 cursor-pointer">
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                className="px-4 py-2 bg-green-400 rounded-lg text-white focus:bg-green-600 focus:ring-2 focus:ring-green-900 cursor-pointer"
                onClick={handleAddRecipe}
              >
                Add
              </button>
            </>
          )}
        </div>
        <div>
          <ul className="space-y-4">
            {recipes.map((recipe) => (
              <li
                key={recipe.id}
                className="p-4 bg-green-50 rounded-lg shadow-sm"
              >
                <h2 className="text-xl font-semibold text-green-800 mb-2">
                  {recipe.name}
                </h2>
                <p className="text-gray-700 mb-2">
                  <strong>Ingredients:</strong>
                  {recipe.ingredients.join(",")}
                </p>
                <div className="flex items-center justify-between">
                  <button
                    className="px-4 py-2 bg-amber-400 rounded-lg text-white focus:bg-amber-600 focus:ring-2 focus:ring-yellow-900 cursor-pointer"
                    onClick={() => handleEditRecipe(recipe)}
                  >
                    Edit
                  </button>

                  <button
                    className="px-4 py-2 bg-red-400 rounded-lg text-white focus:bg-red-600 focus:ring-2 focus:ring-red-900 cursor-pointer"
                    onClick={() => removeRecipe(recipe.id)}
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
