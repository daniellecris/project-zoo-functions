const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// verificar se o colaborador é gerente ou não, retornando booleano;
function isManager(id) {
  return employees.some((manager) => manager.managers.includes(id));
}

// retorna array com nome dos funcionários que o colaborador é gerente.
function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return employees.filter((employee) => employee.managers
      .includes(managerId))
      .map((employeeName) => `${employeeName.firstName} ${employeeName.lastName}`);
  }
  // se não for gerente, gerar erro com a mensagem "O id inserido não é de uma pessoa colaboradora gerente!".
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
