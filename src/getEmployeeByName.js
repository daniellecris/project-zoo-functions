const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};

  const funcionario = data.employees.find((func) =>
    (func.lastName === employeeName) || (func.firstName === employeeName));
  return (funcionario);
}

module.exports = getEmployeeByName;
