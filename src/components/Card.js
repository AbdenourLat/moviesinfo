import React from 'react'
import { Link } from 'react-router-dom'
import backup from '../assets/images/backup.png'

const Card = ({title, content, image, id}) => {
  return (
    <div key={id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2 text-center">
      <Link to={"movie/"+ id}>
        <img className="rounded-t-lg w-500" src={image != null ? 'https://image.tmdb.org/t/p/w500/' + image : backup} alt="" />
      </Link>
      <div className="p-5">
        <Link to={"movie/"+ id}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{content}</p>
      </div>
    </div>
  )
}

export {Card}
