import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

function Login() {
    const [obj, setobj] = useState({email :'', password : ''})
    
    const navigate = useNavigate();

    const getValue = (e) => {
        obj[e.target.name] = e.target.value;
        setobj({...obj})
    }

    const save = () => {
        let array = JSON.parse(localStorage.getItem('arr') || [])
        let loginObj = array.find((x) => (x.email == obj.email))
        debugger
        if(loginObj){
            if(loginObj.password == obj.password){
                navigate('/');
                localStorage.setItem('isLogin' , loginObj.id)
                window.location.href = '/';
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Password wrong!!',
                    toast : true
                  })
            }
            
        }else if(obj.email == '' || obj.password == ''){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Value must be required!!',
                toast : true
              })
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'User not found!!',
                toast : true
              })
        }
    }
  return (
    <>
    <div className='d-flex align-items-center justify-content-center flex-column' style={{height:'100vh'}}>
        <h4>Welcome to Login!!</h4>

        <form action="">
            <label htmlFor="">Email</label> <br />
            <input type="text" name='email' onChange={getValue} /> <br />
            <label htmlFor="">Password</label> <br />
            <input type="password" name='password' onChange={getValue}  />
        </form>
        <button className='btn btn-info mt-3' onClick={save}>Login</button>
        <Link to='/signup'>Create Account</Link>
    </div>
    </>
  )
}

export default Login