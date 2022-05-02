
// Define a class for student
class Student {

    public ID: number;

    constructor(public name: string, public gender: string, public type: string, public age: number) {
        this.ID = Math.floor((Math.random() * 100) + 1);
    }
}

class renderTemplate {

    public static format(studentObject: Student): string {
        return (`This student has a name ${studentObject.name} with age ${studentObject.age}. His/her ID is ${studentObject.ID}.`)
    }

}

const form = document.querySelector('#form1') as HTMLFormElement;

let studentName = document.querySelector("#name") as HTMLInputElement;
let studentGender = document.querySelector("#gender") as HTMLSelectElement;
let studentType = document.querySelector("#type") as HTMLSelectElement;
let studentAge = document.querySelector("#age") as HTMLInputElement;
let outputlist = document.querySelector(".output") as HTMLUListElement;

let submitButton = document.querySelector("#submitButton")!;

submitButton.addEventListener("click", function (e) {
    e.preventDefault();

    console.log(studentAge.valueAsNumber);
    let newStudent = new Student(studentName.value, studentGender.value, studentType.value, studentAge.valueAsNumber);

    let li = document.createElement("li");
    li.innerText = renderTemplate.format(newStudent);

    outputlist.append(li);
})
