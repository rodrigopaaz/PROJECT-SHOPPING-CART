const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');
const { expect } = require('@jest/globals');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Testa se localStorage.getItem é chamado com a chave e o Valor: ', () => {
    getSavedCartItems('id');
    expect(localStorage.getItem).toBeCalledTimes(1);
  })
  it('Testa se localStorage.setItem é chamado com a chave e o Valor: ', () => {
    getSavedCartItems('cartItems');
    expect(localStorage.getItem).toBeCalledWith('cartItems');
  })
  it('Testa o type of: ', () => {
    getSavedCartItems('teste');
    expect(typeof module).not.toBeUndefined;
  })
});
