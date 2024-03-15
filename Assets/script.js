var url= 'api.openweathermap.org/data/2.5/forecast?lat=44&lon=44&appid=3e5df3470637ae8ed92dfcd42bd58846'
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=3e5df3470637ae8ed92dfcd42bd58846
const apikey = "3e5df3470637ae8ed92dfcd42bd58846";
const form = document.querySelector(".form");
const cityInput = document.querySelector(".cityInput")
const cityDis = document.querySelector(".search")
const card = document.querySelector(".card");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");
const card4 = document.querySelector(".card4");
const card5 = document.querySelector(".card5");
const card6 = document.querySelector(".card6");


form.addEventListener("submit",async event =>{

        event.preventDefault();
        const city= cityInput.value;
        if(city){
            try{
                const weatherData = await getWeatherData(city);
                disWeather(weatherData);
                localStorage.setItem("city",city,);
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

                var emoji1 =data2.list[0].weather[0].id;
                console.log(emoji1)
                if (emoji1>= 200 && emoji1 < 300){
                    emoji1 = "⛈";
                };
                if(emoji1 >= 300 && emoji1 < 400);{
                    emoji1 = "🌧";
                };
                if(emoji1 >= 500 && emoji1 < 600);{
                    emoji1 = "🌧";
                };
                if(emoji1 >= 600 && emoji1 < 700);{
                    emoji1 = "❄";
                };
                if(emoji1 >= 700 && emoji1 < 800);{
                    emoji1 = "🌫";
                };
                if(emoji1 === 800);{
                    emoji1 = "☀";
                };
                if(emoji1 >= 801 && weatherId < 810);{
                    emoji1 = "☁";
                };

                const weatherEmoji = document.createElement("h1");
                weatherEmoji.textContent =emoji1;
                card.appendChild(weatherEmoji)
                weatherEmoji.classList.add("Weather-emoji")


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


                var humid1 =data2.list[0].main.humidity;
                const humidityDisplay = document.createElement("p");
                humidityDisplay.textContent = "Humidity " + humid1 + "%";
                card.appendChild(humidityDisplay)

                console.log(data2.list[1]);

                card2.textContent="";
                card2.style.display="flex";


                    var day = data2.list[1].dt_txt;
                    const dayDisplay = document.createElement("p");
                    dayDisplay.textContent= day;
                    dayDisplay.classList.add("day-dis")
                    card2.appendChild(dayDisplay)

                    var city2= data[0].name;
                    const cityDisplay2 = document.createElement("h1");
                    cityDisplay2.textContent= city2;
                    cityDisplay2.classList.add("city-dis")
                    card2.appendChild(cityDisplay2)

                    var emoji2 =data2.list[1].weather[0].id;
                    console.log(emoji2)
                    if (emoji2>= 200 && emoji2 < 300){
                        emoji2 = "⛈";
                    };
                    if(emoji2 >= 300 && emoji2 < 400);{
                        emoji2 = "🌧";
                    };
                    if(emoji2 >= 500 && emoji2 < 600);{
                        emoji2 = "🌧";
                    };
                    if(emoji2 >= 600 && emoji2 < 700);{
                        emoji2 = "❄";
                    };
                    if(emoji2 >= 700 && emoji2 < 800);{
                        emoji2 = "🌫";
                    };
                    if(emoji2 === 800);{
                        emoji2 = "☀";
                    };
                    if(emoji2 >= 801 && weatherId < 810);{
                        emoji2 = "☁";
                    };

                    const weatherEmoji2 = document.createElement("h1");
                    weatherEmoji2.textContent =emoji2;
                    card2.appendChild(weatherEmoji2)
                    weatherEmoji2.classList.add("Weather-emoji")


                    var temp4 = data2.list[1].main.temp;
                    var temp5 =`${(temp4 - 273.15) * 1.8 + 32}`;
                    let temp6= Number(temp5).toFixed(0);
                    const tempDisplay2 = document.createElement("p");
                    card2.appendChild(tempDisplay2)
                    tempDisplay2.textContent= "Temperature " + temp6 + "°";
                    tempDisplay2.classList.add("temp-dis")


                    var wind2 = data2.list[1].wind.speed;
                    const windDisplay2 = document.createElement("p");
                    windDisplay2.textContent = "Wind speed " + wind2 + " Mph";
                    card2.appendChild(windDisplay2)


                    var humid2 =data2.list[1].main.humidity;
                    const humidityDisplay2 = document.createElement("p");
                    humidityDisplay2.textContent = "Humidity " + humid2 + "%";
                    card2.appendChild(humidityDisplay2)



                                    
                            card3.textContent="";
                            card3.style.display="flex";

                                console.log(data2.list);
                                var day2 = data2.list[6].dt_txt;
                                const dayDisplay2 = document.createElement("p");
                                dayDisplay2.textContent= day2;
                                dayDisplay2.classList.add("day-dis")
                                card3.appendChild(dayDisplay2)

                                var city3= data[0].name;
                                const cityDisplay3 = document.createElement("h1");
                                cityDisplay3.textContent= city3;
                                cityDisplay3.classList.add("city-dis")
                                card3.appendChild(cityDisplay3)

                                var emoji3 =data2.list[6].weather[0].id;
                                console.log(emoji3)
                                if (emoji3>= 200 && emoji3 < 300){
                                    emoji3 = "⛈";
                                };
                                if(emoji3 >= 300 && emoji3 < 400);{
                                    emoji3 = "🌧";
                                };
                                if(emoji3 >= 500 && emoji3 < 600);{
                                    emoji3 = "🌧";
                                };
                                if(emoji3 >= 600 && emoji3 < 700);{
                                    emoji3 = "❄";
                                };
                                if(emoji3 >= 700 && emoji3 < 800);{
                                    emoji3 = "🌫";
                                };
                                if(emoji3 === 800);{
                                    emoji3 = "☀";
                                };
                                if(emoji3 >= 801 && weatherId < 810);{
                                    emoji3 = "☁";
                                };

                                const weatheremoji3 = document.createElement("h1");
                                weatheremoji3.textContent =emoji3;
                                card3.appendChild(weatheremoji3)
                                weatheremoji3.classList.add("Weather-emoji")


                                var temp7 = data2.list[6].main.temp;
                                var temp8 =`${(temp7 - 273.15) * 1.8 + 32}`;
                                let temp9= Number(temp8).toFixed(0);
                                const tempdisplay3 = document.createElement("p");
                                card3.appendChild(tempdisplay3)
                                tempdisplay3.textContent= "Temperature " + temp9 + "°";
                                tempdisplay3.classList.add("temp-dis")


                                var wind3 = data2.list[6].wind.speed;
                                const windDisplay3 = document.createElement("p");
                                windDisplay3.textContent = "Wind speed " + wind3 + " Mph";
                                card3.appendChild(windDisplay3)


                                var humid3 =data2.list[6].main.humidity;
                                const humidityDisplay3 = document.createElement("p");
                                humidityDisplay3.textContent = "Humidity " + humid3 + "%";
                                card3.appendChild(humidityDisplay3)



                                    
                                        card4.textContent="";
                                        card4.style.display="inline-block";


                                            var day3 = data2.list[14].dt_txt;
                                            const dayDisplay3 = document.createElement("p");
                                            dayDisplay3.textContent= day3;
                                            dayDisplay3.classList.add("day-dis")
                                            card4.appendChild(dayDisplay3)

                                            var city4= data[0].name;
                                            const cityDisplay4 = document.createElement("h1");
                                            cityDisplay4.textContent= city4;
                                            cityDisplay4.classList.add("city-dis")
                                            card4.appendChild(cityDisplay4)

                                            var emoji4 =data2.list[14].weather[0].id;
                                            console.log(emoji4)
                                            if (emoji4>= 200 && emoji4 < 300){
                                                emoji4 = "⛈";
                                            };
                                            if(emoji4 >= 300 && emoji4 < 400);{
                                                emoji4 = "🌧";
                                            };
                                            if(emoji4 >= 500 && emoji4 < 600);{
                                                emoji4 = "🌧";
                                            };
                                            if(emoji4 >= 600 && emoji4 < 700);{
                                                emoji4 = "❄";
                                            };
                                            if(emoji4 >= 700 && emoji4 < 800);{
                                                emoji4 = "🌫";
                                            };
                                            if(emoji4 === 800);{
                                                emoji4 = "☀";
                                            };
                                            if(emoji4 >= 801 && weatherId < 810);{
                                                emoji4 = "☁";
                                            };

                                            const weatheremoji4 = document.createElement("h1");
                                            weatheremoji4.textContent =emoji4;
                                            card4.appendChild(weatheremoji4)
                                            weatheremoji4.classList.add("Weather-emoji")


                                            var temp10 = data2.list[14].main.temp;
                                            var temp11 =`${(temp10 - 273.15) * 1.8 + 32}`;
                                            let temp12= Number(temp11).toFixed(0);
                                            const tempdisplay4 = document.createElement("p");
                                            card4.appendChild(tempdisplay4)
                                            tempdisplay4.textContent= "Temperature " + temp12 + "°";
                                            tempdisplay4.classList.add("temp-dis")


                                            var wind4 = data2.list[14].wind.speed;
                                            const windDisplay4 = document.createElement("p");
                                            windDisplay4.textContent = "Wind speed " + wind4 + " Mph";
                                            card4.appendChild(windDisplay4)


                                            var humid4 =data2.list[14].main.humidity;
                                            const humidityDisplay4 = document.createElement("p");
                                            humidityDisplay4.textContent = "Humidity " + humid4 + "%";
                                            card4.appendChild(humidityDisplay4)


                                                    
                                                        card5.textContent="";
                                                        card5.style.display="inline-block";


                                                            var day4 = data2.list[24].dt_txt;
                                                            const dayDisplay4 = document.createElement("p");
                                                            dayDisplay4.textContent= day4;
                                                            dayDisplay4.classList.add("day-dis")
                                                            card5.appendChild(dayDisplay4)

                                                            var city5= data[0].name;
                                                            const cityDisplay5 = document.createElement("h1");
                                                            cityDisplay5.textContent= city5;
                                                            cityDisplay5.classList.add("city-dis")
                                                            card5.appendChild(cityDisplay5)

                                                            var emoji5 =data2.list[30].weather[0].id;
                                                            console.log(emoji5)
                                                            if (emoji5>= 200 && emoji5 < 300){
                                                                emoji5 = "⛈";
                                                            };
                                                            if(emoji5 >= 300 && emoji5 < 400);{
                                                                emoji5 = "🌧";
                                                            };
                                                            if(emoji5 >= 500 && emoji5 < 600);{
                                                                emoji5 = "🌧";
                                                            };
                                                            if(emoji5 >= 600 && emoji5 < 700);{
                                                                emoji5 = "❄";
                                                            };
                                                            if(emoji5 >= 700 && emoji5 < 800);{
                                                                emoji5 = "🌫";
                                                            };
                                                            if(emoji5 === 800);{
                                                                emoji5 = "☀";
                                                            };
                                                            if(emoji5 >= 801 && weatherId < 810);{
                                                                emoji5 = "☁";
                                                            };

                                                            const weatheremoji5 = document.createElement("h1");
                                                            weatheremoji5.textContent =emoji5;
                                                            card5.appendChild(weatheremoji5)
                                                            weatheremoji5.classList.add("Weather-emoji")


                                                            var temp13= data2.list[30].main.temp;
                                                            var temp14 =`${(temp13- 273.15) * 1.8 + 32}`;
                                                            let temp15= Number(temp14).toFixed(0);
                                                            const tempdisplay5 = document.createElement("p");
                                                            card5.appendChild(tempdisplay5)
                                                            tempdisplay5.textContent= "Temperature " + temp15 + "°";
                                                            tempdisplay5.classList.add("temp-dis")


                                                            var wind5 = data2.list[30].wind.speed;
                                                            const windDisplay5 = document.createElement("p");
                                                            windDisplay5.textContent = "Wind speed " + wind5 + " Mph";
                                                            card5.appendChild(windDisplay5)


                                                            var humid5 =data2.list[30].main.humidity;
                                                            const humidityDisplay5 = document.createElement("p");
                                                            humidityDisplay5.textContent = "Humidity " + humid5 + "%";
                                                            card5.appendChild(humidityDisplay5)

                                                                            
                                                                    card6.textContent="";
                                                                    card6.style.display="inline-block";


                                                                        var day5 = data2.list[30].dt_txt;
                                                                        const dayDisplay5 = document.createElement("p");
                                                                        dayDisplay5.textContent= day5;
                                                                        dayDisplay5.classList.add("day-dis")
                                                                        card6.appendChild(dayDisplay5)

                                                                        var city6= data[0].name;
                                                                        const cityDisplay6 = document.createElement("h1");
                                                                        cityDisplay6.textContent= city6;
                                                                        cityDisplay6.classList.add("city-dis")
                                                                        card6.appendChild(cityDisplay6)

                                                                        var emoji6 =data2.list[30].weather[0].id;
                                                                        console.log(emoji6)
                                                                        if (emoji6>= 200 && emoji6 < 300){
                                                                            emoji6 = "⛈";
                                                                        };
                                                                        if(emoji6 >= 300 && emoji6 < 400);{
                                                                            emoji6 = "🌧";
                                                                        };
                                                                        if(emoji6 >= 500 && emoji6 < 600);{
                                                                            emoji6 = "🌧";
                                                                        };
                                                                        if(emoji6 >= 600 && emoji6 < 700);{
                                                                            emoji6 = "❄";
                                                                        };
                                                                        if(emoji6 >= 700 && emoji6 < 800);{
                                                                            emoji6 = "🌫";
                                                                        };
                                                                        if(emoji6 === 800);{
                                                                            emoji6 = "☀";
                                                                        };
                                                                        if(emoji6 >= 801 && weatherId < 810);{
                                                                            emoji6 = "☁";
                                                                        };

                                                                        const weatheremoji6 = document.createElement("h1");
                                                                        weatheremoji6.textContent =emoji6;
                                                                        card6.appendChild(weatheremoji6)
                                                                        weatheremoji6.classList.add("Weather-emoji")


                                                                        var temp13= data2.list[30].main.temp;
                                                                        var temp14 =`${(temp13- 273.15) * 1.8 + 32}`;
                                                                        let temp16= Number(temp14).toFixed(0);
                                                                        const tempdisplay6 = document.createElement("p");
                                                                        card6.appendChild(tempdisplay6)
                                                                        tempdisplay6.textContent= "Temperature " + temp16 + "°";
                                                                        tempdisplay6.classList.add("temp-dis")


                                                                        var wind6 = data2.list[30].wind.speed;
                                                                        const windDisplay6 = document.createElement("p");
                                                                        windDisplay6.textContent = "Wind speed " + wind6 + " Mph";
                                                                        card6.appendChild(windDisplay6)


                                                                        var humid6 =data2.list[30].main.humidity;
                                                                        const humidityDisplay6 = document.createElement("p");
                                                                        humidityDisplay6.textContent = "Humidity " + humid6 + "%";
                                                                        card6.appendChild(humidityDisplay6)

        });
    });
    
}


function disErr(message){
    
    const errorDis = document.createElement("p")
    errorDis.textContent = message;
    errorDis.classList.add("err-dis");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDis)
}