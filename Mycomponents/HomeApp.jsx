import React, { useState } from 'react'
import swal from 'sweetalert';
import { Navigate } from 'react-router';
import { Button } from 'bootstrap';
import HelpPage from './HelpPage';

export default function HomeApp(props) {
  const [navToHelpPage, setnavToHelpPage] = useState(false)
  const [navToHsignup, setnavToHsignup] = useState(false)
  const [selectHelp, setselectHelp] = useState("A-101");

  const Checkselect = (event) => {
    let select = event.target.value;
    setselectHelp(select)
    if (selectHelp != '') {
      props.setWhoToCall(select)
      props.getClicHelp(select)
    }

  }
  const clickHelp = () => {
    setnavToHelpPage(true)
  }
  return (
    <div>
      <nav class="navbar bg-light">
        <div class="container-fluid">
          <a class="navbar-brand">Navbar</a>
          <select style={{'margin':'auto'}} className='selectStyle' onChange={Checkselect} defaultValue={'DEFAULT'}>
            <option value='DEFAULT' disabled>תבחר שירות הצלה</option>
            <option value="A-101">מגן דוד</option>
            <option value="B-100">משטרה</option>
            <option value="C-102">כיבוי והצלה</option>
          </select>
          <button style={selectHelp ? {'display':'block'} : {'display':'none'}} type="button" class="btn btn-primary">{selectHelp}</button>
        </div>
      </nav>
      <button  onClick={clickHelp} type="button" class="btn btn-danger help">Help</button>


      {navToHelpPage && <Navigate replace to={props.getUserCallLink()} />}
    </div>
  )
}
