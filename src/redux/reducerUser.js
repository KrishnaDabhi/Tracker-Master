import { GET} from "./type";

const initialValues = {
    user:[],
}
const userReducer = (state=initialValues ,action) =>{
    console.log("..........",state);

    switch (action.type) {
        case GET:
            console.log(action.payload);
            return{
                ...state,
                user:action.payload
            }
        default:
            return state;
    }
}

export default userReducer;