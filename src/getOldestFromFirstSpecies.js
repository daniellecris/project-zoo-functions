const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const pesqEmployee = employees.find((employee) => id === employee.id);

  // pesquisa a primeira especie que o funcionário é responsável
  const pesqSpecie = species.find((animal) => animal.id === pesqEmployee.responsibleFor[0]);

  const animal = pesqSpecie.residents.sort((a, b) => b.age - a.age);

  return Object.values(animal[0]);
}

module.exports = getOldestFromFirstSpecies;
