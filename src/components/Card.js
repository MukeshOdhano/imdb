import Link from "next/link";
import "../styles/Card.css"

import React from "react";
import Image from "next/image";


import {FaThumbsUp} from 'react-icons/fa'

export default function Card({cardResult}){

   return (
      <div className=" Card-container

                      border-2 border-green-500 text-center rounded-xl cursor-pointer shadow
                      w-[300px] h-[380px] overflow-hidden
                      hover:shadow-slate-400 hover:scale-105
                      dark:hover:shadow-green-300
                      lg:w-[250px] lg:h-[320px]
                      transition-all duration-75 ease-linear
                     "
      >
         <Link href={`/movie/${cardResult.id}`} className="link">
            <h6 className="language bg-green-700">{cardResult.original_language}</h6>
            <h6 className="votes bg-green-700">
               <FaThumbsUp/>
               {cardResult.vote_count}
            </h6>
            <h1 className="Card-title">{cardResult.title || cardResult.original_title || cardResult.name || cardResult.media_type}</h1>
            <Image className="images"
               src={`https://image.tmdb.org/t/p/original${cardResult.poster_path || cardResult.backdrop_path}`}
               width={500}
               height={600}
               alt={cardResult.title}
               placeholder="blur"
               blurDataURL="/loading.svg"
            ></Image>
            <div className="images-bg"></div>
            <h2 className="date bg-green-700">{cardResult.release_date || cardResult.first_air_date}</h2>
         </Link>
      </div>
   )
}