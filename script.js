// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
let save = [];
let total = 0;
const sumPrice = (valor) => {
  total += valor;
};
const subPrice = (valor) => {
  total -= valor;
};
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const valorTotal = (parametro) => {
  const valor = document.getElementsByClassName('total-price')[0];
  valor.innerHTML = '';
  valor.innerHTML = `Subtotal ${parametro.toFixed(2)}`;
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
const cartItemClickListener = async (element) => {
  const ol = document.getElementsByClassName('cart__items')[0]; 
  const li = document.getElementsByClassName('cart__item'); 
  const remove = element.target.getAttribute('data_evento');
  const { price } = await fetchItem(li[remove].id);
  ol.removeChild(li[remove]);
  subPrice(price);
  save = ol.innerHTML;
  saveCartItems(save);
  valorTotal(total);
};

const createProductImageElement2 = (imageSource) => {
  const img = document.createElement('img');
  const li = document.getElementsByClassName('cart__item'); 
  img.className = 'item__image1';
  img.src = imageSource;
  img.setAttribute('data_evento', li.length);
  img.addEventListener('click', cartItemClickListener);
  return img;
};

const appendLi = (elemento) => {
  const ol = document.getElementsByClassName('cart__items')[0]; 
  ol.appendChild(elemento);
  save = ol.innerHTML;
  saveCartItems(save);
};

 const createCartItemElement = ({ id, title, price, thumbnail }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.id = id;
  const div = document.createElement('div');
  div.className = 'div__cart';
  li.appendChild(createProductImageElement(thumbnail));
  li.appendChild(div);
  div.appendChild(createCustomElement('span', 'title_cart', title));
  const cifrao = document.createElement('span');
  cifrao.className = 'cifrao';
  div.appendChild(cifrao);
  cifrao.innerText = 'R$';
  cifrao.appendChild(createCustomElement('span', 'item__title_price', price.toFixed(2)));
  li.appendChild(createProductImageElement2('deletar.png'));
  const ol = document.getElementsByClassName('cart__items')[0]; 
  ol.appendChild(li);
  ol.addEventListener('click', cartItemClickListener);
  return appendLi(li);
};

const createProductItemElement = ({ id, title, thumbnail, price }) => {
  const section = document.createElement('section');
  section.className = 'item';
  const valorEmReal = `${price.toFixed(2)}`;
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('span', 'item__title', title));
  const cifrao = document.createElement('span');
  cifrao.className = 'cifrao';
  section.appendChild(cifrao);
  cifrao.innerHTML = 'R$';
  cifrao.appendChild(createCustomElement('span', 'item__title_price', valorEmReal));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho'));
  const btn = section.lastChild;
  btn.addEventListener('click', async () => {
  createCartItemElement(await fetchItem(id)); 
  sumPrice(price);
  valorTotal(total);
}); 

  return section;
};

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
  const span = document.createElement('span');
  span.innerHTML = 'loading...';
  span.className = 'loading';
  classItems.appendChild(span);
  return setTimeout(() => { 
    classItems.removeChild(span);
    classItems.appendChild(createProductItemElement(parametro)); 
}, '3000');
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

const createProduct = async (filtro) => {
  if (filtro === '') {
  const { results } = await fetchProducts('computador');
    results.forEach((element) => {
      newClass(element);
    }); 
  } else {
    const { results } = await fetchProducts(filtro);
    results.forEach((element) => {
      newClass(element);
    });     
  }
};
const filtrar = document.getElementsByClassName('container-title')[0];
filtrar.appendChild(createCustomElement('input', 'filter'));
const filter = document.getElementsByClassName('filter')[0];
const items = document.getElementsByClassName('items')[0];
filter.addEventListener('click', () => {
  items.innerHTML = ''; 
  createProduct(filter.value);
});
const button = document.getElementsByClassName('empty-cart')[0];
button.addEventListener('click', () => {
  const ol = document.getElementsByClassName('cart__items')[0]; 
  ol.innerHTML = '';
  localStorage.clear();
  const valor = document.getElementsByClassName('total-price')[0];
  total = 0;
  valor.innerHTML = '';
  valorTotal(0); 
});

window.onload = () => { createProduct(); loadCart(); valorTotal(0); };
