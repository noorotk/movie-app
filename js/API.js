
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '74b195b214mshce2c77a1e119746p121ac1jsn33218d3055f4',
		'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com'
	}
};

console.log('test')
export const AJAX= async function(MovieName){
 try{
    
    const response = await fetch(`https://advanced-movie-search.p.rapidapi.com/search/movie?query=${MovieName}&page=1`,options);
   const data = await response.json();
   if (data.total_results==0) throw new Error(` there is no results`);
   
   return data
 } catch(err){
    throw err
 }
   
}




