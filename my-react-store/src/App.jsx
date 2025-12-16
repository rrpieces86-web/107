import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Catalog from './pages/catalog';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <Catalog/>
        <h1>Hello from React</h1>
        
          <Footer />
      </div>
      
        
    
     
    </>
  )
}

export default App
