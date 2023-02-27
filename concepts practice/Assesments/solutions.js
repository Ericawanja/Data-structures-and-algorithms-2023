const { object } = require("joi");

class Roles {
  constructor() {}
  handlePrescriptions() {
    return {
      pharmacistRole: "write prescriptions to people",
    };
  }
  handleCash() {
    return {
      cashierRoles: {
        collect: "Collect cash",
        returnCash: "return the cash to the pharmacy",
      },
    };
  }
  manageEmployees() {
    return {
      managerRole: "manage Employees",
    };
  }
}

const pharmacist = new Roles().handlePrescriptions();
const cashier = new Roles().handleCash();

const manager = Object.assign({}, new Roles().manageEmployees(), cashier, pharmacist);
console.log(manager)