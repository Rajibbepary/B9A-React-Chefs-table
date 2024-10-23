
const Card = ({ recipeQueue, handleRemove, preparedRecipe, calculateTimeAndCalories, totalTime, totalCalories }) => {
    return (
        <div className="md:w-1/3 border-2 rounded-2xl text-gray-600 bg-base-100">
            <h1>
              <div className="" >
                <h2 className="border-b-2 mx-auto font-semibold text-black text-xl text-center p-2"> Want To Cook:{recipeQueue.length}</h2>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th></th>
      </tr>
    </thead>
    <tbody className="text-center mx-auto">
      
      {recipeQueue.map((recipe, index)=>
    
    <tr key={index} >
        <th>{index +1}</th>
        <td>{recipe.recipe_name}</td>
        <td>{recipe.preparing_time}</td>
        <td>{recipe.calories}</td>
        <button onClick={() => {handleRemove(recipe.recipe_id), calculateTimeAndCalories(recipe.preparing_time,recipe.calories ) }} className="btn bg-green-500 mt-4 mr-4 text-sm">Preparing</button>
       
      </tr>
    
    )}
     
    </tbody>
  </table>
</div>

{/* Currently Cooking Table */}

<div className="mt-8" >
                <h2 className="border-b-2 mx-auto font-semibold text-black text-xl text-center p-2"> Currently Cooking:{preparedRecipe.length}</h2>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        
      </tr>
    </thead>
    <tbody className="text-center mx-auto">
      
      {preparedRecipe.map((recipe, index)=>
    
    <tr key={index} >
        <th>{index +1}</th>
        <td>{recipe.recipe_name}</td>
        <td>{recipe.preparing_time}</td>
        <td>{recipe.calories}</td>
      </tr>
    
    )}
     
     <tr>
      <th></th>
      <td></td>
      <td>Total Time = {totalTime}</td>
      <td>Total Calories = {totalCalories}</td>
    </tr>
    </tbody>
  </table>
</div>


</h1>

        </div>
    );
};

export default Card;