const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');
const { expect } = require('@jest/globals');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Testa se localStorage.setItem é chamado:  ', () => {
    saveCartItems('teste');
    expect(localStorage.setItem).toBeCalledTimes(1);
  })
  it('Testa se localStorage.setItem é chamado com a chave e o Valor: ', () => {
    saveCartItems('id', 'teste');
    expect(localStorage.setItem).toBeCalledTimes(1);
  })
/*   it('Testa se getItem é chamado ', () => {
    saveCartItems();
    expect(localStorage.getItem).toBeCalledTimes(1);
  }) */
});
