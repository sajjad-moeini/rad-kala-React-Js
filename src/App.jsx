import { useEffect, useState } from 'react'
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
  const [cartItems, setCartItems] = useState([])
  const [allPayPrice, setAllPayPrice] = useState(0)
  const [alloffsPrice, setAlloffsPrice] = useState(0)
  const [payCoast, setPayCoast] = useState(0)
  const [users,setUsers] =useState([   {
    id: 1,
    name: 'سجاد معینی',
    userName: 'sajjad-moeini',
    password: '12345678',
    email: 'sajjadmoeini@gmail.com',
    phone: '09195805686'
}])
  const router = useRoutes(Router)

  useEffect(() => {
    setAlloffsPrice(allPayPrice - payCoast)
  }, [allPayPrice])

  useEffect(() => {
    getAllPrice(cartItems)
  }, [cartItems])
  const getAllPrice = (cartProducts) => {
    const cardPrices = [0]
    const cardOffPrices = [0]
    cartProducts.forEach(product => {
      cardPrices.push(Number(product.price * product.count))
      cardOffPrices.push(Number((product.price * ((100 - product.off) / 100)) * product.count))
    })
     setAllPayPrice(cardPrices.reduce((prev, current) => (prev + current)))
     setPayCoast(cardOffPrices.reduce((prev, current) => (prev + current)))
  }




  return (
    <>
      <ProjectContext.Provider value={{
        logoSrc,
        setLogoSrc,
        isLogin,
        setIsLogin,
        cartItems,
        setCartItems,
        allPayPrice,
        payCoast,
        alloffsPrice,
        users,
        setUsers
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
