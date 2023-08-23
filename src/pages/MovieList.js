import { useEffect, useState } from "react"
import {Card} from '../components'


const MovieList = ( {url} ) => {

  const [movies, setMovies] = useState([]);

  useEffect( () => {
    async function getMovies() {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results);
    }
    getMovies();
  }, [url]);

  return (
    <main>
        <section className='max-w-7xl mx-auto py-7'>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 auto-rows-max justify-items-center">
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

export {MovieList}
