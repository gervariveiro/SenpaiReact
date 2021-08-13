import React from 'react';
import Footer from '../components/footer/footer';
import Singupbutton from '../components/buttons/buttonS';
import ButtonLogin from '../components/buttons/buttonlogin';


function Register () {

  return (

    <div className="containerRegister">
      <div className="fotoyform1">
          <div className= "mainfoto2">
          </div>
          <div className="form1">
                  <form className="form">
                      <input type= "name" className= "forminput" value="Name"/>
                      <input type= "country" className= "forminput" value="Country"/>
                      <input type= "pwd" className= "forminput" value="Password"/>
                      <input type= "confirm pwd" className= "forminput" value="Confirm Password"/>
                  </form>
          </div>
          <ButtonLogin />
      </div>
      <div className="form2">
          <div className= "choose">
              <h3>Choose your plan</h3>
              <p>Acording with your plan you will have an specific<br/>catalogue of movies</p>
          </div>   
          <div className="inputform2">
              <input type="radio" name="latino" id="latino"/>
              <label for="latino">Latino +</label><br/>
              <input type="radio" name="international" id="international"/>
              <label for="international">International +</label><br/>
              <input type="radio" name="art" id="art"/>
              <label for="latino">Art +</label> <br/>
          </div>
          <Singupbutton />
      </div>
    <Footer />
</div>
  )
}

export default Register;
