import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'

function FormPage() {
    let blankObj = { fname : "" , lname : "" , email : "" , password : "" , gender : "" , hobby : [] , city:"" ,profile : ""}
    const [obj, setobj] = useState({...blankObj})
    let [array, setarray] = useState(JSON.parse(localStorage.getItem('arr')) || [])
    let [count, setcount] = useState()
    const imageRef = useRef()

    const params = useParams()

    useEffect(() => {
        if(params.id){
            let editObj = array.find((x) => x.id == params.id)
            setobj({...editObj})
        }
    }, [])
    
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
    }

    const Save = () => {
        if(obj.id == undefined){
            obj.id = count;
            count = count+1;
            setcount(count);
            array.push(obj)
        }else{
            let index = array.findIndex((x) => x.id == obj.id)
            array.splice(index, 1, obj)
        }
        setarray([...array])
        setobj({...blankObj})
        imageRef.current.style.display = 'none';
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

            <label htmlFor="" className='d-block mt-2 mb-1'>Last Name</label>
            <input type="text" name='lname' className='w-100' value={obj.lname} onChange={getValue}/>


            <label htmlFor="" className='d-block mt-2 mb-1'>Email</label>
            <input type="email" name='email' className='w-100' value={obj.email} onChange={getValue}/>
            
            <label htmlFor="" className='d-block mt-2 mb-1'>Password</label>
            <input type="password" name='password' className='w-100' value={obj.password} onChange={getValue}/>

            <label htmlFor="" className='d-block mt-2 mb-1'>Profile</label>
            <input type="file" name='profile' className='w-100' onChange={getValue}/>

            <img src="" alt="" ref={imageRef} width={100} height={100}/>

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
            <input type="checkbox" name='hobby' value='write' checked={obj.hobby?.includes('write')} onChange={getValue}/>Write 
            <input type="checkbox" name='hobby' value='Read' checked={obj.hobby?.includes('Read')} onChange={getValue}/>Read 
            <input type="checkbox" name='hobby' value='drawing' checked={obj.hobby?.includes('drawing')} onChange={getValue}/>drawing <br /> 

            <button type='button' className='btn btn-success mt-4' onClick={Save}>Save</button>
        </form>
    </>
  )
}

export default FormPage