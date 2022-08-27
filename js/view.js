import rendering from "./rendering.js";



 class view extends rendering {
    _parentEl=document.querySelector('.search-results');
    _data;

    

    render(data){
        this._data = data;
        console.log(this._generatemarkup())
        const markup = this._generatemarkup();
       this._parentEl.innerHTML = '';
       this._parentEl.insertAdjacentHTML('afterbegin',markup)
    
     
    }
}


export default new view();