import { useState } from 'react'
import './../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import { useRoutes } from 'react-router-dom';
import Router from './Router';
import Footer from './Components/Footer/Footer';
function App() {
 const router = useRoutes(Router)

  return (
    <>
    <NavBar />
    {router}
    <Footer />
    </>
  )
}

export default App
