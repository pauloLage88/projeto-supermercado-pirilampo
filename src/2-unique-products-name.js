// `2 - Crie uma função que retorne os nomes dos produtos únicos em estoque`

// Além da quantidade de produtos únicos, a área de Gestão de Estoque deve apresentar a lista com o nome dos produtos, funcionalidade muito útil para a Dona Filó visualizar todos os produtos que possui em estoque. Seria algo parecido com o esboço a seguir, segundo o time de front-end.

const stockProducts = require('./data.json');

const getUniqueProductsName = () => {
  let productArray = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    productArray.push(stockProducts[index].productName);
  }
  return productArray;
};

module.exports = { getUniqueProductsName };
