const data = require('../data/zoo_data');

// Esta função, a partir do nome de uma espécie e uma idade mínima,
// verifica se todos os animais daquela espécie possuem a idade mínima especificada. retorna booleano

function getAnimalsOlderThan(animal, age) {
  const specie = data.species.find((specieFind) => specieFind.name === animal);
  // every, percorre todos os itens do array verificando se corresponde ao critério, retornando booelano
  const animaisAge = specie.residents.every((specieAnimal) => specieAnimal.age > age);
  return animaisAge;
}

getAnimalsOlderThan('otters', 7);

module.exports = getAnimalsOlderThan;
