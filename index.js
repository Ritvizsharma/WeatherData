const axios = require('axios');
let weather_api_key = '46c0deba5011b074540b01b773fcb2af';

let locationArray = [{locationName : 'New York',postalCode : '94040,us'},
                    {locationName : 'Lancaster',postalCode : '93524,us'},
                    {locationName : 'Lake City',postalCode : '32024,us'},
                    {locationName : 'Ashland',postalCode : '67831'},
                    {locationName : 'Beaver',postalCode : '73932'}];

locationArray.forEach((item, index) => {
axios.get(`https://samples.openweathermap.org/data/2.5/weather?zip=${item.postalCode}&appid=${weather_api_key}`)
.then(function (response) {
    console.log(`Current weather at ${item.locationName} : `+response.data.weather[0].description);
  })
  .catch(function (error) {
    console.log(error);
  })
});