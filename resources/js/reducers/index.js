import {applyMiddleware, combineReducers, createStore} from "redux";
import currentUserReducer from "./currentUserReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    currentUser: currentUserReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
