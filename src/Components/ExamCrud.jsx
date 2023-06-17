import React, { useState } from 'react'

function ExamCrud() {

    let blankObj = {name : '', email : '', number : '', gender : '', hobby : []}
    const[obj,setobj] = useState({...blankObj});
    const [array, setarray] = useState([])

    const show = () => {
        array.push(obj)
        setarray([...array])
        console.log(obj);
        setobj({...blankObj})
    }

    const getvalue = (e) => {
        if(e.target.name == 'hobby'){
            if(e.target.checked){
                obj.hobby = [...obj.hobby , e.target.value]
            }
            else{
                obj.hobby = obj.hobby.filter(x => x != e.target.value)
            }
            setobj({...obj})
        }
        else{
            setobj ({...obj, [e.target.name]: e.target.value})
        }

    }
    const edituser=(id)=>{
         let editobj=array.find(x=>x.id==id)
        setobj({...editobj})
    }
    const deletuser=(index)=>{
        array.splice(index,1);
        setarray([...array]);
    }
    



  return (
    <>
    <form action="" className='w-50 mx-auto shadow-lg p-4 my-3 '>
        <label htmlFor="" className='w-100'>Name:</label>
        <input type="text" name='name' className='w-100' value={obj.name} onChange={getvalue} />
        <label htmlFor="" className='w-100'>Email:</label>
        <input type="email" name='email' className='w-100'value={obj.email}  onChange={getvalue} />
        <label htmlFor="" className='w-100'>Phone no:</label>
        <input type="number" name='number' className='w-100'value={obj.number}  onChange={getvalue} />
        <label htmlFor="" className='w-100'>Gender</label>
        <input type="radio" name='gender' value='male' checked= { obj.gender=='male'}onChange={getvalue}/>male
        <input type="radio" name='gender' value='female'  checked= { obj.gender=='female'}onChange={getvalue}/>female
        <label htmlFor="" className='w-100'>Hobby</label>
        <input type="checkbox" name='hobby' value='red' checked= { obj.hobby?.includes('red')}onChange={getvalue}/>red
        <input type="checkbox" name='hobby' value='blue' checked= { obj.hobby?.includes('blue')}onChange={getvalue} />blue
        <input type="checkbox" name='hobby' value='yellow'checked= { obj.hobby?.includes('yellow')}onChange={getvalue} />yellow
        <input type="checkbox" name='hobby' value='black'checked= { obj.hobby?.includes('black')} onChange={getvalue}/>black


        <button className='btn btn-primary' type='button' onClick={show}>save</button>
    </form>

    <table className='table '>
            <thead>
                <tr>
                    <th>Name:</th>
                    <th>Email:</th>
                    <th>Phone no:</th>
                    <th>Gender</th>
                    <th>Hobby:</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                {
                    array.map((x,i)=>{
                        return(
                            <tr  key={i}>
                                <td>{x.name}</td>
                                <td>{x.email}</td>
                                <td>{x.number}</td>
                                <td>{x.gender}</td>
                                <td>{x.hobby.join(',')}</td>
                                <td>
                                    <button className='btn btn-success' onClick={()=>edituser(x.id)}>edit user</button>
                                    <button className='btn btn-warning' onClick={()=>deletuser(i)}>deletuder</button>
                                </td>
                            </tr>
                        )
                    })

                }
            </tbody>
    </table>

    </>
  )
}

export default ExamCrud