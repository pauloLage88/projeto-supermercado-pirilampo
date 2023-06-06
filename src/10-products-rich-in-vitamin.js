// `10 - Crie uma função que retorne todos os produtos que possuam alguma vitamina em seu valor nutricional`

// Pensando na saúde das pessoas, a incomensurável Dona Filó teve uma ideia: criar uma seção na Página Inicial para listar alimentos ricos em vitaminas. Você será responsável por desenvolver a função que retorna esses produtos, enquanto o time de front finaliza o layout.

const stockProducts = require('./data.json');

const formatArray = (array) => {
  let formattedArray = [];
  for (let j = 0; j < array.length; j += 1) {
    formattedArray.push(array[j].join(' - '));
  }
  return formattedArray;
};

const getProductsRichInVitamin = () => {
  let list = [];
  for (let i = 0; i < stockProducts.length; i += 1) {
    if (Object.keys(stockProducts[i].nutritionalInfo).includes('vitamins')) {
      let array = Object.entries(stockProducts[i].nutritionalInfo.vitamins);
      let vitFormated = formatArray(array);
      list.push({ description: stockProducts[i].description,
        formattedPrice: `R$ ${stockProducts[i].price}`,
        vitaminsInformation: vitFormated,
      });
    }
  }
  return list;
};

module.exports = { getProductsRichInVitamin };
