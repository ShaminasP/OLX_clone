import React,{useEffect,useContext} from 'react';
import { Routes,Route} from 'react-router-dom'
import './App.css';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Home from './Pages/Home';
import Create from './Pages/Create';
import {AuthContext} from './Store/FirebaseContext'
import {auth} from './Firebase/Config'
import { onAuthStateChanged } from 'firebase/auth';


function App() {
  const {setUser}=useContext(AuthContext);
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      setUser(user);
    })
  })
  return (
    <div>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/create' element={<Create/>}/>

     </Routes>
    </div>
  );
}

export default App;
