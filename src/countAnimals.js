const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  // Se nenhum argumento for passado, retorna um objeto cujo o nome de cada espécie é uma chave desse objeto, e o total de animais dessa espécie é o seu valor;
  if (!animal) {
    return species.reduce((acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    }, {});
  }

  // recebendo como parâmetro um objeto com a chave 'specie', retorna um número, a quantidade de animais daquela espécie
  if (Object.keys(animal).length < 2) {
    return species.find((element) => (element.name === animal.specie)).residents.length;
  }

  // recebendo como parâmetro um objeto com a chave \'specie\' e \'sex\', retorna um número, a quantidade de animais daquela espécie, no sexo selecionado'
  return species
    .find((specie) => specie.name === animal.specie)
    .residents.filter((resident) => resident.sex === animal.sex).length;
}

module.exports = countAnimals;
