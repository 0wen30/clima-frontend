const {Clima} = require('./clases/clima');
const {Dom} = require('./clases/dom');
const {Storage} = require('./clases/storage');

const mostrarClima = (ciudad) => {

    const clima = new Clima(ciudad);

    const dom = new Dom();

    clima.obtenerClima().then(e=>{
        dom.renderizar(e);
    })    

}

const main = () => {

    const ls = new Storage();

    mostrarClima(ls.obtenerStorage());

    const boton = document.getElementById('consultar');

    boton.addEventListener('click',()=>{
        const ciudad = document.getElementById('inputcity').value;
        if (ciudad !== '') {
            ls.guardarStorage(ciudad)
            mostrarClima(ciudad);
        }
    });

}

module.exports = main;