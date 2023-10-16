import Login from "./Components/Login/Login";
import ProductsCard from "./Components/ProductsCard/ProductsCard";
import Register from "./Components/Register/Register";
import Account from "./pages/Account/Account";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";

const Router =[
       { path: '/' , element: <Home />},
       { path: '/products' , element: <Products />,children:[
              { path: 'all' , element: <ProductsCard category={'all'} />},
              { path: 'consule' , element: <ProductsCard category={'consule'} />},
              { path: 'mouseAndKeyBoard' , element: <ProductsCard category={'mouseAndKeyBoard'} />},
              { path: 'hardExternal' , element: <ProductsCard category={'hardExternal'} />},
              { path: 'camera' , element: <ProductsCard category={'camera'} />},
              { path: 'smartWatch' , element: <ProductsCard category={'smartWatch'} />},
              { path: 'mobile' , element: <ProductsCard category={'mobile'} />},
              { path: 'laptops' , element: <ProductsCard category={'laptops'} />},
       ]},
       { path: '/products/product/*' , element: <Product />},
       { path: '/account' , element: <Account /> , children:[
              { path: 'login' , element: <Login />},
              { path: 'register' , element: <Register />},
       ]},
       { path: '/cart' , element: <Cart />},
]

export default Router