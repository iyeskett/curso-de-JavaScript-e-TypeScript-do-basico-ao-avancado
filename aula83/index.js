function teste(){
    console.log(this);
}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        teste();
    }

    // Metodo de instância
    aumentarVolume() {
        this.volume += 2;
    }

    // Metodo de instância
    diminuirVolume() {
        this.volume -= 2;
    }

    // // Metodo de instância
    // trocaPilha() {
    //     //
    // }

    // Método estático
    static trocarPilha(){
        console.log('Troca realizada');
    }

}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

ControleRemoto.trocarPilha();
