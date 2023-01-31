import axios from 'axios'
import React, { useState } from 'react'
import './Login.css'

const Login = () => {
   const [email,setEmail] = useState("")
    const [password,setPassword] =useState("")
    const emailHandler =(e) => {
      setEmail(e.target.value)
    }

    const pswdHandler = (e) => {
      setPassword(e.target.value)
    }
  
     
     const getData = (e) => {
     let data = new FormData()
     data.append("email",email)
     data.append("password",password)

      axios.post("http://127.0.0.1:8000/api/login/",data)
     .then ((response) => {
      window.location = "/admin"
     }).catch(error => {
      console.log('There was an error!', error);
  })
     
     }
    
  return (
    <div className='login-form'>
      <div className='form1'>
        <div style={{width:"100%",marginBottom:"30px",alignItems:"center"}}>
        <h1 className='main'>Login</h1>
      <hr />
        <div>
          <form className='login-field'>
            <input type="text" placeholder='Username' className='px-3 my-4' value={email} onChange={emailHandler}  /><br />
            <input type="password" placeholder='Password' className='px-3 my-2' value={password} onChange={pswdHandler}/>
          </form>
          </div>
          <div className='pt-4'>
            <button className='btn btn-primary px-5 login-btn' type='submit' onClick={getData}>Login</button>
          </div>
        
        
      {/* <h1 className='pt-3' >Login</h1>
      <hr />
        <div >
          <form className='login-field'>
            <input type="text" placeholder='Username'  className='px-3 my-4'/><br />
            <input type="password" placeholder='password' className='px-3' />
          </form>
          </div>
          <div className='pt-4'>
            <button className='btn btn-primary px-5 login-btn' type='submit' >Login</button>
  </div>*/}
    </div>
    </div>
    </div> 

  )
}

export default Login