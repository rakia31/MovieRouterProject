import React, { useState } from "react";
import "./App.css";
import MoviesData from "./Components/Data";
import Footer from "./Components/Footer";
import MovieList from "./Components/MovieList";
import AddMovie from "./Components/AddMovie";
import { BrowserRouter,Route, Switch } from "react-router-dom";
import Description from "./Components/Description";
import Trailer from "./Components/Trailer"

function App() {
  const [movies, setMovies] = useState(MoviesData);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState(0);

  const handleMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <div>
     <BrowserRouter>
 

      <Switch>
        <Route exact path="/" >
            <AddMovie handleMovie={handleMovie} />
        <MovieList
          movies={movies}
          searchTitle={searchTitle}
          searchRating={searchRating}
        />
        </Route>
        {/* <Route exact path='/trailer' component={Trailer} /> */}
        <Route exact path="/description" component={Description}/>

      </Switch>
      </BrowserRouter>
      {/* <div
        style={{ display: "flex", alignContent: "flex-start", marginTop: "5%" }}
      >
        <AddMovie handleMovie={handleMovie} />
        <MovieList
          movies={movies} 
          searchTitle={searchTitle}
          searchRating={searchRating}
        />
      </div> */}
      {/* <Footer />
      < Trailer/> */}
    </div>
  );
}

export default App;