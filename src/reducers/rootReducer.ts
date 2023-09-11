import { combineReducers } from "redux";
import authReducer from "../slices/auth.slice"
import uiReducer from "../slices/ui.slice"


const rootReducer = combineReducers({
    auth: authReducer,
    ui: uiReducer
})
export type IRootState = ReturnType<typeof rootReducer>
export default rootReducer