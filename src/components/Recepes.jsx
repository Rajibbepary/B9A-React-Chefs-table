import { useEffect } from "react";
import { useState } from "react";
import PropTypes from 'prop-types';

const Recepes = ({addRecipeToQueue}) => {

    const [recipes, setRicipes] = useState([])

    useEffect(() => {
        fetch('./recepes.json')
        .then(res => res.json())
        .then(data => setRicipes(data))
    }, [])

    
    return (
        <div className="md:w-2/3">
            
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">


        {recipes.map(recipe => (

<div key={recipe.recipe_id} className="card bg-base-100 shadow-xl border">
<figure className="px-8 pt-6">
  <img className="w-full md:h-52 rounded-xl object-cover"
    src={recipe.recipe_img}
    alt="Shoes" />
</figure>
<div className="card-body">
  <h2 className="card-title text-xl text-gray-800 font-bold">{recipe.recipe_name}</h2>
  <p className="text-gray-600 text-base">{recipe.short_description}</p>
    <h3 className="text-xl font-semibold"> Ingredients:</h3>
    <ul className="ml-10">
      {recipe.ingredients.map((item, index) =>(
        <li className="list-disc text-gray-600 text-sm" key={index}>{item}</li>
      ))

      }
    </ul>
    <div className="flex gap-3">
      <div className="flex items-center gap-2">
      <i className="fa-regular fa-clock text-2xl"></i>
      <p>{recipe.preparing_time} minute</p>
      <i className="fa-solid fa-fire-flame-curved text-2xl"></i>
      <p>{recipe.calories} Calorie</p>
      </div>
      
    </div>
  <div className="card-actions">
    <button onClick={()=> addRecipeToQueue(recipe)} className="btn bg-green-500 rounded-full px-8 text-xl text-gray-800 mt-4">Want To Cook</button>
  </div>
</div>
</div>
            )) }
        </div>
        </div>
    );
};

Recepes.propTypes = {

  addRecipeToQueue: PropTypes.func
}

export default Recepes;