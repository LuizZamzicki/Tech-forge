interface ProdutoLoja {
    codigo: number;
    nome: string;
}

class Loja {
    private produtos: ProdutoLoja[] = [];

    adicionarProduto(produto: ProdutoLoja): void {
        this.produtos.push(produto);
    }

    buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
        return this.produtos.find(prod => prod.codigo === codigo);
    }
}

const loja = new Loja();
loja.adicionarProduto({ codigo: 101, nome: "Mouse" });
loja.adicionarProduto({ codigo: 102, nome: "Teclado" });

console.log(loja.buscarProdutoPorCodigo(102));
console.log(loja.buscarProdutoPorCodigo(999)); 
