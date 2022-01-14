const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const dataHour = Object.entries(data.hours);
const dayWeek = Object.keys(data.hours);

// Requisito com auxílio do Thalles - Monitoria Individual, Baêta conclusão sala de estudos (Léo e Brendha)
function getParam(param) {
  // se o parametro for vazio ou qualquer coisa.
  return dataHour.reduce((acc, [day, status]) => {
    acc[day] = {
      officeHour: `Open from ${status.open}am until ${status.close}pm`,
      exhibition: species.filter((specie) => specie.availability.includes(day))
        .map((specie) => specie.name),
    };
    acc.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    return acc;
  }, {});
}

function getSchedule(scheduleTarget) {
  const animalPesq = species.find((specie) => specie.name === scheduleTarget);
  if (animalPesq) {
    return animalPesq.availability;
  }

  if (dayWeek.includes(scheduleTarget)) {
    const obj = { [scheduleTarget]: getParam()[scheduleTarget] };
    return obj;
  }
  return getParam();
}
// getSchedule();
console.log(getSchedule('lions'));

module.exports = getSchedule;
