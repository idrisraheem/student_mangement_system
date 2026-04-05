//data
const students=[
{name :"Idris Abdulraheem", age :22},
{name :"Fawaz Abdulraheem", age :15},
{name :"Amal Abdulraheem", age :18}
];
const student = document.getElementById("student");
const adult = document.getElementById("adt");
const youngest = document.getElementById("y");
const oldest = document.getElementById("o");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const addS =document.getElementById("add");
const output = document.getElementById("output");
function young(student){
    let youngest = student[0];
    for (let i =1; i<student.length; i++){
        if(student[i].age<youngest.age){
            youngest = student[i];
        }
    }
    return youngest;
}
function old(student){
    let old = student[0];
    for (let i=0; i<student.length; i++){
       if(student[i].age > old.age)
       {
        old = student[i];
       }
    }
    return old;
}
student.addEventListener("click", function(){
    output.textContent= students.map(s=> s.name +" - " + s.age).join(", ")
});
adult.addEventListener("click",function(){
    output.textContent = students
    .filter(s => s.age >= 18)
    .map(s=> s.name + " - " + s.age)
    .join(" , ");
})
youngest.addEventListener("click",function(){
    let y = young(students);
    output.textContent = y.name + " - "+y.age;
});
oldest.addEventListener("click", function(){

    let o = old(students);
    output.textContent = o.name + " - " + o.age;
})
addS.addEventListener("click", function(){
    const name = nameInput.value;
    const age = Number(ageInput.value);
    const student= {
        name : name,
        age : age
    }
    students.push(student);
    output.textContent = students.map(s=> s.name+ " - " + s.age)
    .join(", ");
    nameInput.value =" ";
    ageInput.value = " ";
})
