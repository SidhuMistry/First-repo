import { useEffect, useReducer, useState } from 'react';
import userReducer from './userReducer';
import axios from 'axios';

function ReducerComp() {
    const [state, dispatch] = useReducer(userReducer, [])
    const [array, setarray] = useState([])
    let blankObj = { name : "", email : "", status : "" , gender : "" }
    const [obj, setobj] = useState({...blankObj})
    const [arr, setarr] = useState([])

    useEffect(() => {
        dispatch({type : 'GET'})
    }, [])
    
    useEffect(() => {
        getData()
    }, [state])
    
    const getData = async () => {
        setarr(await state)
    }
    
    const getValue = async (e) => {
        setobj({...obj , [e.target.name] : e.target.value})
    }

    const Save = () => {
        if(obj.id == undefined){
            dispatch({type : 'POST' , obj : obj})
        }else{
            dispatch({type : 'UPDATE' , obj : obj})
        }
        setobj({...blankObj})
    }

    const editUser = (id) => {
        let editObj = arr.find(x => x.id == id)
        setobj({...editObj})
    }

    const deleteUser = (id) => {
        dispatch({type : 'DELETE' , id : id})
    }

    return (
    <>
         {/* <h2>Value : {state}</h2>
        <button onClick={() => dispatch({type : 'INCREMENT' })}>INCREMENT</button>
        <button onClick={() => dispatch({type : 'DECREMENT'})}>DECREMENT</button> */}
        <form className='w-50 mt-5 shadow-lg p-3 mx-auto'>
            <h3>FORM</h3>
            <label htmlFor="" className='d-block mt-2 mb-1'>First Name</label> 
            <input type="text" name='name' className='w-100' value={obj.name} onChange={getValue} />

            <label htmlFor="" className='d-block mt-2 mb-1'>Email</label> 
            <input type="email" name='email' className='w-100' value={obj.email} onChange={getValue} />


            <label htmlFor="" className='d-block mt-2 mb-1'>Gender</label>
            <input type="radio" name='gender' value='male' checked={obj.gender == 'male'} onChange={getValue}/>Male
            <input type="radio" name='gender' value='female' checked={obj.gender == 'female'} onChange={getValue}/>Female <br />

            <label htmlFor="" className='d-block mt-2 mb-1'>Status</label>
            <input type="radio" name='status' value='Active' checked={obj.status == 'Active'} onChange={getValue}/>Active
            <input type="radio" name='status' value='inactive' checked={obj.status == 'inactive'} onChange={getValue}/>inactive <br />

            <button type='button' className='btn btn-success mt-4' onClick={Save}>Save</button>
        </form>

        <table className='table mt-5'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>email</th>
                    <th>gender</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {
                arr?.map((x,i) =>{
                    return <tr key={i}>
                        <td>{x.id}</td>
                        <td>{x.name}</td>
                        <td>{x.email}</td>
                        <td>{x.gender}</td>
                        <td>{x.status}</td>
                        <td>
                            <button className='btn btn-primary me-2' onClick={() => editUser(x.id)}>EDIT</button>
                            <button className='btn btn-danger' onClick={() => deleteUser(x.id)}>DELETE</button>
                        </td>
                    </tr>
                })
            }
            </tbody>
        </table>
    </>
    )
}

export default ReducerComp