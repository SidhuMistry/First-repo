import { DECREMENT, GET_DATA, INCREMENT } from "../Types/type";

let defaultState = {
    student : []
}
const apiReducer = (state = defaultState , action) => {
    switch (action.type){
        case GET_DATA :
            return {
                student : action.data
            };
        default : 
            return state;
    }
}

export default apiReducer