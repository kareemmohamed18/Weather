let country = document.getElementById('country')
let findCountry = document.getElementById('findCountry')
let displayWeather = document.getElementById("displayWeather")
let finalResult ="";

let week = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday'  ]
let month=['January' , 'February' , 'March' , 'April' , 'May' , 'June' , 'July' , 'August' , 'September' , 'October', 'November' , 'December' ]
let dateWeather = new Date();
async function getWeather(country)
{
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=c394f4d4a2de43abb3f95643220306&q=${country}&aqi=yes&days=3`)
    finalResult = await response.json();
    display()

}




// async function getWeather()
// {
//     let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=c394f4d4a2de43abb3f95643220306&q=cairo&aqi=yes&days=3`)
//     finalResult = await response.json();
//     // console.log(finalResult.current);
//     // console.log(finalResult.location.name);
//     console.log(finalResult.forecast.forecastday[1].date);
// }
// getWeather()

findCountry.addEventListener('click' , function()
{
    let serchCountry= country.value;
    getWeather(serchCountry)
})





function display()
{
    let cartona=``;
    if(finalResult.location==undefined &&finalResult.current==undefined )
    {
        alert('country name is incorrect')
    }
    else
    {
        cartona+=
        `
        <div class="col-md-4">

          <div class=" weather-caption my-5 text-light  pb-1 " >

            <div class="weather-date w-100  py-2 px-3   d-flex  justify-content-between text-secondary ">
                <p>${week[dateWeather.getDay()]}</p>
                <p>${dateWeather.getDate()}  ${month[dateWeather.getMonth()]}</p>
            </div>
                
            <h3 class="py-3 ps-3 text-secondary" >${finalResult.location.name}</h3>
              <h1 class=' ps-3'>${finalResult.current.temp_c}<sup>o</sup>C</h1>
              <img class=" w-25 ps-3" src='${finalResult.current.condition.icon}'  alt="" id="iconWeather">
  
            <h5 class="pb-3 ps-3" id="statusWeather">${finalResult.current.condition.text}</h5>
  
            <ul class="d-flex  justify-content-between w-75 ps-3 ">
              <li class=" list-unstyled text-secondary"><img src="images/icon-compass.png" alt=""> East</li>
              <li class=" list-unstyled text-secondary"><img src="images/icon-umberella.png" alt=""> 20%</li>
              <li class=" list-unstyled text-secondary"><img src="images/icon-wind.png" alt=""> 18km/h</li>
            </ul>
          </div>
        </div>

  
  
          <div class="col-md-4 ">
  
              <div class="weather-caption my-5 text-light text-center " >

                <div class="weather-date w-100  py-2  text-center text-secondary ">
                    <p>${week[dateWeather.getDay()+1]}</p>
                </div>
                <img src='${finalResult.forecast.forecastday[1].day.condition.icon}' alt="" class="py-4 mt-5">
                <h2 class=" fw-bolder" >${finalResult.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</h2>
                <h4 class=" text-secondary pb-4">${finalResult.forecast.forecastday[1].day.mintemp_c}<sup>o</sup></h4>
                <h5>${finalResult.forecast.forecastday[1].day.condition.text}</h5>
              </div>
  
          </div>



          <div class="col-md-4 ">
  
          <div class="weather-caption my-5 text-light text-center " >

            <div class="weather-date w-100  py-2  text-center text-secondary ">
                <p>${week[dateWeather.getDay()+2]}</p>
            </div>
            <img src='${finalResult.forecast.forecastday[2].day.condition.icon}' alt="" class="py-4 mt-5">
            <h2 class=" fw-bolder" >${finalResult.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</h2>
            <h4 class=" text-secondary pb-4">${finalResult.forecast.forecastday[2].day.mintemp_c}<sup>o</sup></h4>
            <h5>${finalResult.forecast.forecastday[2].day.condition.text}</h5>
          </div>

      </div>
  
  
        `

    }
    document.getElementById('displayWeather').innerHTML=cartona;

}






// console.log( week[dateWeather.getDay()]);
// console.log( month[dateWeather.getMonth()]);
// console.log(dateWeather.getDate());

