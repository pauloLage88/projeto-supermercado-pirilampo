// `8 - Crie uma função que busque por produtos na promoção`

// Toda clientela gosta de uma boa promoção, não é mesmo? Pensando nisso, uma área com os produtos em oferta é altamente estratégico para nossa apreciada Dona Filó. Seu desafio aqui será desenvolver a função que recuperará os produtos em promoção, para serem adicionados em uma nova seção.

const stockProducts = require('./data.json');

const getProductsOnSale = () => {
  let list = [];
  for (let i = 0; i < stockProducts.length; i += 1) {
    if (stockProducts[i].onSale === true) {
      const description = stockProducts[i].description;
      const price = stockProducts[i].price;
      const info = { description, formattedPrice: `R$ ${price}`, onSale: stockProducts[i].onSale };
      list.push(info);
    }
  }
  return list;
};

module.exports = { getProductsOnSale };
