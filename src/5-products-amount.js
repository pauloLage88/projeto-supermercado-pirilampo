// `5 - Crie uma função que retorne o total de produtos em estoque`

// A quantidade única de produtos não consegue representar o tamanho do estoque. Um grande exemplo disso é que podemos ter 1 produto (_Farinha_) cadastrado no sistema, mas com centenas de pacotes no estoque. É importante para a mestra do empreendedorismo, Dona Filó, ter noção do tamanho do seu estoque, pois dependendo do movimento do seu supermercado, expandir o galpão que armazena todos os produtos pode ser uma opção. O time de front-end, já prevenindo tal funcionalidade, deixou um esboço para entendimento.

const stockProducts = require('./data.json');

const getProductsAmount = () => {
  let sum = 0;
  for (let index = 0; index < stockProducts.length; index += 1) {
    sum += stockProducts[index].quantityInStock;
  }
  return sum;
};
module.exports = { getProductsAmount };
