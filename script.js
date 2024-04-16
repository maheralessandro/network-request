
let main = document.getElementById('main') ;


window.addEventListener('load', ()=>{
    const config = {
        method : 'GET' ,
        headers : {
            'X-RapidAPI-Key': 'ae7bcd794fmshd2d1e62d3798328p1f5707jsnd045ef7be08c',
            'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
          }};
    fetch('https://open-weather13.p.rapidapi.com/city/landon/EN' ,config)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data);
        let titre = document.createElement('h2');

        titre.innerText = data.name ;
        main.appendChild(titre);


    })
})