import React from 'react';
/*import React, { useEffect } from 'react';*/
import { BrowserRouter, Switch, Route } from "react-router-dom";
/*import { getPopularMovies,getUpcomingMovies, getNowPlayingMovies} from './api/movies';
import Carousel from './components/Carousel.js';*/
import Login from './pages/Login.js';
import Home from './pages/Home.js';
import Register from './pages/Register.js';
import Info from './pages/Info.js';
import './assets/App.css';
import { Component, useEffect, useState } from 'react';
import { getPopularMovies, getUpcomingMovies, getNowPlayingMovies } from './api/Index.js';
import Carousel from './components/Carousel';
import { IMAGE_URL } from './constants'

function App() {

    const [popularMovies, setPopularMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  
    useEffect(() => {
      getPopularMovies()
        .then((response) => {
          setPopularMovies(response.results);
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
      }, []);
  
      useEffect(() => {
        getUpcomingMovies()
          .then((response) => {
            setUpcomingMovies(response.results);
          })
          .catch((error) => {
            console.log("Error: ", error);
          });
      }, []);
  
      useEffect(() => {
        getNowPlayingMovies()
          .then((response) => {
            setNowPlayingMovies(response.results);
          })
          .catch((error) => {
            console.log("Error: ", error);
          });
        }, []);
  
        return (
    

    <div className="App">
    <div style={{ backgroundImage: `url(${IMAGE_URL}${nowPlayingMovies[2]?.poster_path})` }}>
              <h1>App Movies</h1>
              <Carousel 
                data={popularMovies}
                name="Popular Movies"
              />
              <Carousel 
                data={upcomingMovies}
                name="Upcoming movies"
              />
              <Carousel 
                name="Now Playing"
                data={nowPlayingMovies}
              />
            </div>

      <BrowserRouter>
        <Switch>
        <Route path="/Home">
            <Home />
        </Route>
        <Route path="/Login">
            <Login />
        </Route>
        <Route path="/Register">
            <Register />
        </Route>
        <Route path="/Info">
            <Info />
        </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;


/*PRUEBA PARA API

function App () {
    const [popularMovies, setPopularMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  useEffect(() => {
    getPopularMovies()
      .then((response) => {
        setPopularMovies(response.results);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
  }, []);

  useEffect(() => {
    getUpcomingMovies()
      .then((response) => {
        setUpcomingMovies(response.results);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
  }, []);

  useEffect(() => {
    getNowPlayingMovies()
      .then((response) => {
        setNowPlayingMovies(response.results);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
  }, []);

  return (
  <div>
    <h1>App Movies</h1>

    <Carousel
      data={popularMovies}
      name={"Popular Movies"}
      />
    <Carousel
      data={upcomingMovies}
      name={"Upcoming Movies"}
      />
    <Carousel
      data={nowPlayingMovies}
      name={"Now Playing"}
      />
  </div>
  
  );
}


*/


