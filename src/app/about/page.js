import React from "react";

export default function About(){
   return(
      <>
         <div className="max-w-6xl min-h-[80vh] mx-auto space-y-5 flex flex-col justify-center ">
            <h1 className="text-4xl">About</h1>
            <div className="text-[18px] space-y-1">
               <p>
                  The IMDb (Internet Movie Database) is a comprehensive online database that contains information about movies, television shows, actors, directors, and other film industry professionals. Each entry in the IMDb database has its own dedicated page, which provides users with a wealth of information about the subject.
               </p>

               <p>
                  The IMDb page for a movie typically includes details such as the title, the release date, the runtime, the genre, and a brief synopsis of the plot. Users can also view ratings and reviews from other IMDb users, as well as view a list of the cast and crew involved in making the movie.
               </p>

               <p>
                  Similarly, the IMDb page for a television show will typically include information about the show&apos;s network, the number of seasons and episodes, and a brief summary of the show&apos;s premise. Users can also view information about the cast and crew, and read reviews and ratings from other users.
               </p>

               <p>
                  One of the most useful features of the IMDb is its search function, which allows users to quickly find information about movies, TV shows, actors, and more. The search results page provides users with a list of relevant entries, each of which can be clicked to view its dedicated IMDb page.
               </p>

               <p>
                  Overall, the IMDb is an invaluable resource for anyone who is interested in movies, TV shows, and the people who make them. Whether you are a casual moviegoer or a hardcore film buff, the IMDb is sure to have something to offer you.
               </p>
            </div>
         </div>
      </>
   )
}