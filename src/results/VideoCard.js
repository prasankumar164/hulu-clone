import React, {forwardRef} from 'react'
import './videoCard.css'
import TextTruncate from 'react-text-truncate'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const base_url = "https://image.tmdb.org/t/p/original/"

const VideoCard = forwardRef( ({ movie, ref }) => {
    return (
        <div className="videoCard">
            {/* <h1>movie</h1> */}
            <div ref={ref} className="card">
                <div className="card-image">
                <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} className="img-fluid" alt=""/>
                </div>
                <div className="card-body">
                    <TextTruncate
                    line={2}
                    element="p"
                    truncateText="..."
                    text={movie.overview}
                    />
               <h2 className="mt-2">{movie.title || movie.original_name}</h2>
               
              <p className="videocard__stats mt-2">
                  {movie.media_type && `${movie.media_type} *`}
                  {movie.release_date || movie.first_air_date} *
                   <ThumbUpIcon className="mx-2 videocard__thumb" /> {movie.vote_count}</p>
                </div>
            </div>
        </div>
    )
})

export default VideoCard
