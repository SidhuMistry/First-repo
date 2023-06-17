import { DECREMENT, DECREMENT_NUMBER, INCREMENT, INCREMENT_NUMBER } from "../Types/type";

let defaultState = {
    num : 12
}
const numberReducer = (state = defaultState , action) => {
    switch (action.type){
        case INCREMENT_NUMBER :
            return {
                num : state.num + 1
            };
        case DECREMENT_NUMBER :
            return {
                num : state.num - 1
            };
        default : 
            return state;
    }
}

export default numberReducer