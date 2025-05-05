let btn = document.querySelector(".btn");
let showWeather = document.querySelector(".show-weather")

btn.addEventListener("click", async (e)=>{
    showWeather.innerHTML = `<h2>Loading data....</h2>`
    e.preventDefault();
    const city = document.getElementById("search").value;
    const apiKey = "YOUR_API_KEY_PASTE_HERE"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    return showData(data);
})

let showData = (data)=>{
    if(data.cod === "404"){
        showWeather.innerHTML = `<h2>${data.message}</h2>`
    }else{
        const temp = Math.floor(data.main.temp);
        const status = data.weather[0].description;
        const humidity = data.main.humidity;
        const wind = data.wind.speed;
        
        showWeather.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
                <h2 class="temp">${temp}&deg;C</h2>
                <p class="status">${status}</p>
                <div>
                    <div class="humidity">
                        <p>Humidity: </p>
                        <h2 class="humidity-status"> ${humidity}%</h2>
                    </div>
                    <div class="wind">
                        <p>Wind Speed:</p>
                        <h2 class="wind-status">${wind} m/s</h2>
                    </div>
                </div>`
    }

}