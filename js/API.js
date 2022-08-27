
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a380446895msh4dce00e7165b163p1858a0jsn383f8d9a21f0',
		'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com'
	}
};


export const AJAX= async function(id){
 try{
   
    const response = await fetch(`https://advanced-movie-search.p.rapidapi.com/movies/getdetails?movie_id=${id}`,options);
   const data = await response.json();
   // if (data.total_results==0) throw new Error(` there is no results`);
   
   return data
 } catch(err){
    throw err
 }
   
}




