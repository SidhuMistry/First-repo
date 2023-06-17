import { DECREMENT, DECREMENT_NUMBER, INCREMENT, INCREMENT_NUMBER } from "../Types/type"

export const IncrementNumber = () => {
    return (dispatch) => {
        dispatch({type : INCREMENT_NUMBER})
    }
}

export const DecrementNumber = () => {
    return (dispatch) => {
        dispatch({type : DECREMENT_NUMBER})
    }
}
