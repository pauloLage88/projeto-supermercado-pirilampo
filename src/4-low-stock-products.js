// `4 - Crie uma função que retorne os produtos com baixo estoque em um formato específico`

// Boa gestora que é, Dona Filó busca manter seu supermercado sempre bem abastecido de mercadorias. Ela precisa ter visibilidade não só dos produtos que estão em falta, mas também dos produtos que estão prestes a se esgotar. Por conta disso, precisamos desenvolver uma área que apresente qual produto está com estoque baixo e quantos deste produto estão no estoque.

const stockProducts = require('./data.json');

const getLowStockProducts = () => {
  const lowStock = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].quantityInStock <= 10 && stockProducts[index].quantityInStock > 0) {
      const name = stockProducts[index].productName;
      const quantity = stockProducts[index].quantityInStock;
      lowStock.push(`${name}: ${quantity} unidades`);
    }
  }
  return lowStock;
};

// console.log(getLowStockProducts(stockProducts));
module.exports = { getLowStockProducts };
