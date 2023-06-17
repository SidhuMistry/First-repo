import React, { useEffect, useState } from 'react'

function TableData(props) {

    let [array, setarray] = useState(JSON.parse(localStorage.getItem('arr')) || [])
    useEffect(() => {
        setarray(JSON.parse(localStorage.getItem('arr')) || [])
    }, [props.first])

    const deleteUser = (index) => {
        // let index = array.findIndex((x) => x.id == id)
        array.splice(index , 1)
        // array = array.filter(x => x.id != id)
        setarray([...array])
        localStorage.setItem('arr' , JSON.stringify(array))
        props.FlagFunc()
    }
  return (
    <>
    
        <table className='table mt-4'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Profile</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Gender</th>
                    <th>City</th>
                    <th>Hobby</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    array?.map((x,i) => {
                        return <tr key={i}>
                        <td>{x.id}</td>
                        <td><img src={x.img} alt="" width={60} /></td>
                        <td>{x.fname}</td>
                        <td>{x.lname}</td>
                        <td>{x.email}</td>
                        <td>{x.password}</td>
                        <td>{x.gender}</td>
                        <td>{x.city}</td>
                        <td>{x.hobby?.join(', ')}</td>
                        <td>
                            <button className='btn btn-warning py-1 me-2' onClick={() => props.editUser(x.id)}>Edit</button>
                            <button className='btn btn-danger py-1' onClick={() => deleteUser(i)} >Delete</button>
                        </td>
                    </tr>
                    })
                }
                
            </tbody>
        </table>
    </>
  )
}

export default TableData