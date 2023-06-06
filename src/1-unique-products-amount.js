// `1 - Crie uma função que retorne a quantidade de produtos únicos em estoque`

// O site do Supermercado Pirilampo possui uma área de Gestão de Estoque. Essa área precisa mostrar a quantidade de produtos únicos em estoque, um recurso muito útil para a Dona Filó conseguir gerenciar a variedade de mercadorias do seu estabelecimento. Você irá construir a função responsável por gerar essa informação, e para que você consiga visualizar onde sua função será utilizada, o time de front-end até desenvolveu um esboço!

const stockProducts = require('./data.json');

const getUniqueProductsAmount = () => {
  let counter = 0;
  for (let index = 0; index < stockProducts.length; index += 1) {
    counter += 1;
  }
  return counter;
};

module.exports = { getUniqueProductsAmount };
