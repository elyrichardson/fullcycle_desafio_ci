const soma = require('./index');

test('soma 1 + 2 para igual a 3', () => {
    expect(soma(1, 2)).toBe(3);
});
