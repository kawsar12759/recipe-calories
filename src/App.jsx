
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Recipes from './components/Recipes/Recipes'

function App() {

  return (
    <div className='w-5/6 mx-auto py-6'>
      <Navbar></Navbar>
      <Header></Header>
      <Recipes></Recipes>
    </div>
  )
}

export default App
