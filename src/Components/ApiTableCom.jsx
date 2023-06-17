import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteStudent, getStudents } from '../Redux/Actions/ApiAction'

function ApiTableCom(props) {
    let student = useSelector(state => state.student.student)

    const state = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getStudents())
    }, [])
    
    const deleteUser = (id) => {
        dispatch(deleteStudent(id))
    }
  return (
    <>
        

        <table className='table mt-5'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>firstName</th>
                    <th>lastName</th>
                    <th>hobbies</th>
                    <th>gender</th>
                    <th>city</th>
                    <th>age</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {
                student?.map((x,i) =>{
                    return <tr key={i}>
                        <td>{x._id}</td>
                        <td>{x.firstName}</td>
                        <td>{x.lastName}</td>
                        <td>{x.hobbies}</td>
                        <td>{x.gender}</td>
                        <td>{x.city}</td>
                        <td>{x.age}</td>
                        <td>
                            <button className='btn btn-primary me-2' onClick={() => props.editStudent(x)}>EDIT</button>
                            <button className='btn btn-danger' onClick={() => deleteUser(x._id)}>DELETE</button>
                        </td>
                    </tr>
                })
            }
            </tbody>
        </table>
    </>
  )
}

export default ApiTableCom