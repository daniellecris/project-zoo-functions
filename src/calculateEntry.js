const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = (entrants.filter((entrant) => entrant.age < 18)).length;
  const adult = (entrants.filter((entrant) => (entrant.age >= 18 && entrant.age < 50))).length;
  const senior = (entrants.filter((entrant) => entrant.age >= 50)).length;

  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }

  const totalVisits = countEntrants(entrants);
  const totalChild = totalVisits.child * prices.child;
  const totalAdult = totalVisits.adult * prices.adult;
  const totalSenior = totalVisits.senior * prices.senior;

  return totalChild + totalSenior + totalAdult;
}

module.exports = { calculateEntry, countEntrants };
