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
  
 document.write (`<p> Full name : ${this.fullName}, Salary : ${this.salary} JD , Net salary : ${this.netSalary} JD </p> `)
    
}



function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

 const ghaziSamer = new Employee ( 1000 ,'Ghazi Samer','Administration','Senior', "./assets/Ghazi1.png" );
 const lanaAli = new Employee (1001,'Lana Ali','Finance','Senior','./assets/Lana.jpg' );
 const tamaraAyoub = new Employee ( 1002,'Tamara Ayoub','Marketing','Senior','./assets/Tamara.jpg' );
 const safiWalid = new Employee (1003,'Safi Walid','Administration','Mid-Senior', './assets/Safi.jpg');
 const omarZaid = new Employee (1004,'Omar Zaid','Development','Senior', './assets/Omar.jpg');
 const ranaSaleh = new Employee (1005,'Rana Saleh','Development','Junior','./assets/Rana.jpg' );
 const hadiAhmad = new Employee (1006,'Hadi Ahmad','Finance','Mid-Senior','./assets/Hadi.jpg' );


 for(let i = 0 ; i < allEmployee.length ; i++ ){
  allEmployee[i].salary();
  allEmployee[i].netSalary();
  //allEmployee[i].employeesTable();
}

 //task10

Employee.prototype.employeeCard = function() {
 

  if( this.level.toLowerCase() === 'senior'){ 


    const sect = document.getElementById("senior");
    const divEl = document.createElement('div');
    sect.appendChild(divEl);
    let image=document.createElement("img");
    image.src=this.image;
    divEl.appendChild(image);
    image.style.width="160px";
    const node = document.createTextNode (`Name: ${this.fullName} , ID : ${this.employeeId}  ,
    Department : ${this.department} , Level : ${this.level}  , ${this.salary} `);
    divEl.appendChild(node);

    divEl.style.margin= '10px';
    divEl.style.backgroundColor = '#F0F8FF';
    divEl.style.height ='250px';
    divEl.style.width ='200px';
    divEl.style.border ='5px solid #333';
    divEl.style.boxshadow = ' 0 4px 8px 0 rgba(0,0,0,0.2)';
    divEl.style.transition ='0.3s';
    

    } else if (this.level.toLowerCase() ==='mid-senior'){

    const sect = document.getElementById("midSenior");
    const divEl = document.createElement('div');
    sect.appendChild(divEl);
    let image=document.createElement("img");
    image.src=this.image;
    divEl.appendChild(image);
    image.style.width="160px";
    const node = document.createTextNode(` Name: ${this.fullName} , ID : ${this.employeeId}  ,
    Department : ${this.department} , Level : ${this.level} ,  ${this.salary}  `);
    divEl.appendChild(node);
    

    divEl.style.margin= '10px';
    divEl.style.backgroundColor = '#F0F8FF';
    divEl.style.height ='250px';
    divEl.style.width ='200px';
    divEl.style.border =' 3px solid #333';
    divEl.style.boxshadow = ' 0 4px 8px 0 rgba(0,0,0,0.2)';
    divEl.style.transition ='0.3s';
  

    } else if (this.level.toLowerCase() ==='junior'){

      const sect = document.getElementById("junior");
      const divEl = document.createElement('div');
      sect.appendChild(divEl);
      let image=document.createElement("img");
      image.src=this.image;
      divEl.appendChild(image);
      image.style.width="160px";
      const node = document.createTextNode(` Name: ${this.fullName} , ID : ${this.employeeId}  ,
      Department : ${this.department} , Level : ${this.level}  , ${this.salary}  `);
      divEl.appendChild(node);

      
      divEl.style.margin= '10px';
      divEl.style.backgroundColor = '#F0F8FF';
      divEl.style.height ='250px';
      divEl.style.width ='200px';
      divEl.style.border = '3px solid #333';
      divEl.style.boxshadow = ' 0 4px 8px 0 rgba(0,0,0,0.2)';
      divEl.style.transition ='0.3s';
    
    }
 
}

for(let i = 0 ; i < allEmployee.length ; i++ ){
  allEmployee[i].employeeCard();
 
}


