import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

function ApiCrud() {
    const [array, setarray] = useState([])
    let blankObj = { firstName : "" , lastName : "" ,age : '', gender : "" , hobbies : [] , city:""}
    const [obj, setobj] = useState({...blankObj})


    useEffect(() => {
        getApi()
    }, [])

    const getApi = () => {
        axios.get('https://student-api.mycodelibraries.com/api/student/get').then(res => {
            setarray([...res.data.data])
        })
    }

    const getValue = async (e) => {
        if(e.target.name == 'hobbies'){
            if(e.target.checked){
                obj.hobbies = [ ...obj.hobbies , e.target.value]
            }
            else{
                obj.hobbies = obj.hobbies.filter(x => x != e.target.value)
            }
            setobj({...obj})
        }
        else{
            setobj({...obj , [e.target.name] : e.target.value})
        }
    }

    const Save = () => {
        if(obj._id == undefined){
            axios.post('https://student-api.mycodelibraries.com/api/student/add' , obj).then(res => {
                getApi()
             })
        }else{
            obj.id = obj._id;
            axios.post('https://student-api.mycodelibraries.com/api/student/update' , obj ).then(res => {
                getApi()
             })
        }
        
        setobj({...blankObj})
    }

    const editUser = (id) => {
        axios.get('https://student-api.mycodelibraries.com/api/student/get-student-by-id?id='+id).then(res => {
            let editObj = res.data.data;
            editObj.hobbies = editObj.hobbies.split(',')
            setobj({...editObj})
        })
    }

    const deleteUser = (id) => {
        console.log('https://student-api.mycodelibraries.com/api/student/delete?id='+ id)
        axios.delete('https://student-api.mycodelibraries.com/api/student/delete?id='+ id).then(res => {
            console.log(res);
            getApi();
        })
    }

  return (
    <>
    <form className='w-50 mt-5 shadow-lg p-3 mx-auto'>
            <h3>FORM</h3>
            <label htmlFor="" className='d-block mt-2 mb-1'>First Name</label> 
            <input type="text" name='firstName' className='w-100' value={obj.firstName} onChange={getValue} />

            <label htmlFor="" className='d-block mt-2 mb-1'>Last Name</label>
            <input type="text" name='lastName' className='w-100' value={obj.lastName} onChange={getValue}/>

            <label htmlFor="" className='d-block mt-2 mb-1'>Age</label>
            <input type="number" name='age' className='w-100' value={obj.age} onChange={getValue}/>

            <label htmlFor="" className='d-block mt-2 mb-1'>City</label>
            <select name="city" className='w-100' onChange={getValue}>
                <option value="Surat">Surat</option>
                <option value="Bharuch">Bharuch</option>
                <option value="Ahemdabad">Ahemdabad</option>
            </select>

            <label htmlFor="" className='d-block mt-2 mb-1'>Gender</label>
            <input type="radio" name='gender' value='Male' checked={obj.gender == 'Male'} onChange={getValue}/>Male
            <input type="radio" name='gender' value='Female' checked={obj.gender == 'Female'} onChange={getValue}/>Female <br />
            
            <label htmlFor="" className='d-block mt-2 mb-1'>Hobby</label>
            <input type="checkbox" name='hobbies' value='write' checked={obj.hobbies?.includes('write')} onChange={getValue}/>Write 
            <input type="checkbox" name='hobbies' value='Read' checked={obj.hobbies?.includes('Read')} onChange={getValue}/>Read 
            <input type="checkbox" name='hobbies' value='drawing' checked={obj.hobbies?.includes('drawing')} onChange={getValue}/>drawing <br />

            <button type='button' className='btn btn-success mt-4' onClick={Save}>Save</button>
        </form>

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
                array?.map((x,i) =>{
                    return <tr key={i}>
                        <td>{x._id}</td>
                        <td>{x.firstName}</td>
                        <td>{x.lastName}</td>
                        <td>{x.hobbies}</td>
                        <td>{x.gender}</td>
                        <td>{x.city}</td>
                        <td>{x.age}</td>
                        <td>
                            <button className='btn btn-primary me-2' onClick={() => editUser(x._id)}>EDIT</button>
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

export default ApiCrud