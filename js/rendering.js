

export default class rendering  {

    _parentEl=document.querySelector('.search-results');
    _data;


    _generatemarkup(){
     
       return this._data.map(this._generatemarkupPreview).join('');
    
    }

       _generatemarkupPreview(results){
        
            return ` 
            <li class="preview">
            
             
             <div class="img-container">
             <a href="#${results.id}">
                <img class="preview--img" src="${results.poster_path}" alt="">
                </a>
             </div>
            <div class="title-container">
             <h2 class="movie-title">${results.title}</h2>
             <p class="release-date">${results.release_date.slice(0,4)}</p>
               </div>
           
         </li> 
          `;
         
        
       }
     
    
}
