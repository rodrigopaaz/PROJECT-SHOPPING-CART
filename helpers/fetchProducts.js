const fetchProducts = async (parametro) => {
  try {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${parametro}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
  } catch (error) {
    return 'You must provide an url';
  }
};
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
