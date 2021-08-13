import React from 'react';
import Movy from '../components/buttons/movy';
import Footer from '../components/footer/footer';
import Icons from '../components/Icons/Icons';

function Home () {


    return (
  
      <div className="container2">
          <div className="play">
            <ul className="categories">
              <li>Kids</li>
              <li>•</li>
              <li>Fantasy Movie</li>
              <li>•</li>
              <li>Action</li>
            </ul>
            <Movy />
            <Icons />
            </div>
        <div className="movies">
          <h4>My List</h4>
        </div>
            <Footer />
        </div>
      )
    }
  
  export default Home;