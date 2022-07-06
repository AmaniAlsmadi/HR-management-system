'use strict'

//const allEmployee =[];
function Employee (employeeId, fullName, department, level , image ){
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.image = image;
    console.log(this);
    //allEmployee.push(this);
   
}
/*
Employee.prototype.salary = function (min , max){
  const depends = Math.floor(Math.random() * ( max - min + 1 ) + min );
   salary = depends - (depends *(7.5 /100));
  return salary;
 }*/

 Employee.prototype.salary = function (){
 if ( this.level === 'Senior'){
    const depends = Math.floor(Math.random() * ( 2000 - 1500 + 1 ) + 1500 );
    this.salary = depends - (depends *(7.5 /100));
   console.log(this.salary);
 }else if (this.level ==='Mid-Senior'){
    const depends = Math.floor(Math.random() * ( 1500 - 1000 + 1 ) + 1000 );
    this.salary = depends - (depends *(7.5 /100));
    console.log(this.salary);
 }else if (this.level ==='Junior'){
    const depends = Math.floor(Math.random() * ( 1000 - 500 + 1 ) + 500 );
   this.salary = depends - (depends *(7.5 /100));
   console.log(this.salary);
 }}

 /*Employee.prototype.employeesTable= function(){
    console.log(`${this.fullName}: ${this.salary} JD`);
    document.write(`<p>${this.fullName}: ${this.salary} JD \n </p>`);
}*/

/*for(let i=0; i< allEmployee.length; i++){
    allEmployee[i].employeesTable();
}*/


 const Ghazi = new Employee ( 1000 ,'Ghazi Samer','Administration','Senior');
 const Lana = new Employee (1001,'Lana Ali','Finance','Senior');
 const Tamara = new Employee ( 1002,'Tamara Ayoub','Marketing','Senior');
 const Safi = new Employee (1003,'Safi Walid','Administration','Mid-Senior');
 const Omar = new Employee (1004,'Omar Zaid','Development','Senior');
 const Rana = new Employee (1005,'Rana Saleh','Development','Junior');
 const Hadi = new Employee (1006,'Hadi Ahmad','Finance','Mid-Senior');

/*console.log(Employee1);
console.log(Employee2);*/

console.log(`${this.fullName}: ${ Ghazi.salary()}`);
console.log(`${this.fullName}: ${ Lana.salary()}`);
console.log(`${this.fullName}: ${ Tamara.salary()}`);
console.log(`${this.fullName}: ${ Safi.salary()}`);
console.log(`${this.fullName}: ${ Omar.salary()}`);
console.log(`${this.fullName}: ${ Rana.salary()}`);
console.log(`${this.fullName}: ${ Hadi.salary()}`);
document.write("Employee Table");
document.write(`${this.fullName}: ${ Ghazi.salary()}`);
document.write(`${this.fullName}: ${ Lana.salary()}`);
document.write(`${this.fullName}: ${ Tamara.salary()}`);
document.write(`${this.fullName}: ${ Safi.salary()}`);
document.write(`${this.fullName}: ${ Omar.salary()}`);
document.write(`${this.fullName}: ${ Rana.salary()}`);
document.write(`${this.fullName}: ${ Hadi.salary()}`);
console.log(document);
