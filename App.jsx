import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import swal from 'sweetalert';
import Signup from './Mycomponents/Signup';
import HomeApp from './Mycomponents/HomeApp';
import HelpPage from './Mycomponents/HelpPage';
import './App.css';

function App() {
  
  const [users, setusers] = useState([])
  const getNewUser = (userName, password) =>{
    setusers([...users, {
      userName: userName,
      password: password
    }])
  }
  const getClicHelp = (help) =>{
    setusers([...users, {
      userName: users.userName,
      password: users.password,
      help: help
    }])
  }
  const [whoToCall, setWhoToCall] = useState("A-101");
  const [userLogIn, setuserLogIn] = useState('');
  const [userLogInPassword, setuserLogInPassword] = useState('');
  const getUserLink = () =>{
    return `/${userLogIn}`
  }
  const getUserCallLink = () =>{
    return `/${userLogIn}/${whoToCall}`
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Signup getUserLink={getUserLink} getNewUser={getNewUser} userLogIn={userLogIn} setuserLogIn={setuserLogIn} setuserLogInPassword={setuserLogInPassword} />} />
           <Route path={getUserLink()} element={<HomeApp getUserCallLink={getUserCallLink} userLogIn={userLogIn} whoToCall={whoToCall} setWhoToCall={setWhoToCall}/>} />
          <Route path={getUserCallLink()} element={<HelpPage userLogIn={userLogIn} whoToCall={whoToCall} userLogInPassword={userLogInPassword} getUserLink={getUserLink} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

