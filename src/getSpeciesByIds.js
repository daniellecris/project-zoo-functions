const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (!ids) return 0;

  const animaisId = ids.map((specie) => species.find((specieId) => specieId.id === specie));
  return animaisId;
}

module.exports = getSpeciesByIds;
