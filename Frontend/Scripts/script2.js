

//Code for checking Weather Condition
let inputval = document.querySelector('#cityinput')
const btn = document.getElementById('btn')
let city = document.querySelector('#cityoutput')
let descrip = document.querySelector('#description')
let temp = document.querySelector('#temp')
let wind = document.querySelector('#wind')
let humidity = document.querySelector('#humidity')


let apik = "3e2930a606c1c6880391f32a652b3ff0"

//Access the longitude and latitude of a current location

//kelvin to celcious. 1 Kelvin is equal to -272.15 Celsius.
function convertion(val){
    return (val - 273).toFixed(2)
}


    function success(position){
        let latitude = position.coords.latitude
         let longitude = position.coords.longitude
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apik}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                let nameval = data['name']
                let descrip = data['weather']['0']['description']
                let tempature = data['main']['temp']
                let wndspd = data['wind']['speed']
                let hum_ = data['main']['humidity']
                city.innerHTML=`Weather of <span>${nameval}<span>`
                temp.innerHTML = `Temperature: <span>${ convertion(tempature)} C</span>`
                description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
                wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`
                humidity.innerHTML = `Humidity: <span>${hum_}`
            
        })
        .catch(err => alert('You entered Wrong city name'))
      
        
        }
        if(navigator.geolocation){
            window.navigator.geolocation.getCurrentPosition(success, console.error)
        }

//Now we have to collect all the information with the help of fetch method


   
 


   function geoCode(lat, long){
    let apiKey = 'c0d57193e59b436686e9668f7ebf55d9'

   fetch('https://api.opencagedata.com/geocode/v1/json'
   + '?'
   + 'q=' + encodeURIComponent(lat + long)
   + '&key=' + apiKey)
  .then((response) => response.json())
  .then((data) => console.log());
   }

