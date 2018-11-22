const axios = require('axios');

const getClima = async(lat, lon) => {

    let respuesta = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=fab0aadc3e72b92ca8d9ea1e23fc6626`)
    return respuesta.data.main.temp;
}
module.exports.getClima = getClima;