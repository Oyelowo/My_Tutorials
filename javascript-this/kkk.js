var student = {
    firstName: "mars",
    lastName: "jupiter",
    age: 344,
    fullName: function (food, drink) {
       return `${this.firstName} ${this.lastName} eats ${food} and drinks ${drink}`;
    }
}


var student2 = {
    firstName: "moon",
    lastName: "chan",
    age: 49,
}

var student3 = {
    firstName: "tes",
    lastName: "Mika",
    age: 29,
}


console.log(student.fullName())
console.log(student.fullName.call(student2, "Rice", "Beer"));
console.log(student.fullName.apply(student2, ["Rice", "Beer"]));


console.log(student.fullName.call(student3, "Rice", "Beer"));
console.log(student.fullName.apply(student3, ["Rice", "Beer"]));