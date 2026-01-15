import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import About from './pages/about';
import Catalog from './pages/catalog';
import Contact from './pages/contact';
import Home from './pages/home';
import Admin from './pages/admin';
import NotFound from './pages/NotFound';
import Footer from './components/footer';
import Navbar from './components/Navbar';
import GlobalProvider from './state/globalProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <GlobalProvider>

      <BrowserRouter>
        <div>
          <Navbar/>

          <main className='bg-info py-4 px-5'>

          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/catalog' element={<Catalog/>}></Route>
            <Route path='/admin' element={<Admin/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
          

          </Routes>
          </main>
        
        
       
        
          
        <Footer /> 
        </div>
      
      </BrowserRouter> 
    </GlobalProvider>

    
     
    
  )
}

export default App
