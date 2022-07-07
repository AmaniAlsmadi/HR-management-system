'use strict'

const allEmployee =[];
function Employee (employeeId, fullName, department, level , image ){
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.image = image;

    allEmployee.push(this);
   
}


 Employee.prototype.salary = function (){
 ( this.level === 'Senior')? this.salary = getRndInteger(1500,2000): 
 (this.level ==='Mid-Senior')? this.salary = getRndInteger(1000,1500):
this.salary = getRndInteger(500,1000);
 }

 Employee.prototype.netSalary = function (){
  this.netSalary = this.salary - (this.salary * 0.075);
}

 for(let i=0; i< allEmployee.length; i++){
  allEmployee[i].this.salary();
  allEmployee[i].this.netSalary();
  allEmployee[i].employeesTable();
}


 Employee.prototype.employeesTable= function(){
    document.write(`<p>Full name : ${this.fullName}, Salary : ${this.salary()} JD , Net salary : ${this.netSalary()} JD  \n </p>`);
}



function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

 const Ghazi = new Employee ( 1000 ,'Ghazi Samer','Administration','Senior');
 const Lana = new Employee (1001,'Lana Ali','Finance','Senior');
 const Tamara = new Employee ( 1002,'Tamara Ayoub','Marketing','Senior');
 const Safi = new Employee (1003,'Safi Walid','Administration','Mid-Senior');
 const Omar = new Employee (1004,'Omar Zaid','Development','Senior');
 const Rana = new Employee (1005,'Rana Saleh','Development','Junior');
 const Hadi = new Employee (1006,'Hadi Ahmad','Finance','Mid-Senior');


 

