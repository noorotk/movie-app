import view from "./view.js";
 export const state ={
    results:[],
 }
 const welcomeMessage = document.querySelector('.welcome-message')
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a380446895msh4dce00e7165b163p1858a0jsn383f8d9a21f0',
		'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com'
	}
}

export const loadSearchResult = async function(){
    try{
        const searchValue=document.querySelector('.input--field').value;

console.log(searchValue)
    const response = await fetch(`https://advanced-movie-search.p.rapidapi.com/search/movie?query=${searchValue}&page=1`,options);
   const SearchData = await response.json();
// console.log(SearchData);
state.results = SearchData.results.map(results=>{
    return results;
})
// console.log(state.results);
   view.render(state.results);
welcomeMessage.classList.add('hidden');

   // if (data.total_results==0) throw new Error(` there is no results`);
   
   

 } catch(err){
    throw err
 }
   
}

