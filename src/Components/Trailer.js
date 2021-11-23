
import React from 'react'
import { useState } from 'react';
import ReactPlayer from 'react-player';
import { MoviesData } from "./Data";

function Trailer() {
   
  const [video, setVideo] = useState("inception");
  const [videoURL, setVideoURL] =  useState("https://youtu.be/sa9l-dTv9Gk");
   
 
  function handleSearch() {
    MoviesData (video).then((res) => {
      setVideoURL(res);
    });
  }
   
  return (
    <div className="trailer">
      <div className="search-box">
        <label>
            Search for any movies/shows:{ " " }
        </label>
        <input type="text" onChange=
            {(e) => { setVideo(e.target.value) }} />
  
        <button onClick={()=>{handleSearch()}}>
            Search
        </button>
      </div>
  
      <ReactPlayer url={videoURL} controls={true}/>
    </div>
  );
}
   
export default Trailer








