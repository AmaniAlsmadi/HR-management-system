'use strict';

const allEmployee =[];
function Employee (employeeId, fullName, department, level , image ){
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.image = image;

    allEmployee.push(this);
   
}

//console.log(allEmployee);

 Employee.prototype.salary = function (){
 if( this.level.toLowerCase() === 'senior'){ 
  this.salary = getRndInteger(1500,2000) ;
  return this.salary;
  } else if (this.level.toLowerCase() ==='mid-senior'){
   this.salary = getRndInteger(1000,1500);
   return this.salary;
  } else if (this.level.toLowerCase() ==='junior'){
  this.salary = getRndInteger(500,1000);
  return this.salary;
  }
 }

 Employee.prototype.netSalary = function (){
  this.netSalary =Math.floor( this.salary - (this.salary * 0.075));
  return this.netSalary;
}



 Employee.prototype.employeesTable = function(){
  
  document.write (`<p> Full name : ${this.fullName}, Salary : ${this.salary} JD , Net salary : ${this.netSalary} JD  \n </p>`)
  }



function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

 const ghaziSamer = new Employee ( 1000 ,'Ghazi Samer','Administration','Senior');
 const lanaAli = new Employee (1001,'Lana Ali','Finance','Senior');
 const tamaraAyoub = new Employee ( 1002,'Tamara Ayoub','Marketing','Senior');
 const safiWalid = new Employee (1003,'Safi Walid','Administration','Mid-Senior');
 const omarZaid = new Employee (1004,'Omar Zaid','Development','Senior');
 const ranaSaleh = new Employee (1005,'Rana Saleh','Development','Junior');
 const hadiAhmad = new Employee (1006,'Hadi Ahmad','Finance','Mid-Senior');


 for(let i = 0 ; i < allEmployee.length ; i++ ){
  allEmployee[i].salary();
  allEmployee[i].netSalary();
  allEmployee[i].employeesTable();
}


