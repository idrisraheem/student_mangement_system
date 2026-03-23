//data
let students =[
{name: "idris", age : 18},
{name:" fawaz", age : 15},
{name: "amal", age: 14},

];
//functions
function countMinor(students){

return students.filter (s=> s.age < 18).length;

}
function countAdults(students){
return students.filter (s=> s.age >= 18).length;
}
function getAdults(students){
  return students.filter(s=> s.age >=18);}

  function getMinors(students){
    return students.filter(s => s.age < 18);
    }
  
function addStudent(a,student){
    a.push(student);
    return a;
}
function findOldest(students){
let oldest = students[0];
for(let i =0;i<students.length; i++){
    if(students[i].age>oldest.age){
        oldest=students[i];
    }
    
}
return oldest;
}
function findYoungest(students){
    let youngest = students[0];
    for(let i =0;i<students.length;i++){
        if(students[i].age < youngest.age){
            youngest =students[i];
        }
    }
return youngest;
}
console.log(countAdults(students));
console.log(countMinor(students));
console.log(getAdults(students));
console.log(addStudent(students,{name :"david",age : 19}))
console.log(findOldest(students));
console.log(findYoungest(students));
console.log(getMinors(students));

console.log(findyoungest(students));
