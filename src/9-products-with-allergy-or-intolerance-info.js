// `9 - Crie uma função que retorne todos os produtos com informações sobre alergia ou intolerância`

// Com o aumento da demanda de produtos para pessoas com algum tipo de alergia ou intolerância alimentar, é importante que o site do supermercado mostre essas informações para ter mais assertividade nas vendas. O time de front-end ainda está conversando com a condecorada Dona Filó para entender onde colocar as informações e até nos entregou um esboço. Porém, já temos a demanda de criar uma função que retorne todos os produtos do estoque que podem gerar alergia ou intolerância em um formato específico.


const stockProducts = require('./data.json');

const getProductsWithAllergyOrIntoleranceInfo = () => {
  let list = [];
  for (let i = 0; i < stockProducts.length; i += 1) {
    if (Object.keys(stockProducts[i]).includes('allergyOrIntolerance')) {
      let algy = `Pode conter: ${Object.values(stockProducts[i].allergyOrIntolerance).join(' ')}`;
      list.push({ description: stockProducts[i].description,
        formattedPrice: `R$ ${stockProducts[i].price}`,
        allergyOrIntoleranceMessage: `${algy}`,
      });
    }
  }
  return list;
};
module.exports = { getProductsWithAllergyOrIntoleranceInfo };
