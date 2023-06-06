// `7 - Crie uma função que busque por produtos de uma marca específica`

// Outra funcionalidade crucial para a Página Inicial é a busca por produtos através da marca. Segundo a inoxidável Dona Filó, existem algumas marcas que são as "queridinhas" da sua clientela. Sua lógica será desenvolvida em uma função separada, mas o time de front-end irá aproveitar a mesma área de pesquisa utilizada anteriormente. Para ter ideia de como será o layout dessa funcionalidade, o time também disponibilizou um esboço.

const stockProducts = require('./data.json');

const searchProductsByBrand = (brandName) => {
  const list = [];
  for (let i = 0; i < stockProducts.length; i += 1) {
    if (stockProducts[i].brand === brandName) {
      const description = stockProducts[i].description;
      const price = stockProducts[i].price;
      const info = { description, formattedPrice: `R$ ${price}` };
      list.push(info);
    }
  }
  return list;
};

module.exports = { searchProductsByBrand };
