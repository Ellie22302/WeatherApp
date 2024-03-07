var url= 'api.openweathermap.org/data/2.5/forecast?lat=44&lon=44&appid=3e5df3470637ae8ed92dfcd42bd58846'
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=3e5df3470637ae8ed92dfcd42bd58846
const apikey = "3e5df3470637ae8ed92dfcd42bd58846";
const form = document.querySelector(".form");
const cityDis = document.querySelector(".search")
const card = document.querySelector(".card");

form.addEventListener("submit",event =>{

        event.preventDefault();
        const city= cityInput.value;

        if(city){

        }else{
            disErr("Please Enter City");
        }

});

async function getWeatherData(city){

}

function disWeather(data){

}
function emoji(weatherId){
    
}

function disErr(message){
    
    const errorDis = document.createElement("p")
    errorDis.textContent = message;
    errorDis.classList.add("err-dis");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDis)
}