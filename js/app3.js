
// cars = [];

// function Car(cModel, cColor,owner) {
//     this.model = cModel;
//     this.color = cColor;
//     let _owner = owner;
//     this.setOwner = function() {
//         _owner = new Person();
//     };
//     this.getOwner = function() {
//         if (_owner) {
//             document.write(` Owner : ${_owner.name}  ${_owner.age} years old`)
//         } else {
//             return " this car has no owner "
//         }
//     }
//     this.showInfo = function() {
//         document.write("Model: " + this.model + " Color: " + this.color);
//     };
// }

// function Person() {
//     let check = false;
//     while (check === false) {
//         let pName = prompt("Add person name");
//         let pAge = parseInt(prompt("Add person age")); 

//         if (pAge >= 18 && pName.match(/^[а-яА-ЯёЁa-zA-Z]+$/) && pName.length > 0) {
//             check = true;
//             this.name = pName;
//             this.age = pAge;
//         } else {
//             alert("Name or Age input is not correct");
//         }
//     }
// }

// let car1 = new Car("Toyota", "green");
// car1.showInfo()
// car1.setOwner();
// car1.getOwner();
