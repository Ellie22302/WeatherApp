var url= 'api.openweathermap.org/data/2.5/forecast?lat=44&lon=44&appid=3e5df3470637ae8ed92dfcd42bd58846'
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=3e5df3470637ae8ed92dfcd42bd58846
const apikey = "3e5df3470637ae8ed92dfcd42bd58846";
const form = document.querySelector(".form");
const cityInput = document.querySelector(".cityInput")
const cityDis = document.querySelector(".search")
const card = document.querySelector(".card");

form.addEventListener("submit",async event =>{

        event.preventDefault();
        const city= cityInput.value;
        if(city){
            try{
                const weatherData = await getWeatherData(city);
                disWeather(weatherData);
                disWeather2();
            }
            catch(error){
                console.error(error);
                disErr(error);
        }}else{
            disErr("Please Enter City");
        }
});
async function getWeatherData(city){
    
    const apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apikey}`

    const response = await fetch(apiUrl);


    return await response.json();
}



async function disWeather(data){

    console.log(data[0]);
    console.log(data[0].lat);
    console.log(data[0].lon);
    var lat = data[0].lat;
    var lon = data[0].lon;
    const url2= `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=3e5df3470637ae8ed92dfcd42bd58846`;
    await fetch(url2).then((response) => {
        console.log(response);
        response.json().then((data2) => {
            console.log(data2.list[0].wind.speed)
            console.log(data2.list[0].main);
            console.log(data2.list[0].weather[0]);
            console.log(data2.list[0].weather[0].description);
            console.log(data2.list[0].weather[0].id);
            console.log(data2.list[0].main.temp);
            console.log(data2.list[0].main.humidity);
                card.textContent="";
                card.style.display="flex";


                var city2= data[0].name;
                const cityDisplay = document.createElement("h1");
                cityDisplay.textContent= city2;
                cityDisplay.classList.add("city-dis")
                card.appendChild(cityDisplay)


                var temp1 = data2.list[0].main.temp;
                var temp2 =`${(temp1 - 273.15) * 1.8 + 32}`;
                let temp3= Number(temp2).toFixed(0);
                const tempDisplay = document.createElement("p");
                card.appendChild(tempDisplay)
                tempDisplay.textContent= "Temperature " + temp3 + "°";
                tempDisplay.classList.add("temp-dis")


                var wind1 = data2.list[0].wind.speed;
                const windDisplay = document.createElement("p");
                windDisplay.textContent = "Wind speed " + wind1 + " Mph";
                card.appendChild(windDisplay)
                


                // console.log(data[0].name);
        });
    });
    
}
function disWeather2(){
//     const city= cityInput.value;
//     // var temp1 = data2.list[0].main.temp;
//     // var desc1 = data2.list[0].weather[0].description;
//     // var humid1 =data2.list[0].main.humidity;
//     // // var emoji1 =data2.list[0].weather[0].id;
//     //     card.textContent="";
//     //     card.style.display="flex";

//     //     const cityDisplay = document.createElement("h1");
//     //     const tempDisplay = document.createElement("p");
//     //     const humidityDisplay = document.createElement("p");
//     //     const descDisplay = document.createElement("p");
//     //     const weatherEmoji = document.createElement("p");

//     //     cityDisplay.textContent= city;

//     //     card.appendChild(cityDisplay)
//     //     card.appendChild(tempDisplay)
//     //     tempDisplay.textContent= `${(temp1 - 273.15) * 1.8 + 32}°`;

//     //     cityDisplay.classList.add("city-dis")
//     //     tempDisplay.classList.add("temp-dis")
//     //     humidityDisplay.textContent = humidity;
//     //     descDisplay.textContent = description;
//     //     console.log(data2.list[0].main.humidity);
        
}

function getWeatherEmoji(weatherId){

    switch(true){
        case (weatherId >= 200 && weatherId < 300):
            return "⛈";
        case (weatherId >= 300 && weatherId < 400):
            return "🌧";
        case (weatherId >= 500 && weatherId < 600):
            return "🌧";
        case (weatherId >= 600 && weatherId < 700):
            return "❄";
        case (weatherId >= 700 && weatherId < 800):
            return "🌫";
        case (weatherId === 800):
            return "☀";
        case (weatherId >= 801 && weatherId < 810):
            return "☁";
        default:
            return "❓";
    }
}

function disErr(message){
    
    const errorDis = document.createElement("p")
    errorDis.textContent = message;
    errorDis.classList.add("err-dis");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDis)
}