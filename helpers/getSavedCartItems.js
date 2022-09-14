const getSavedCartItems = (id) => {
  const get = localStorage.getItem(id);
  return JSON.stringify(get);
};
if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
