var num_tentative = document.getElementById("tentatives-restantes");
//console.log(num_tentative.innerHTML);
var nombre_propose = document.getElementById("nombre-propose");
var span = document.getElementById("tentatives-restantes");
var button = document.getElementById("proposer");

// class
class Jeu {
    #nombreSecret;
    #tentativesRestantes = 10;
    constructor() {
        this.#nombreSecret = Math.floor(Math.random() * 100);
    }
    deviner = (nombre) => {
        if(nombre>this.#nombreSecret){
            this.#tentativesRestantes--;
            return "plus grand";
        }else if (nombre<this.#nombreSecret){
            this.#tentativesRestantes--;
            return "plus petit";

        }else{
            this.#tentativesRestantes--;

            return "Bravo";
        }
       
    }
    getNombreSecret() {
        return this.#nombreSecret;
    }
    getTentativesRestantes() {
        return this.#tentativesRestantes;
    }
    setNombreSecret(nombreSecret) {
         this.#nombreSecret=nombreSecret;
    }
    setTentativesRestantes(tentativesRestantes) {
        return this.#tentativesRestantes=tentativesRestantes;
    }

}





 var jeu=new Jeu();
 console.log("secret num"+jeu.getNombreSecret());
 function proposerNombre() {
    //console.log(nombre_propose.value);
    if(jeu.getTentativesRestantes()==0){
        button.disabled=true;
        nombre_propose.disabled=true;
       
    }
    console.log(jeu.deviner(nombre_propose.value));
    
    span.textContent=jeu.getTentativesRestantes();

}