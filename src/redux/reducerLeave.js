import {GET_LEAVE} from "./type";

const initialValues = {
    user:[],
}
const leaveReducer = (state=initialValues ,action) =>{
    console.log("..........",state);

    switch (action.type) {
        case GET_LEAVE:
            console.log(action.payload);
            return{
                ...state,
                user:action.payload
            }
        default:
            return state;
    }
}

export default leaveReducer;