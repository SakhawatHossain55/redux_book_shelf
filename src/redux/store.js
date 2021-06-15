import { applyMiddleware, combineReducers, createStore } from "redux"
import bookReducer from "./reducers/bookReducer"
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

// Outer function:
function exampleMiddleware(storeAPI) {
    return function wrapDispatch(next) {
      return function handleAction(action) {
        // Do anything here: pass the action onwards with next(action),
        // or restart the pipeline with storeAPI.dispatch(action)
        // Can also use storeAPI.getState() here
  console.log("action", action);
        return next(action)
      }
    }
  }

const middleware = applyMiddleware(thunk, exampleMiddleware)

const combinedReducers = combineReducers({
    books : bookReducer,
    // user: userReducer
})

export const store = createStore(combinedReducers, composeWithDevTools(middleware))