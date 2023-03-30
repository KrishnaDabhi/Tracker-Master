import { GET_WORK_IN } from "./type";

const initialValues = {
    user:[],
}
const workInReducer = (state=initialValues ,action) =>{
    console.log("..........",state);

    switch (action.type) {
        case GET_WORK_IN:
            console.log(action.payload);
            return{
                ...state,
                user:action.payload
            }
        default:
            return state;
    }
}

export default workInReducer;