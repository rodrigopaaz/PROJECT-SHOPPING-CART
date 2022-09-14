// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */

let save = [];
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};
/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
/*  const getIdFromProductItem = (product) => product.querySelector('span.id').innerText;
 */
const cartItemClickListener = (element) => {
  const ol = document.getElementsByClassName('cart__items')[0]; 
  ol.removeChild(element.target);
  save = ol.innerHTML;
  saveCartItems(save);
};

const appendLi = (elemento) => {
  const ol = document.getElementsByClassName('cart__items')[0]; 
  ol.appendChild(elemento);
  save = ol.innerHTML;
  saveCartItems(save);
};

 const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.id = id;
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  const ol = document.getElementsByClassName('cart__items')[0]; 
  ol.addEventListener('click', cartItemClickListener);
  return appendLi(li);
};

const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  const btn = section.lastChild;
  btn.addEventListener('click', async () => {
  createCartItemElement(await fetchItem(id)); 
}); 

  return section;
};

/* const itemAdd = document.getElementsByClassName('item__add'); 
const ulItem = document.getElementsByClassName('items');
ulItem[0].addEventListener('click', (object) => {
console.log(object.target.innerText);
}); */

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */

const newClass = (parametro) => {
  const classItems = document.getElementsByClassName('items')[0];
  return classItems.appendChild(createProductItemElement(parametro));
};

const loadCart = async () => {
  const reloadCart = JSON.parse(getSavedCartItems('cartItems'));
  localStorage.setItem('cartItems', reloadCart);
  const ol = document.getElementsByClassName('cart__items')[0]; 
  if (localStorage.cartItems !== 'undefined' && localStorage.cartItems.length !== 0) {
  ol.innerHTML = JSON.parse(reloadCart);
  save = JSON.parse(reloadCart);
  ol.addEventListener('click', cartItemClickListener); 
}
  };

const createProduct = async () => {
  const { results } = await fetchProducts('computador');
    results.forEach((element) => {
      newClass(element);
    });
};

window.onload = () => { createProduct(); loadCart(); };
