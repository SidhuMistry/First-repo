import React, { useEffect, useLayoutEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './app.scss';
import FormCom from './Components/FormCom';
import FromCrud from './Components/FromCrud';
import { FaCreativeCommonsNc, FaChrome } from 'react-icons/fa';
import * as FontAwesome from 'react-icons/fa'
import ClassCrud from './Components/ClassCrud';
import ExamCrud from './Components/ExamCrud';
import Parent from './Components/Parent';
import ClassCom from './Components/ClassCom';
import useCookie from 'react-use-cookie';
import LifeCycleFunc from './Components/LifeCycleFunc';
import Home from './Components/Home';
import About from './Components/About';
import { BrowserRouter, Link, NavLink, Navigate, Route, Routes } from 'react-router-dom';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Page404 from './Components/Page404';
import Form from './Components/Form';
import TableData from './Components/TableData';
import Service1 from './Components/Service1';
import Service2 from './Components/Service2';
import Login from './Components/Login';
import Account from './Components/Account';
import SignUp from './Components/SignUp';
import MemoHook from './Components/MemoHook';
import CallBackHook from './Components/CallBackHook';
import ApiCrud from './Components/ApiCrud';
import FormPage from './Components/FormPage';
import TablePage from './Components/TablePage';
import FetchApi from './Components/FetchApi';
import UserApi from './Components/UserApi';
import abc from './assets/data.json'
import UseCustomHook from './Components/UseCustomHook';
import ReducerComp from './Components/ReducerComp';
import TokenCrud from './Components/TokenCrud';
import ViewCount from './Components/ViewCount';
import ChangeState from './Components/ChangeState';
import ApiFormCom from './Components/ApiFormCom';
import ApiTableCom from './Components/ApiTableCom';
import ChartCom from './Components/ChartCom';
import Loader from './Components/Loader';
function App() {

  const [number, setnumber] = useState(90)
  // let aa = ['Marmik',  'karupali', 'Siddharth']
  const [isShow, setisShow] = useState(true)
  const [name, setname] = useCookie('token', '');
  const [AA, setAA] = useCookie('AA', 'sd');
  const [first, setfirst] = useState(true)
  let [array, setarray] = useState(JSON.parse(localStorage.getItem('arr')) || [])
  let [editObj, seteditObj] = useState()
  const [activeClass, setactiveClass] = useState('')
  const [isLogin, setisLogin] = useState(localStorage.getItem('isLogin'))
  // const [num ,setNum] = UseCustomHook(80)
  // console.log(num)

  const updateNumber = () => {
    setnumber(number + 1)
    localStorage.setItem('constructor', 'Sidhu')
  }

  const FlagFunc = () => {
    setfirst(!first)
    setarray(JSON.parse(localStorage.getItem('arr')) || [])
    seteditObj()
  }
  const editUser = (id) => {
    let obj = array.find((x) => x.id == id)
    seteditObj({ ...obj })
    // setobj({...editObj})
    // console.log(editObj)
    // imageRef.current.style.display = 'block'
    // imageRef.current.src = editObj.img;
  }

  const data = [
    {
      displayText: 'Home',
      to: '/home'
    },
    {
      displayText: 'About',
      to: '/About'
    },
    {
      displayText: 'Services',
      to: '/Services/service1'
    },
    {
      displayText: 'Contact',
      to: '/Contact'
    },
  ]

  const editStudent = (obj) => {
    editObj = obj
    seteditObj({...editObj})
  }
  return (
    <>
    <Loader />
    {/* <ChartCom /> */}
    <ApiFormCom editObj={editObj} />
    <ApiTableCom editStudent={editStudent} />
    {/* <button onClick={() => setNum(num+1)}>Click</button> */}
    {/* <ApiCrud /> */}
    {/* <FetchApi /> */}
    {/* <UserApi /> */}
    {/* <ReducerComp /> */}
    {/* <Service1 /> */}
    {/* <TokenCrud /> */}
    {/* <ClassCom /> */}
    {/* <ViewCount />
    <ChangeState /> */}
    {/* <CallBackHook /> */}
    {/* <MemoHook /> */}
      {/* <FromCrud >oscar</FromCrud> */}
      {/* <ClassCrud /> */}
      {/* <ExamCrud /> */}
      {/* <Parent /> */}
      {/* {
        isShow ?
          <ClassCom num={number} updateNumber={updateNumber}/> : 
          <></>
      } */}

      {/* {
        isShow ?
          <LifeCycleFunc/> : 
          <></>
      }

      <button onClick={() => setisShow(false)}>Hide</button> */}

      {/* <div>
        <p>{name}</p>
        <p>{AA}</p>
        <button onClick={() => setAA('sdf', {
                        minutes: 1,
                        SameSite: 'Strict',
                        Secure: true,
                      })}>Change token</button>
      </div> */}

      {/* <div className='p-3 bg-dark menu' style={{height:'15vh'}}>
          {
            data.map((x) => {
              return <Link to={x.to} className={activeClass == x.displayText ? 'btn_active' : ''} onClick={() => setactiveClass(x.displayText)}>{x.displayText}</Link>
            })
          }
        </div> */}
      <BrowserRouter>


        {/* <div className='p-3 bg-dark menu' style={{height:'15vh'}}>
          {
            data.map((x) => {
              return <NavLink to={x.to}>{x.displayText}</NavLink>
            })
          }
        </div>  */}
        
        {/* <Routes> */}
          {/* <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} >
            <Route path='service1' element={<Service1 />} />
            <Route path='service2' element={<Service2 />} />
          </Route>
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Navigate to='/error' />} />
          <Route path='/error' element={<Page404 />} />
        </Routes> */}
      {/* </BrowserRouter> */}
      {/* <Form FlagFunc={FlagFunc} first={first} editObj={editObj} />
      <TableData first={first} editUser={editUser} FlagFunc={FlagFunc} /> */}
      {/* <BrowserRouter> */}
      <div className=''>
        {/* <NavLink to='/form'>Form</NavLink>
        <NavLink to='/table'>Table</NavLink> */}
      </div>
        <Routes>
          {/* <Route path='/' element={<Navigate to='/form' />} />
          <Route path='/form' element={<FormPage />} >
            <Route path=':id' />
          </Route>
          <Route path='/table' element={<TablePage />} /> */}
          {/* {
            isLogin ? 
              <>
                <Route path='/' element={<Navigate to='/account' />} />
                <Route path='/account' element={<Account />} />
                <Route path='*' element={<Navigate to='/account' />} />
              </>:
              <>
                <Route path='/' element={<Navigate to='/login' />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='*' element={<Navigate to='/login' />} />
              </>
          } */}
          {/* <Route path='/class' element={<ClassCrud />} >
            <Route path=':number' />
          </Route> */}
           {/* <Route path='*' element={<Navigate to='/error' />} />
          <Route path='/error' element={<Page404 />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
