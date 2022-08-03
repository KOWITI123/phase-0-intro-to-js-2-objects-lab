// Write your solution in this file!
let employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
}

function updateEmployeeWithKeyAndValue(object, key, value) {
     return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
      object[key] = value;
      return object;
}

function deleteFromEmployeeByKey(employee, key) {
     let newEmployee = {...employee};
     delete newEmployee[key];
     return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
     delete employee[key];
     return employee
}