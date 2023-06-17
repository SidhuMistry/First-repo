import React, { useEffect, useState } from 'react'
import {addStudent, updateStudent} from '../Redux/Actions/ApiAction'
import { useDispatch } from 'react-redux'
function ApiFormCom(props) {
    const [array, setarray] = useState([])
    const dispatch = useDispatch()
    let blankObj = { firstName : "" , lastName : "" ,age : '', gender : "" , hobbies : [] , city:""}
    const [obj, setobj] = useState({...blankObj})

    useEffect(() => {
        if(props.editObj){
            setobj({...props.editObj})
        }
    }, [props.editObj])
    

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
            dispatch(addStudent(obj))
        }else{
            obj.id = obj._id;
            dispatch(updateStudent(obj))
        }
        
        setobj({...blankObj})
    }

  return (
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
  )
}

export default ApiFormCom