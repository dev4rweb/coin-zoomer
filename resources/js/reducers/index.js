import {applyMiddleware, combineReducers, createStore} from "redux";
import currentUserReducer from "./currentUserReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import errorsReducer from "./errorsReducer";
import coinGeckoApiReducer from "./coinGeckoApiReducer";
import allUsersReducer from "./allUsersReducer";
import coinReducer from "./coinReducer";
import chainReducer from "./chainReducer";
import voteReducer from "./voteReducer";

const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    errors: errorsReducer,
    coinGecko: coinGeckoApiReducer,
    allUsers: allUsersReducer,
    coin: coinReducer,
    chains: chainReducer,
    vote: voteReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
