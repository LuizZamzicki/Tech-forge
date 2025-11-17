class Animal {
    private energia: number = 100;

    protected comer(valor: number): void {
        this.energia += valor;
    }

    protected gastarEnergia(valor: number): void {
        this.energia -= valor;
        if (this.energia < 0) this.energia = 0;
    }

    statusEnergia() {
        console.log(`Energia atual: ${this.energia}`);
    }
}

class Leao extends Animal {
    comer(): void {
        console.log("O leão está caçando...");
        this.gastarEnergia(30);
        super.comer(40);
    }
}

class Passaro extends Animal {
    comer(): void {
        console.log("O pássaro está se alimentando...");
        super.comer(20);
    }
}

const leao = new Leao();
const passaro = new Passaro();

leao.comer();
leao.statusEnergia();

passaro.comer();
passaro.statusEnergia();
