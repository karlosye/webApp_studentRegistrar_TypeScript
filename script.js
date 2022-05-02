"use strict";
// Define a class for student
class Student {
    constructor(name, gender, type, age) {
        this.name = name;
        this.gender = gender;
        this.type = type;
        this.age = age;
        this.ID = Math.floor((Math.random() * 100) + 1);
    }
}
class renderTemplate {
    static format(studentObject) {
        return (`This student has a name ${studentObject.name} with age ${studentObject.age}. His/her ID is ${studentObject.ID}.`);
    }
}
const form = document.querySelector('#form1');
let studentName = document.querySelector("#name");
let studentGender = document.querySelector("#gender");
let studentType = document.querySelector("#type");
let studentAge = document.querySelector("#age");
let outputlist = document.querySelector(".output");
let submitButton = document.querySelector("#submitButton");
submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(studentAge.valueAsNumber);
    let newStudent = new Student(studentName.value, studentGender.value, studentType.value, studentAge.valueAsNumber);
    let li = document.createElement("li");
    li.innerText = renderTemplate.format(newStudent);
    outputlist.append(li);
});
