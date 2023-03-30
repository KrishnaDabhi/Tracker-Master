
import { applyMiddleware, createStore ,compose} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/rootReducer";



const composeEnhance = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;
export const store = createStore(rootReducer,composeEnhance(applyMiddleware(thunk)));