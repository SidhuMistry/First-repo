
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'

function TokenCrud() {
    const [array, setarray] = useState([])
    let blankObj = { name : "", email : "", status : "" , gender : "" }
    const [obj, setobj] = useState({...blankObj})

    const schema = yup.object({
        name : yup.string().required().min(8).max(10),
        status : yup.string().required(),
        gender : yup.string().required(),
        email: yup.string().email().required()
    });
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
      });

    let tokenHeader = {
        headers : {
            'Authorization' : 'Bearer 69b3db20f84306ecab5168e9f50f1cc00edfadaa5f101f7246b46ef64c8cc70e',
        }
    }

    useEffect(() => {
        getApi()
    }, [])

    const getApi = () => {
        axios.get('https://gorest.co.in/public/v2/users', tokenHeader).then(res => {
            console.log(res)
            setarray([...res.data])
        })
    }

    const Save = (data) => {
        console.log(data)
        if(data._id == undefined){
            axios.post('https://gorest.co.in/public/v2/users' , data, tokenHeader).then(res => {
                getApi()
             })
        }else{
            data.id = data._id;
            axios.post('https://student-api.mycodelibraries.com/api/student/update' , data ).then(res => {
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
        axios.delete('https://student-api.mycodelibraries.com/api/student/delete?id='+ id).then(res => {
            getApi();
        })
    }

  return (
    <>
    <form className='w-50 mt-5 shadow-lg p-3 mx-auto' onSubmit={handleSubmit(Save)}>
            <h3>FORM</h3>
            <label htmlFor="" className='d-block mt-2 mb-1'>First Name</label> 
            <input type="text" name='name' className='w-100' {...register("name", { required: true })}  />
            {console.log(errors)}
            {errors.name && <span className='text-danger'>{errors.name.message}</span>}

            <label htmlFor="" className='d-block mt-2 mb-1'>Email</label> 
            <input type="email" name='email' className='w-100' {...register("email", { required: true })} />

            {errors.email && <span className='text-danger'>{errors.email.message}</span>}


            <label htmlFor="" className='d-block mt-2 mb-1'>Gender</label>
            <input type="radio" name='gender' value='Male'  {...register("gender" , { required: true })} />Male
            <input type="radio" name='gender' value='Female' {...register("gender")}  />Female <br />

            {errors.gender && <span className='text-danger'>{errors.gender.message}</span>}

            <label htmlFor="" className='d-block mt-2 mb-1'>Status</label>
            <input type="radio" name='status' value='Active' {...register("status" , { required: true })}  />Active
            <input type="radio" name='status' value='inactive' {...register("status", { required: true })}  />inactive <br />

            {errors.status && <span className='text-danger'>{errors.status.message}</span>}

            <button type='submit' className='btn btn-success mt-4'>Save</button>
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
                array?.map((x,i) =>{
                    return <tr key={i}>
                        <td>{x.id}</td>
                        <td>{x.name}</td>
                        <td>{x.email}</td>
                        <td>{x.gender}</td>
                        <td>{x.status}</td>
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

export default TokenCrud