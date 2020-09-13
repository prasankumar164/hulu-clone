import React, {useState, useEffect} from 'react'
import './results.css'
import VideoCard from './VideoCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from '../axios'
import requests from '../requests'
import FlipMove from "react-flip-move"

function Results({selectedOption}) {
    const [movies, setMovies] = useState([])
    useEffect(() => {
     async function fetchData() {
            const request = await axios.get(selectedOption)
            setMovies(request.data.results)
            return request;
     }
     fetchData();
    },[selectedOption])
    return (
        <>
     <FlipMove>
        <div className="container-fluid my-5">
       
            <div className="results">
        
              {movies.map((movie) => (
                  <VideoCard key={movie.id} movie={movie}/>
              ))}
            
            </div>
            
        </div>
        </FlipMove>
        </>
       
    )
}

export default Results
