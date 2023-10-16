import { useState } from 'react'
import './../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import { useRoutes } from 'react-router-dom';
import Router from './Router';
import Footer from './Components/Footer/Footer';
import ProjectContext from './Contexts/ProjectContext';
function App() {
  const [logoSrc, setLogoSrc] = useState('images/logo1.png')
  const [isLogin, setIsLogin] = useState(false)
  const [cartItems,setCartItems] = useState([])
  const router = useRoutes(Router)

  return (
    <>
      <ProjectContext.Provider value={{
        logoSrc,
        setLogoSrc,
        isLogin,
        setIsLogin,
        cartItems,
        setCartItems
      }}>
        <NavBar />
        <div id="content">
          {router}
        </div>
        <Footer />
      </ProjectContext.Provider>
    </>
  )
}

export default App
