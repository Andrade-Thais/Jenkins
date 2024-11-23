const assert = require("assert");
const Calculadora = require("../calculadora");

describe("calculadora", () => {
    let calc;

    beforeEach( () =>{
        calc = new Calculadora();
    });

    it("Deve somar dois números corretamente", () => {
        const resultado = calc.somar(5, 3);
        assert.strictEqual(resultado,8);
    });

    it("Deve subtrair dois números corretamente", () => {
        const resultado = calc.subtrair(10, 4);
        assert.strictEqual(resultado,6);
    });

    it("Deve multiplicar dois números corretamente", () => {
        const resultado = calc.multiplicar(3, 7);
        assert.strictEqual(resultado,21);
    });

    it("Deve dividir dois números corretamente", () => {
        const resultado = calc.dividir(15, 3);
        assert.strictEqual(resultado,5);
    });

    it("Deve lança um erro ao tentar dividir por zero", () =>{
        assert.throws(() => calc.dividir(10,0), /Divisão por zero não existe/);
    });
    
});