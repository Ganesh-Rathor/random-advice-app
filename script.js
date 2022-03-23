const id = document.getElementById('id');
const advice = document.getElementById('advice');
const url = 	"https://api.adviceslip.com/advice";

// function getData(){
//     fetch(url).then((response)=>{
//         return response.json();
//     }).then((data)=>{
//        api.id = data.slip.id;
//        api.advice = data.slip.advice;
//     });
// }

async function getData(url){
    const response = await fetch(url);
    var data = await response.json();
    showData(data);
}
getData(url);
function showData (data){
    id.innerHTML = data.slip.id;
    advice.innerHTML = data.slip.advice;
}


document.querySelector('button').addEventListener('click',(e)=>{
    getData(url);
})


