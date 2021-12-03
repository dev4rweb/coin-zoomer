import {applyMiddleware, combineReducers, createStore} from "redux";
import currentUserReducer from "./currentUserReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import errorsReducer from "./errorsReducer";


const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    errors: errorsReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
