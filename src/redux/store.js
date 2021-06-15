import { combineReducers, createStore } from "redux"
import bookReducer from "./reducers/bookReducer"
import { composeWithDevTools } from 'redux-devtools-extension';


const combinedReducers = combineReducers({
    books : bookReducer,
    // user: userReducer
})

export const store = createStore(combinedReducers, composeWithDevTools())