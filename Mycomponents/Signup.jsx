import React, { useState } from 'react'
import { Navigate } from 'react-router';
export default function Signup(props) {
    const [userName, setuserName] = useState('');
    const [password, setpassword] = useState('');

    const [navToUserPage, setnavToUserPage] = useState(false)

    const setUserNameFn = (event) => {
        let name = event.target.value;
        let errorName = document.getElementById('errorName');
        if (name) {
            if (name.length > 0 && name.length < 4) {
                errorName.style.display = 'block'
            } else {
                errorName.style.display = 'none'
            }
        }
        if (name.length > 3 && isNaN(name)) {
            setuserName(name)
        }
    }
    const setPasswordFn = (event) => {
        let regularExpression  = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        let newPassword = event.target.value;
        let errorPassword = document.getElementById('errorPassword');
        if (errorPassword) {
            if (newPassword.length > 0 && newPassword.length < 8) {
                errorPassword.style.display = 'block'
            } else {
                errorPassword.style.display = 'none'
            }
        }
        if (newPassword.length > 7 && regularExpression.test(newPassword)) {
            setpassword(newPassword)
        }
        if (userName != '' && password != '') {
            props.setuserLogIn(userName)
            props.setuserLogInPassword(password)
            props.getNewUser(userName, password)
            setnavToUserPage(true)
        }
    }

    return (
        <div>
            <h1 className='homeTitel'>Sign Up</h1>
            <input className='input-group-text inpStyle' type="text" onChange={setUserNameFn} placeholder='full Name' /><br />
            <p style={{ 'display': 'none' }} id='errorName'> * The name must be 4 characters long !</p>
            <br /> <input className='input-group-text inpStyle' type="text" onChange={setPasswordFn} placeholder='password' /><br />
            <p style={{ 'display': 'none' }} id='errorPassword'>* The password must be 8 characters long !</p>
            {navToUserPage && <Navigate replace to={props.getUserLink()} />}
        </div>
    )
}
