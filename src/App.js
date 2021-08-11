import React from 'react';
/*import React, { useEffect } from 'react';*/
import { BrowserRouter, Switch, Route } from "react-router-dom";
/*import { getPopularMovies,getUpcomingMovies, getNowPlayingMovies} from './api/movies';
import Carousel from './components/Carousel.js';*/
import Login from './pages/Login.js';
import Home from './pages/Home.js';
import './assets/App.css';

function app() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default app;


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


