import { combineReducers, legacy_createStore } from "redux";
import ProductsReducer from "./ProductsReducer/ProductsReducer";
import HomeBgReducer from "./HomeBgReducer/HomeBgReducer";
import HomeCategoryReducer from "./HomeCategoryReducer/HomeCategoryReducer";
import HomeReadingSectionReducer from "./HomeReadingSectionReducer/HomeReadingSectionReducer";
import HomeCompanyLogoReducer from "./HomeCompanyLogoReducer/HomeCompanyLogoReducer";
import FooterUlLinks from "./FooterUlLinks/FooterUlLinks";
const Store = legacy_createStore(combineReducers({
       products : ProductsReducer,
       HomeBg : HomeBgReducer,
       HomeCategories : HomeCategoryReducer,
       HomeReadingSection: HomeReadingSectionReducer,
       HomeCompanyLogo : HomeCompanyLogoReducer,
       FooterItems : FooterUlLinks
}))
export default Store