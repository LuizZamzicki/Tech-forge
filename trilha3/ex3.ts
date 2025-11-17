class Pagamento {
    processar(): void {
        console.log("Processando pagamento...");
    }
}

class PagamentoCartao extends Pagamento {
    constructor(private numeroCartao: string) {
        super();
    }

    private validarCartao(): boolean {
        return this.numeroCartao.length >= 13 && this.numeroCartao.length <= 16;
    }

    processar(): void {
        if (this.validarCartao()) {
            console.log("Pagamento com cartão aprovado!");
        } else {
            console.log("Número de cartão inválido.");
        }
    }
}

class PagamentoBoleto extends Pagamento {
    processar(): void {
        const codigo = "23790." + Math.floor(Math.random() * 999999999);
        console.log("Boleto gerado:", codigo);
    }
}

function realizarPagamento(pagamentos: Pagamento[]) {
    pagamentos.forEach(pagamento => pagamento.processar());
}

realizarPagamento([
    new PagamentoCartao("1234567890123"),
    new PagamentoBoleto()
]);
