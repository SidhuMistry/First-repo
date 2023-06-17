import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function TablePage() {
    let [array, setarray] = useState()
    useEffect(() => {
        setarray(JSON.parse(localStorage.getItem('arr')) || [])
      }, [])

    const deleteUser = (index) => {
        array.splice(index , 1)
        setarray([...array])
        localStorage.setItem('arr' , JSON.stringify(array))
    }
    

  return (
    <>
        <table className='table'>
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
                        <td><img src={x.profile} alt="" width={60} /></td>
                        <td>{x.fname}</td>
                        <td>{x.lname}</td>
                        <td>{x.email}</td>
                        <td>{x.password}</td>
                        <td>{x.gender}</td>
                        <td>{x.city}</td>
                        <td>{x.hobby?.join(', ')}</td>
                        <td>
                            <Link to={`/form/${x.id}`}><button className='btn btn-warning py-1 me-2'>Edit</button></Link>
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

export default TablePage