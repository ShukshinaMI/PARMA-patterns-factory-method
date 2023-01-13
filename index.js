import './style.css';

const employeeList = document.querySelector('.employees');

const Factory = function () {
  this.createEmployee = function (name, type) {
    let employee = null;

    switch (type) {
      case 'fulltime': {
        employee = new FullTime();
        break;
      }
      case 'parttime': {
        employee = new PartTime();
        break;
      }
      case 'temporary': {
        employee = new Temporary();
        break;
      }
      case 'contractor': {
        employee = new Contractor();
        break;
      }
      default:
        null;
    }

    employee.name = name;
    employee.type = type;

    employee.say = function () {
      const employeeElement = document.createElement('li');
      employeeElement.textContent = `I am employee ${this.name}. ${this.type}: rate ${this.hourly}/hour`;
      employeeList.append(employeeElement);
    };

    return employee;
  };
};

const FullTime = function () {
  this.hourly = '$12';
};

const PartTime = function () {
  this.hourly = '$11';
};

const Temporary = function () {
  this.hourly = '$10';
};

const Contractor = function () {
  this.hourly = '$15';
};

function runAcquaintance() {
  const employees = [];
  const factory = new Factory();

  employees.push(
    factory.createEmployee('Masha', 'fulltime'),
    factory.createEmployee('Dasha', 'parttime'),
    factory.createEmployee('Pasha', 'temporary'),
    factory.createEmployee('Sasha', 'contractor')
  );

  employees.forEach((employee) => {
    employee.say();
  });
}

runAcquaintance();
