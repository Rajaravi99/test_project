// function employee(id,name){
//     this.id=id;
//     this.name=name;
// }
// emp1=new employee(1,"Ravi");
// emp2=new employee(2,"Nandan");
// emp3=new employee(3,"Ray");
// function fun(){
//     document.write("write any thing");
//     for(i=0;i<3;i++){
//         if(i==0){
//             document.write(emp1.id+" "+emp1.name);
//         }
//         else if(i==1){
//             document.write(emp2.id+" "+emp2.name);
//         }
//         else{
//             document.write(emp3.id+" "+emp3.name);
//         }
//     }
// }
function emp(id,name,salary){  
    this.id=id;  
    this.name=name;  
    this.salary=salary;  
}  
e1=new emp(103,"Vimal",30000);
e2=new emp(102,"Ravi",56000);
e3=new emp(101,"Nandan",100000);
for(i=0;i<3;i++){
    if(i==0){
        document.write(e1.id+" "+e1.name+" "+e1.salary);
    }
    else if(i==1){
        document.write(e2.id+" "+e2.name+" "+e2.salary);
    }
    else{
        document.write(e3.id+" "+e3.name+" "+e3.salary);
    }
}  