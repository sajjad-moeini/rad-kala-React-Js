import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";

const Router =[
       { path: '/' , element: <Home />},
       { path: '/products' , element: <Products />},
       { path: '/product/product' , element: <Product />},
]

export default Router