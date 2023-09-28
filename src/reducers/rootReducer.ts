import { combineReducers } from "redux";
import authReducer from "../slices/auth.slice"
import uiReducer from "../slices/ui.slice"
import productReducer from "../slices/products.slice"
import oneProductReducer from "../slices/oneProduct"


const rootReducer = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    products: productReducer,
    product: oneProductReducer
})
export type IRootState = ReturnType<typeof rootReducer>
export default rootReducer