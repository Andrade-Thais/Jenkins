const assert = require("assert");
const Pedido = require("../pedido");

describe("Sistema de Pedidos - Hamburgueria", () =>{
    let pedido;

    beforeEach( () => {
        pedido = new Pedido();
    });

    it("deve adicionar itens ao pedido", () =>{
        pedido.adicionarItem("Hamburguer", 10.5, 2);
        pedido.adicionarItem("Batata Frita", 5.0, 1);
        assert.strictEqual(pedido.itens.length, 2);
    });

    it("deve calcular o total do pedido corretamente", () =>{
        pedido.adicionarItem("Hamburguer", 10.5, 2);
        pedido.adicionarItem("Batata Frita", 5.0, 1);
        const total = pedido.calcularTotal();

        assert.strictEqual(total, 31.0);
    });

    it("deve aplicar desconto ao pedido", () =>{
        pedido.adicionarItem("Hamburguer", 10.0, 2);
        pedido.aplicarDesconto("PROMO10");
        const totalComDesconto = pedido.calcularTotal();

        assert.strictEqual(totalComDesconto, 23.0);
    });

    it("deve lançar erro com código promocional inválido", () =>{
        assert.throws(() => pedido.aplicarDesconto("INVÁLIDO", /Código promocional inválido/));
    });

    it("deve confirmar o pedido se houver itens", () =>{
        pedido.adicionarItem("Hamburguer", 10.0, 1);
        pedido.confirmar();
        assert.strictEqual(pedido.status, "Confirmado");
    });

    it("deve lança erro ao confirmar pedido vazio", () =>{
    assert.throws(() => pedido.confirmar(), /Pedido vazio. Adicione itens/);
    });

    it("deve cancelar o pedido", () =>{
        pedido.cancelar();
        assert.strictEqual(pedido.status, "Cancelado");
    });

});

