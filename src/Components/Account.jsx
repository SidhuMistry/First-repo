import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import {AiOutlineCloseCircle} from 'react-icons/ai'

function Account() {
    const navigate = useNavigate();
    const [user, setuser] = useState({})
    const [isShowImg, setisShowImg] = useState(false)

    useEffect(() => {
      let id = localStorage.getItem('isLogin')
      console.log(id)
      debugger
      let array = JSON.parse(localStorage.getItem('arr'))
      let obj = array.find(x => x.id == id)
      setuser({...obj})
    }, [])
    
    const logout = () => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to logout!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        toast:true,
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem('isLogin');
          navigate('/');
          window.location.href = '/';
        }
      })

        
    }

    const openImage = () => {
      setisShowImg(true)
    }

  return (
    <>
        <div className='d-flex align-items-center justify-content-center flex-column' style={{height:'100vh'}}>
          <img src={user.img} alt="" width={200} height={200} onClick={() => openImage()} />
            <h2 className='text-success'>Welcome {user?.fname}!!</h2>
            <button className='btn btn-danger' onClick={logout}>Logout</button>
        </div>
        
        {
          isShowImg ? 
            <div className='img_div'>
                <div className='float-end m-3'><AiOutlineCloseCircle style={{cursor : 'pointer'}} color='white' size={30} onClick={() => setisShowImg(false)} /></div>
                <img src={user.img} alt="" />
            </div> : <></>
        }
        
    </>
  )
}

export default Account