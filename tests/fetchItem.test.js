require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const { expect } = require('@jest/globals');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Testa se fetchItem é uma função: ', () => {
    expect(typeof fetchItem).toBe('function')
  })
  it('Testa se a função Fetch é chamada: ', () => {
    fetchItem("MLB1615760527")
    expect(fetch).toBeCalledTimes(1);
  })
  it('Testa se a função Fetch é chamada com o endPoint correto: ', () => {
    fetchItem("MLB1615760527")
    const url =  "https://api.mercadolibre.com/items/MLB1615760527";
    expect(fetch).toBeCalledWith(url);
  })
  it('Verifica se ao chamar a função sem parametro, retorna um erro: ', () => {
    try {
      fetchItem();
    } catch (erro) {
      expect(erro.message).toBe('mensagem esperada aqui');
    }
  });
});
