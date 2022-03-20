export class Dom{

    constructor(){
        this.ciudad = document.getElementById('ciudad');
        this.humedad = document.getElementById('humedad');
        this.vientos = document.getElementById('vientos');
        this.temperatura = document.getElementById('temperatura');
    }

    renderizar(ciudad){
        this.ciudad.innerText = ciudad.name;
        this.humedad.innerText = ciudad.main.humidity + " %";
        this.vientos.innerText = ciudad.wind.speed + " m/s";
        this.temperatura.innerText = ciudad.main.temp + " °C";
    }

}