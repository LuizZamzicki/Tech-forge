abstract class Funcionario {
    constructor(private nome: string, private salario: number) {}

    protected getSalario(): number {
        return this.salario;
    }

    protected getNome(): string {
        return this.nome;
    }

    abstract calcularBonus(): number;

    salarioFinal(): number {
        return this.getSalario() + this.calcularBonus();
    }
}

class Gerente extends Funcionario {
    calcularBonus(): number {
        return this.getSalario() * 0.10;
    }
}

class Operario extends Funcionario {
    calcularBonus(): number {
        return this.getSalario() * 0.05;
    }
}

function calcularSalarioComBonus(funcionarios: Funcionario[]) {
    funcionarios.forEach(funionario => {
        console.log(
            `${funionario["nome"] ?? "Funcionário"} - Salário final: R$ ${funionario.salarioFinal().toFixed(2)}`
        );
    });
}

calcularSalarioComBonus([
    new Gerente("Mauro", 5000),
    new Operario("José", 2500)
]);
