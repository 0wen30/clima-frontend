export class Storage{

    obtenerStorage(){
        const info = localStorage.getItem('ciudad');
        return info ? 'mexico' : info;
    }

    guardarStorage(ciudad){
        localStorage.setItem('ciudad',ciudad)
    }

}