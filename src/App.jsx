import { useState } from 'react'
import Categories from './components/Categories'
import "bootstrap/dist/css/bootstrap.css"
import Header from './components/Header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
    <div>
     <Categories/>
      </div>
      </>
  )
}

export default App
