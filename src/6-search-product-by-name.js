// `6 - Crie uma função que busque um produto pelo nome`

// Agora que terminamos de criar as funções que entregam a lógica da área de Gestão de Estoque, podemos partir para a criação das funções que vão ajudar a construir a Página Inicial do Supermercado Pirilampo. Iniciaremos a construção lógica da Página Inicial fornecendo a funcionalidade de buscar um produto pelo seu nome. A ideia é que essa função seja utilizada para desenvolver uma página parecida com o exemplo do esboço a seguir.


const stockProducts = require('./data.json');

const searchProductByName = (item) => {
  for (let i = 0; i < stockProducts.length; i += 1) {
    if (stockProducts[i].productName === item) {
      const description = stockProducts[i].description;
      const price = stockProducts[i].price;
      const info = { description, formattedPrice: `R$ ${price}` };
      return info;
    }
  }
  return null;
};
module.exports = { searchProductByName };
