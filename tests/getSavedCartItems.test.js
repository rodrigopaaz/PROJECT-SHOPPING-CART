const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');
const { expect } = require('@jest/globals');

localStorageSimulator('setItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Testa se localStorage.setItem é chamado:  ', () => {
    getSavedCartItems('teste');
    expect(localStorage.setItem).toBeCalledTimes(1);
  })
  it('Testa se localStorage.setItem é chamado com a chave e o Valor: ', () => {
    getSavedCartItems('id', 'teste');
    expect(localStorage.setItem).toBeCalledTimes(1);
  })
});
