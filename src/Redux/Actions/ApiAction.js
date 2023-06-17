import axios from "axios"
import { GET_DATA } from "../Types/type"
import { loader } from "../../Services/LoaderService"

export const getStudents = () => {
    loader(true)
    return async (dispatch) => {
        await axios.get('https://student-api.mycodelibraries.com/api/student/get').then(res => {
            loader(false)
            dispatch({type : GET_DATA , data : res.data.data})
        })
    }
}


export const addStudent = (obj) => {
    return async (dispatch) => {
         axios.post('https://student-api.mycodelibraries.com/api/student/add' , obj).then(res => {
            dispatch(getStudents())
        })
    }
}

export const updateStudent = (obj) => {
    return async (dispatch) => {
         axios.post('https://student-api.mycodelibraries.com/api/student/update' , obj).then(res => {
                dispatch(getStudents())
             })
    }
}

export const deleteStudent = (id) => {
    return async (dispatch) => {
         axios.delete('https://student-api.mycodelibraries.com/api/student/delete?id='+ id).then(res => {
            dispatch(getStudents())
        })
    }
}