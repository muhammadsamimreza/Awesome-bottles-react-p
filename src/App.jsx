import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottles/Bottles'

function App() {
  
  const bottlesPromise = fetch('/public/bottles.json').then(res=> res.json())

  return (
    <div>
      
      <h1>Choose Your Favourite Water Pot</h1>
      <Suspense fallback={<h3>Data is Loading.....</h3>}>
         <Bottles 
         key={bottlesPromise.id}
          bottlesPromise={bottlesPromise}
         ></Bottles>
      </Suspense>
      
    </div>
  )
}

export default App
