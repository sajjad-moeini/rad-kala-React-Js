import { combineReducers, legacy_createStore } from "redux";
import ProductsReducer from "./ProductsReducer/ProductsReducer";
import HomeBgReducer from "./HomeBgReducer/HomeBgReducer";
const Store = legacy_createStore(combineReducers({
       products : ProductsReducer,
       HomeBg : HomeBgReducer
}))
export default Store