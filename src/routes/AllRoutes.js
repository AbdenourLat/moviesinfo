import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {MovieDetail, MovieList, PageNotFound, Search} from '../pages'

const AllRoutes = () => {
  return (
        <Routes>
          <Route path="/" element={<MovieList url={'https://api.themoviedb.org/3/movie/now_playing?api_key=a366cbe0db877385fa21b2ab35756887'} />} />
          <Route path="popular" element={<MovieList url={'https://api.themoviedb.org/3/movie/popular?api_key=a366cbe0db877385fa21b2ab35756887'} />} />
          <Route path="top" element={<MovieList url={'https://api.themoviedb.org/3/movie/top_rated?api_key=a366cbe0db877385fa21b2ab35756887'} />} />
          <Route path="upcoming" element={<MovieList url={'https://api.themoviedb.org/3/movie/upcoming?api_key=a366cbe0db877385fa21b2ab35756887'} />} />
          <Route path="movie/:id" element={<MovieDetail />} />
          <Route path="popular/movie/:id" element={<MovieDetail />} />
          <Route path="top/movie/:id" element={<MovieDetail />} />
          <Route path="upcoming/movie/:id" element={<MovieDetail />} />
          <Route path="search/movie/:id" element={<MovieDetail />} />
          <Route path="search" element={<Search />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
  )
}

export {AllRoutes}
