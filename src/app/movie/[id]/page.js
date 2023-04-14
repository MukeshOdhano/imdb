import Image from 'next/image'
import React from 'react'

async function getmovie(movieId){
   const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`)
   return await res.json()
}

export default async function MoviePage({params}) {
   const movieId = params.id 
   const movie = await getmovie(movieId)

  return (
    <div className='max-w-6xl mx-auto my-10 flex flex-col md:flex-row justify-between items-center'>
      <Image src={`https://image.tmdb.org/t/p/original${movie.poster_path || movie.backdrop_path}`} 
         className='rounded-lg ml-10'
         width={300} 
         height={100} 
         alt={movie.name || movie.title }
         placeholder='blur'
         blurDataURL='/loading.svg'
         
      />
      <div className='mx-10 space-y-2'>
         <h1 className='text-3xl  dark:text-orange-500'>{movie.title || movie.name}</h1>
         <h2 className='text-[20px] '>{movie.overview}</h2>
         <h2 className='text-2xl'><span className='dark:text-orange-500 capitalize '>release date:</span> {movie.release_date}</h2>
         <h2 className='text-2xl'><span className='dark:text-orange-500 capitalize '>Likes:</span> {movie.vote_count}</h2>
      </div>
    </div>
  )
}
