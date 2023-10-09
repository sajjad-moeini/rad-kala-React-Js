import { combineReducers, legacy_createStore } from "redux";
import ProductsReducer from "./ProductsReducer/ProductsReducer";

const Store = legacy_createStore(combineReducers({
       products : ProductsReducer
}))
export default Store