export class Clima{

    constructor(ciudad){
        this.ciudad = ciudad;
        this.key = 'cca522fd35766f3181d51c2e12ffc080';
    }
    obtenerClima(){
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.ciudad}&appid=${this.key}&units=metric`)
            .then(datos => datos.json())
            .catch(err => "error: " + err)
    }

}