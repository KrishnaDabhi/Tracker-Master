import { combineReducers } from "redux";
import holidayReducer from "./reducerHoliday";
import leaveReducer from "./reducerLeave";
import userReducer from "./reducerUser";
import workInReducer from "./reducerWorkIn";

const rootReducer = combineReducers({
    holiday: holidayReducer,
    user: userReducer,
    leave:leaveReducer,
    workIn:workInReducer,


});

export default rootReducer;
