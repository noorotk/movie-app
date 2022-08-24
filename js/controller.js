import { AJAX } from "./API.js"; 




const GetData= async function(Name){
    try{
         const data = await AJAX(Name)
    console.log(data)
}catch (err){
    console.log(err)
}
    }
   

GetData('fast')
