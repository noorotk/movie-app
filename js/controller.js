import { AJAX } from "./API.js"; 
import {loadSearchResult} from "./searchResults.js";
import view from "./view.js";
const previewContainer=document.querySelector('.page-container');
const searchButton=document.querySelector('.search-btn');


   
const GetData= async function(){
    try{
        const id = window.location.hash.slice(1);
        
         const data = await AJAX(id);

         view.render(data);
    
    const markup=`<div class="preview-container">
    <div class="preview-info">

      <div class="preview-img-container">
        <img class="preview--img" src="${data.poster_path}" alt="">
     </div>
     <div class="movie-details">
      <h1 class="title">${data.title}</h1>
      <h4 class="over-view"><p>Over View:</p> ${data.overview}</h4>
      <div class="side-details"> <div class="release-date-preview">${data.release_date.slice(0,4)}</div>
      <div class="rating">Rating: ${data.vote_average.toString().slice(0,3)} </div>
    
         </div>
             </div> 
           </div>
         </div> `;
         previewContainer.innerHTML='';
         previewContainer.insertAdjacentHTML("afterbegin",markup)
}catch (err){
    console.log(err)
}
    }

    
   
    
    searchButton.addEventListener('click',loadSearchResult)
window.addEventListener('hashchange',GetData);
window.addEventListener('load',GetData);


