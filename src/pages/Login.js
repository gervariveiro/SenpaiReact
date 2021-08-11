import React from 'react';
import ButtonLogin from '../components/buttons/buttonlogin';
import Singupbutton from '../components/buttons/buttonS';
import Footer from '../components/footer/footer';

function Login () {

return (
    <div className= "container">
      <div className = "mainfoto">
        <Singupbutton />
      </div>
      <div className="divForm">
        <form className="form">
          <input type= "email" className= "forminput" value="Email"/>
          <input type= "name" className= "forminput" value="Password"/>
        </form>
        <ButtonLogin />
      </div>
        <Footer />
      </div>
  )
  }
  
  export default Login;