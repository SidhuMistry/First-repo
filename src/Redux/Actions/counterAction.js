import { DECREMENT, INCREMENT } from "../Types/type"

export const IncrementCount = () => {
    return (dispatch) => {
        dispatch({type : INCREMENT})
    }
}

export const DecrementCount = () => {
    return (dispatch) => {
        dispatch({type : DECREMENT})
    }
}
