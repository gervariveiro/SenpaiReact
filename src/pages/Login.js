import React from 'react';
import ButtonLogin from '../components/buttons/buttonlogin';
import Singupbutton from '../components/buttons/buttonS';
import Footer from '../components/footer/footer';

function Login () {

return (
    <div className= "containerLogin">
      <div className = "mainfoto">
        <Singupbutton />
      </div>
      <div className="divform">
        <form className="form">
          <input type= "email" className= "forminput" placeholder="Email"/>
          <input type= "name" className= "forminput" placeholder="Password"/>
        </form>
        <ButtonLogin />
      </div>
        <Footer />
      </div>
  )
  }
  
  export default Login;