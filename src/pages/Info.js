import React from 'react';
import ButtonLogin from '../components/buttons/buttonlogin';
import Footer from '../components/footer/footer';

function Info () {

  return (

  <div className="containerInfo">
        <div className= "mainfoto">
            <ButtonLogin />
        </div>        
        <div className="onemore">
            <h4>One more streaming app, may it will be the best</h4>
            <h3>USD 10.50/month</h3>
            <h5>*Price may vary depending on the currency or platform used for payment.<br/>
                Third-party fees may apply.</h5>
            <div className="divsignup-now">
                <input type="submit" className="signup-now" value="SIGN UP NOW"/>        
            </div>  
            <h1>Watch the way you want</h1>
            <h4>Enjoy the big screen experience on your TV, or <br/>
            watch on your tablet, laptop, phone and more. You <br/>
            can watch an ever-growing selection of titles in 4K. <br/>
            Plus, you can stream on 4 screens at once, so <br/>
            everyone’s happy.</h4>
            <h1>Available on your favorite devices</h1>
        </div>
        <div className="devices">
            <div className="tv">
              <i className="fas fa-tv fa-4x"></i>
                <p>Amazon Fire TV<br/>
                    Android TV<br/>
                    Apple TV <br/>
                    Chromecast<br/>
                    LG TVs<br/>
                    Roku<br/>
                    Samsung
                </p>
            </div>
            <div className="computer"><i className="fas fa-desktop fa-4x"></i>
                <p>Chrome OS<br/>
                    MacOS<br/>
                    Windows PC <br/>
                </p>
            </div>
            <div className="mobile"><i className="fas fa-mobile fa-4x"></i>
                <p>Amazon Fire Tablets<br/>
                   Android Phones & iPad<br/>
                   iPhone & iPad<br/>
                </p>
            </div>
            <div className="consoles"><i className="fas fa-gamepad fa-4x"></i>
                <p>PS4<br/>
                   PS5<br/>
                   Xbox One<br/>
                   Xbox Series X <br/>
                   Xbox Series S <br/> 
                </p>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Info;
