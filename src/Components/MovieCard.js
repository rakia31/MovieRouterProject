import React from "react";
import "./MovieCard.css";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { Link } from "react-router-dom";

const MovieCard = ({
  movie: { name, image, date, type, rating, description,video },
  handleMovie,
}) => {
  return (
    <div className="card">
      <div className="card_left">
        <img src={image} alt="poster" />
      </div>
      <div className="card_right">
        <h1>{name}</h1>
        <div className="card_right__details">
          <ul>
            <li>{date}</li>
            <li>||</li>
            <li>{type}</li>
          </ul>
        </div>
        <div className="card_right__rating">
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating name="read-only" value={rating} readOnly />
          </Box>
        </div>
        <div className="card_right__review">
          <p>{description}</p>
          <a href="https://www.imdb.com/?ref_=nv_home">Read More</a>
        </div>
        <div className="card_right__button">
          <Link to ={{pathname:"/description", state:{movie:{ name, image, date, type, rating, description ,video }}}}>see trailer</Link>
          {/* <Link to ={{pathname:"/trailer", state:{movie:{ name,video }}}}>see trailer</Link> */}

        </div>
      </div>
    </div>
  );
};

export default MovieCard;