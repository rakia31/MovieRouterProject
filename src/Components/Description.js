import Button from '@mui/material/Button';
import React from 'react'
import ReactPlayer from 'react-player';

const Description = ({
    location:{
        state:{movie},
    }, 
    history
}) => {
    console.log(movie)
    return (
        <div>
           <h1>{movie.name}</h1>
        
           <Button onClick ={ () => history.goBack()}>Go back</Button>
           <ReactPlayer url={movie.video} controls={true}/>
        </div>
    )
}

export default Description;