import React, {useEffect, useState} from 'react'
import { useSearchParams } from 'react-router-dom';
import {Card} from '../components'

const Search = () => {
  const [movies, setMovies] = useState([]);

  const [searchParams] = useSearchParams();

  const movieName = searchParams.get('querry');

  const searchUrl = 'https://api.themoviedb.org/3/search/movie?api_key=a366cbe0db877385fa21b2ab35756887&query=' + movieName;

  useEffect( () => {
    async function getMovies() {
      const response = await fetch(searchUrl);
      const data = await response.json();
      setMovies(data.results);
      console.log(data);
    }

    getMovies();
  }, [searchUrl]);

  return (
    <main>
      <section className='py-7'>
        <p className='text-3xl text-gray-700 dark:text-white' >{ movies.length ===0 ? 'No results found for : ' + movieName : 'results for : ' + movieName }</p>
      </section>
        <section className='max-w-7xl mx-auto py-7'>
          <div className="grid grid-cols-3 auto-rows-max justify-items-center">
            { movies.length === 0 ? null : movies.map( (movie) => {
              return (
                <Card title={movie.title} content={movie.overview} image={movie.backdrop_path} id={movie.id} />
            )
            } ) }
          </div>
        </section>
    </main>
  )
}

export {Search}
