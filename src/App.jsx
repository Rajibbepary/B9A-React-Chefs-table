
import './App.css'
import Banner from './components/Banner'
import Card from './components/Card'
import Header from './components/Header'
import OurReception from './components/OurReception'
import Recepes from './components/Recepes'

function App() {
 
  

  return (
    <div className='container mx-auto'>
      <Header></Header>
     <Banner></Banner>
     <OurReception></OurReception>

      <section className='flex w-11/12 mx-auto flex-col md:flex-row gap-6 mt-10'>

        <Recepes></Recepes>
        <Card></Card>
      </section>
      
    </div>
  )
}

export default App
