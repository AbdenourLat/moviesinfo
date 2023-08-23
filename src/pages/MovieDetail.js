import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import backup from '../assets/images/backup.png'

const MovieDetail = () => {
  const movieID = useParams('id').id;

  const url = 'https://api.themoviedb.org/3/movie/' + movieID + '?api_key=a366cbe0db877385fa21b2ab35756887';

  const [movie, setMovie] = useState({});

  const [genres, setGenres] = useState([]);

  useEffect( () => {
    async function getMovie() {
      const response = await fetch(url);
      const movieTMP = await response.json();
      setMovie(movieTMP);
      setGenres(movieTMP.genres);
    }
    getMovie();
  } , [url]);

  return (
    <main className='grid md:grid-cols-2 py-5 auto-rows-max'> 
      <section className='px-5 my-5 flex'>
        <img src={movie.poster_path != null ? 'https://image.tmdb.org/t/p/w500/' + movie.poster_path : backup} alt="movie" className='justify-center w-full items-center' />
      </section>
      <section className='px-5 my-5 flex flex-col text-center justify-center'>
        <h1 className='text-3xl text-gray-700 dark:text-white py-2'>{movie.title}</h1>
        <p className='text-gray-600 dark:text-gray-300 py-2'>{movie.overview}</p>
        <p className='py-2'>
        {
          genres.map(
            (genre) => {
              return (
                <span className='text-xl text-gray-700 dark:text-white mx-3'>{genre.name}</span>
              )
            }
          )
        }
        </p>
        <p className='text-gray-600 dark:text-gray-300 py-2'>
          <span className='text-xl text-gray-700 dark:text-white'>Rate : </span>
          {movie.vote_average}
        </p>
        <p className='text-gray-600 dark:text-gray-300 py-2'>
          <span className='text-xl text-gray-700 dark:text-white'>Voters : </span>
          {movie.vote_count}
        </p>
        <p className='text-gray-600 dark:text-gray-300 py-2'>
          <span className='text-xl text-gray-700 dark:text-white'>imdb id : </span>
          <a href={"https://www.imdb.com/title/" + movie.imdb_id} target='_blank' >
            {movie.imdb_id}
          </a>
        </p>
      </section>    
    </main>
  )
}

export {MovieDetail}
