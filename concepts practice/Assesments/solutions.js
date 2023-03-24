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

const manager = Object.assign(
  {},
  new Roles().manageEmployees(),
  cashier,
  pharmacist
);
// console.log(manager)

// Question Two

function reverse(s) {
  let array = s.split("");
  let subArrays = [];
  console.log(array);
  for (let i = 0; i < array.length; ) {
    let sub = [];
    if (array.length - i >= 4) {
      sub.push(array[i], array[i + 1], array[i + 2], array[i + 3]);
      i = i + 4
    }else{
        
    }
  }
}
reverse(`Lorem at`);

// question Three
