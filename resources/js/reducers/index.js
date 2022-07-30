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
import topCoinsReducer from "./topCoinsReducer";
import leadersCoinsReducer from "./leadersCoinsReducer";
import subscribeReducer from "./subscribeReducer";
import hotNotification from "./hotNotification";
import referralLinksReducer from "./referralLinksReducer";

const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    errors: errorsReducer,
    coinGecko: coinGeckoApiReducer,
    allUsers: allUsersReducer,
    coin: coinReducer,
    chains: chainReducer,
    vote: voteReducer,
    topCoins: topCoinsReducer,
    leaderCoins: leadersCoinsReducer,
    subscribers: subscribeReducer,
    hotNotifications: hotNotification,
    referralLinks: referralLinksReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
