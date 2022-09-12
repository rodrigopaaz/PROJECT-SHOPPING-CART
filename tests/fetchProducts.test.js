require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');
const { expect } = require('@jest/globals');

describe('1 - Teste a função fetchProducts', () => {
 it('Verique se a função fetchProducts é uma função: ', () => {
  expect(typeof fetchProducts).toBe('function')});
  it('Verifique se o argumento chama a o endpoint da função corretamente: ', () => {const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
  fetchProducts('computador')
  expect(fetch).toBeCalledWith(url);
 })
 it('Verifique se o retorno fetchProducts computador é uma estrutura de dados igual ao objeto computadorSearch: ', async () => {
 expect(await fetchProducts('computador')).toEqual(computadorSearch)
})
 it('Verifica se ao chamar a função sem parametro, retorna um erro: ', () => {
  try {
    fetchProducts();
  } catch (erro) {
    expect(erro.message).toBe('You must provide an url');
  }
});
 })
