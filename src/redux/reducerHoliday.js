import { GET_HOLIDAY } from "./type";

const initialValues = {
    holiday: [],
}
const holidayReducer = (state = initialValues, action) => {
    
    console.log("holiday reducer..........", state);

    switch (action.type) {
        case GET_HOLIDAY:
            console.log("holiday reducer....", action.payload);
            return {
                ...state,
                holiday: action.payload
            }
        default:
            return state;
    }
}

export default holidayReducer;