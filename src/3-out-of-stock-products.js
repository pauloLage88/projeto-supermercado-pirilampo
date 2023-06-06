// `3 - Crie uma função que retorne os nomes dos produtos indisponíveis do estoque`

// Para conseguir se planejar melhor com a compra de produtos que estão em falta, nossa idolatrada Dona Filó precisa ter conhecimento de quais produtos são esses. Para isso, dentro da seção de Gerenciamento de Estoque, vamos ter uma subseção que mostra os produtos indisponíveis.

const stockProducts = require('./data.json');

const getOutOfStockProducts = () => {
  const outOfStockList = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].quantityInStock === 0) {
      outOfStockList.push(stockProducts[index].productName);
    }
  }
  return outOfStockList;
};
module.exports = { getOutOfStockProducts };
