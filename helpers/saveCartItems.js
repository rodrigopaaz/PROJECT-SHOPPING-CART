const saveCartItems = (id) => {
  localStorage.setItem('cartItems', JSON.stringify(id)); 
};
if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
