
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Card from './components/Card'
import Header from './components/Header'
import OurReception from './components/OurReception'
import Recepes from './components/Recepes'

function App() {
 const [recipeQueue, setRecipeQueue] = useState([])

 const [preparedRecipe, setPreparedRecipe] = useState([])
 const [totalTime, setTotalTime] = useState(0)
 const [totalCalories, setTotalCalories] = useState(0)

 const addRecipeToQueue = recipe =>{

  const isExist = recipeQueue.find(previousRecipe => previousRecipe.recipe_id === recipe.recipe_id)
  if (!isExist) {
    setRecipeQueue([...recipeQueue, recipe])
  }else{
    alert('Recipe already exists in the queue')
  }
    
 }


 const handleRemove = id => {
  const deletedRecipe = recipeQueue.find(recipe => recipe.recipe_id === id)

  const updatedQueue = recipeQueue.filter(recipe => recipe.recipe_id !== id)

  setRecipeQueue(updatedQueue)
  setPreparedRecipe([...preparedRecipe, deletedRecipe])
 }

 const calculateTimeAndCalories = (time, calorie) => {
    setTotalTime(totalTime + time)
    setTotalCalories(totalCalories + calorie)
 }

  return (
    <div className='container mx-auto'>
      <Header></Header>
     <Banner></Banner>
     <OurReception></OurReception>

      <section className='flex w-11/12 mx-auto flex-col md:flex-row gap-6 mt-10'>

        <Recepes addRecipeToQueue={addRecipeToQueue}></Recepes>
  <Card handleRemove={handleRemove} recipeQueue={recipeQueue} preparedRecipe={preparedRecipe} calculateTimeAndCalories={calculateTimeAndCalories} totalTime={totalTime} totalCalories={totalCalories} ></Card>
      </section>
      
    </div>
  )
}

export default App
