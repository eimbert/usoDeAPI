const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Nombre de la ciudad y pais, para obtener el clima',
        demand: true
    }
}).argv;

const coordenadas = {
    direccion: 'Barcelona',
    latitud: 41.3818,
    longuitud: 2.1685
};

let coor = coordenadas;
clima.getClima(coor.latitud, coor.longuitud)
    .then(temp => console.log(temp))
    .catch(e => console.log(e));