import Results from "@/components/Results";

export default async function SearchPage({ params }) {
   const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchList}&include_adult=false`
   )
   if (!res.ok) {
      throw new Error("Error Fetching data")
   }
   const data = await res.json();
   const resultsProps = data.results;
  return (
    <div>
      {resultsProps && resultsProps.length === 0 && (
         <h1 className='text-3xl text-center pt-6'>No Results</h1>
      )}

      {resultsProps && <Results resultsProps={resultsProps}/>}
    </div>
  )
}



