import {applyMiddleware, combineReducers, createStore} from "redux";
import currentUserReducer from "./currentUserReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import errorsReducer from "./errorsReducer";
import coinGeckoApiReducer from "./coinGeckoApiReducer";
import allUsersReducer from "./allUsersReducer";


const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    errors: errorsReducer,
    coinGecko: coinGeckoApiReducer,
    allUsers: allUsersReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
