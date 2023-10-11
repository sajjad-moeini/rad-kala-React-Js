import { combineReducers, legacy_createStore } from "redux";
import ProductsReducer from "./ProductsReducer/ProductsReducer";
import HomeBgReducer from "./HomeBgReducer/HomeBgReducer";
import HomeCategoryReducer from "./HomeCategoryReducer/HomeCategoryReducer";
import HomeReadingSectionReducer from "./HomeReadingSectionReducer/HomeReadingSectionReducer";
const Store = legacy_createStore(combineReducers({
       products : ProductsReducer,
       HomeBg : HomeBgReducer,
       HomeCategories : HomeCategoryReducer,
       HomeReadingSection: HomeReadingSectionReducer,
}))
export default Store