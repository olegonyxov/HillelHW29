document.getElementById('carForm').addEventListener('submit', function(event) {
    event.preventDefault();
    createCar();
});

function createCar() {
    const model = document.getElementById('model').value;
    const color = document.getElementById('color').value;
    const ownerName = document.getElementById('ownerName').value;
    const ownerAge = parseInt(document.getElementById('ownerAge').value);

    const car = new Car(model, color, ownerName, ownerAge);
    car.showInfo();
    car.getOwner();
}

function Car(model, color, ownerName, ownerAge) {
    this.model = model;
    this.color = color;
    this.owner = new Person(ownerName, ownerAge);

    this.showInfo = function() {
        document.write(`Model: ${this.model}, Color: ${this.color}<br>`);
    };

    this.getOwner = function() {
        document.write(`Owner: ${this.owner.name}, ${this.owner.age} years old`);
    };
}

function Person(name, age) {
    this.name = name;
    this.age = age;
}