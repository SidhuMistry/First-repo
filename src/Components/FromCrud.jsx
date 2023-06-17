import React, { useEffect, useRef, useState } from 'react'

function FromCrud(props) {
    let blankObj = { fname : "" , lname : "" , email : "" , password : "" , gender : "" , hobby : [] , city:"" ,profile : ""}
    const [obj, setobj] = useState({...blankObj})
    let [array, setarray] = useState()
    let [count, setcount] = useState()
    const imageRef = useRef()
    let [errorMsg, seterrorMsg] = useState([])
    useEffect(() => {
        imageRef.current.style.display = 'none';
    }, [])
    // console.log(props.children)

    useEffect(() => {
      setarray(JSON.parse(localStorage.getItem('arr')) || [])
      setcount(JSON.parse(localStorage.getItem('count')) || 1)
    }, [])

    useEffect(() => {
        localStorage.setItem('arr' , JSON.stringify(array))
      }, [array])

    useEffect(() => {
        localStorage.setItem('count' , count);
    }, [count])

    const getValue = async (e) => {
        if(e.target.name == 'hobby'){
            if(e.target.checked){
                obj.hobby = [ ...obj.hobby , e.target.value]
            }
            else{
                obj.hobby = obj.hobby.filter(x => x != e.target.value)
            }
            setobj({...obj})
        }
        else if(e.target.name == 'profile'){
            obj.profile = await toBase64(e.target.files[0])
            setobj({...obj})
            imageRef.current.style.display = 'block'
            imageRef.current.src = obj.profile
        }
        else{
            setobj({...obj , [e.target.name] : e.target.value})
        }

        if(e.target.name == 'hobby'){
            // console.log(obj.hobby)
             if(obj.hobby.length == 0){
                errorMsg.push(e.target.name)
                seterrorMsg([...errorMsg])
            }else{
                errorMsg = [...errorMsg.filter((x) => x != e.target.name)]
                seterrorMsg([...errorMsg])
            }
        }else{
            if(e.target.value != ''){
                seterrorMsg([...errorMsg.filter((x) => x != e.target.name)])
            }
            else{
                errorMsg.push(e.target.name)
                seterrorMsg([...errorMsg])
            }
        }
    }

    const Save = () => {
        for(let key in obj){
            if(key == 'hobby' && obj[key].length == 0){
                errorMsg.push(key)
            }
            if(obj[key] == ''){
                errorMsg.push(key)
            }
        }
        seterrorMsg([...errorMsg])


        if(errorMsg.length == 0){
            if(obj.id == undefined){
                obj.id = count;
                count = count+1;
                setcount(count);
                array.push(obj)
            }else{
                let index = array.findIndex((x) => x.id == obj.id)
                array.splice(index, 1, obj)
            }
        }
        console.log(errorMsg)
        setarray([...array])
        setobj({...blankObj})
        imageRef.current.style.display = 'none';
    }

    const editUser = (id) => {
        let editObj = array.find((x) => x.id == id)
        setobj({...editObj})
        console.log(editObj)
            imageRef.current.style.display = 'block'
            imageRef.current.src = editObj.profile;
    }
    
    const deleteUser = (index) => {
        // let index = array.findIndex((x) => x.id == id)
        array.splice(index , 1)
        // array = array.filter(x => x.id != id)
        setarray([...array])
    }

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
    });

  return (
    <>
        <form className='w-50 mt-5 shadow-lg p-3 mx-auto'>
            <h3>FORM</h3>
            <label htmlFor="" className='d-block mt-2 mb-1'>First Name</label> 
            <input type="text" name='fname' className='w-100' value={obj.fname} onChange={getValue} />
            { errorMsg?.includes('fname') ? 
            <span className='text-danger'>First Name is requied.</span> : <></>
            }
            <label htmlFor="" className='d-block mt-2 mb-1'>Last Name</label>
            <input type="text" name='lname' className='w-100' value={obj.lname} onChange={getValue}/>
            { errorMsg?.includes('lname') ? 
            <span className='text-danger'>Last Name is requied.</span>: <></> }

            <label htmlFor="" className='d-block mt-2 mb-1'>Email</label>
            <input type="email" name='email' className='w-100' value={obj.email} onChange={getValue}/>
            { errorMsg?.includes('email') ? 
            <span className='text-danger'>Email is requied.</span>: <></> }
            
            <label htmlFor="" className='d-block mt-2 mb-1'>Password</label>
            <input type="password" name='password' className='w-100' value={obj.password} onChange={getValue}/>
            { errorMsg?.includes('password') ? 
            <span className='text-danger'>Password is requied.</span>: <></> }

            <label htmlFor="" className='d-block mt-2 mb-1'>Profile</label>
            <input type="file" name='profile' className='w-100' onChange={getValue}/>
            { errorMsg?.includes('profile') ? 
            <span className='text-danger'>Profile is requied.</span>: <></> }

            <img src="" alt="" ref={imageRef} width={100} height={100}/>

            <label htmlFor="" className='d-block mt-2 mb-1'>City</label>
            <select name="city" className='w-100' onChange={getValue}>
                <option value="Surat">Surat</option>
                <option value="Bharuch">Bharuch</option>
                <option value="Ahemdabad">Ahemdabad</option>
            </select>
            { errorMsg?.includes('city') ? 
            <span className='text-danger'>City is requied.</span>: <></> }

            <label htmlFor="" className='d-block mt-2 mb-1'>Gender</label>
            <input type="radio" name='gender' value='Male' checked={obj.gender == 'Male'} onChange={getValue}/>Male
            <input type="radio" name='gender' value='Female' checked={obj.gender == 'Female'} onChange={getValue}/>Female <br />
            { errorMsg?.includes('gender') ? 
            <span className='text-danger'>Gender is requied.</span>: <></> }
            
            <label htmlFor="" className='d-block mt-2 mb-1'>Hobby</label>
            <input type="checkbox" name='hobby' value='write' checked={obj.hobby?.includes('write')} onChange={getValue}/>Write 
            <input type="checkbox" name='hobby' value='Read' checked={obj.hobby?.includes('Read')} onChange={getValue}/>Read 
            <input type="checkbox" name='hobby' value='drawing' checked={obj.hobby?.includes('drawing')} onChange={getValue}/>drawing <br />
            { errorMsg?.includes('hobby') ? 
            <span className='text-danger'>Hobby is requied.</span>: <></> } <br />

            <button type='button' className='btn btn-success mt-4' onClick={Save}>Save</button>
        </form>
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
                        <td><img src={x.profile} alt="" width={60} /></td>
                        <td>{x.fname}</td>
                        <td>{x.lname}</td>
                        <td>{x.email}</td>
                        <td>{x.password}</td>
                        <td>{x.gender}</td>
                        <td>{x.city}</td>
                        <td>{x.hobby?.join(', ')}</td>
                        <td>
                            <button className='btn btn-warning py-1 me-2' onClick={() => editUser(x.id)}>Edit</button>
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

export default FromCrud