//data
let students =[
{name: "idris", age : 18},
{name:" fawaz", age : 15},
{name: "amal", age: 14},

];
//functions
function countminor(a){
return a.filter (s=> s.age < 18).length;

}
function countadults(a){
return a.filter (s=> s.age >= 18).length;
}
function getadults(student){
  return student.filter(s=> s.age >=18);}
function addstudent(a,student){
    a.push(student);
    return a;
}
function findoldest(a){
let oldest = a[0];
for(let i =0;i<a.length; i++){
    if(a[i].age>oldest.age){
        oldest=a[i];
    }
    
}
return oldest;
}
function findyoungest(a){
    let youngest = a[0];
    for(let i =0;i<a.length;i++){
        if(a[i].age < youngest.age){
            youngest =a[i];
        }
    }
return youngest;
}
console.log(countadults(students));
console.log(countminor(students));
console.log(getadults(students));
console.log(addstudent(students,{name :"david",age : 19}))
console.log(findoldest(students));
console.log(findyoungest(students));
