import React, { useState } from 'react'
import { Navigate } from 'react-router';

export default function HelpPage(props) {
  const [navToHome, setnavTonavToHome] = useState(false);
  const [password, setPassword] = useState('');
  const [tries, setTries] = useState(1);

  const CancelRequest =(event) =>{
  if (password === props.userLogInPassword){
    setnavTonavToHome(true)
  }else{
    setTries(tries+1);
    if (tries === 3){
        let buttonCancel = document.getElementById('buttonCancel');
        buttonCancel.style.display = 'none';
    }
}
  
  }
  return (
    <div>
      <h1 className='homeTitel'>Emergency services app</h1>
      <div class="btn btn-outline-warning help2">
        <p>Hi {props.userLogIn}</p>
        <p>rescue on the way !</p>
        <p>Hi cool to - {props.whoToCall}</p>
      </div><br />
      <br /><p style={{ 'fontSize': '25px' }}>Cancel the request ? ↓</p>
      <input className='input-group-text inpStyle' onChange={(e)=>{setPassword(e.target.value)}} type="text" placeholder='enter password' />
      <br /><button id='buttonCancel' onClick={CancelRequest} className='btn btn-success buttonCancel'>ביטול</button>

      {navToHome && <Navigate replace to={props.getUserLink()} />}
    </div>
  )
}
