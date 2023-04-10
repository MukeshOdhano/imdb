import "./globals.css"

import Results from "@/components/Results";



const API_KEY = process.env.API_KEY

export default async function Home({searchParams}) {
  const genre = searchParams.genre || "fetchTrending"
  const res = await fetch(`https://api.themoviedb.org/3/${ genre === "fetchTopRatted" 
                                                          ? "movie/top_rated" 
                                                          : "trending/all/week"
                                                        }?api_key=${API_KEY}&page=1`,
                                                        { next: {revalidate: 10000}}
                                                        );

  const data = await res.json();
  const results = data.results;

  if(!res.ok){
    throw new Error('Faild to fetch data')
  }

  // const demo = results[2]
  // console.log(demo)


  return (
    <main>
      {/* <Image src={`${demo.backdrop_path}`} alt={`${demo.title}`} width={200} height={300}/> */}
      <Results resultsProps={results}/>
    </main>
  )
}
