// OBJETO REPRESENTA UMA COISA/OBJETO/PESSOA/REGISTRO
// POSSUI CARACTERISTICAS --> PROPRIEDADES
// POSSUI COMPORTAMENTOS --> MÉTODOS

const obj1 = {};
// const obj2 = new Object();


function getFullName () {
	console.log(this);
	return `${this.firstName} ${this.lastName}`
}

console.log(getFullName());

const firstName = 'Diego';
const person1 = {
	firstName,
	/* firstName: firstName, */
	lastName: 'Santos',
	age: 28
};

const person2 = {
	firstName: 'Aline',
	lastName: 'Gomes',
	age: 25,
	fullName: getFullName
};

const car = {
	name: 'Generic Car',
	color: 'white',
	year: 2017,
	producer: {
		name: 'Generic Factory',
		country: 'Generic Country'
	},
	portas: 4,
	/* start: function () {}, */
	/* start: () => {}, */
	/* start: (param) => {}, */
	start() {
		console.log(this);
		// executa a ação
	},
	accelerate() {
		console.log(this);
		// executa a ação
	},
	brake() {
		console.log(this);
		// executa a ação
	}
};

// ADICIONA PROPRIEDADES E MÉTODOS DINAMICAMENTE
// person1['fullName'] = getFullName;
person1.fullName = getFullName;

// DELETA PROPRIEDADES
delete person1.firstName;

person1.fullName();
person2.fullName();
car.start();
car.accelerate();
car.brake();

// console.log('name', car['name']);

// FOR IN
for (let key in car) {
	console.log(key, car[key]);
}

// OBJECT
Object.freeze(car);

delete car.name;
delete car.producer;
delete car.producer.country;

console.log(car);

const keys = Object.keys(car);
console.log(keys)

console.log(Object.keys(car).map(key => car[key]));
console.log(Object.values(car));

const newCar = Object.assign({}, car);
newCar.name = "Volvo";
console.log(newCar, typeof newCar);

newCar.start = newCar.start.toString();
const json = JSON.stringify(newCar);
console.log(json, typeof json);

const obj = JSON.parse(json);
console.log(obj);

const objString = new String('blabla');
const objNumber = new Number('10.17');
const objBoolean = new Boolean('true');

console.log(objString, objString.valueOf(), objNumber, objNumber.valueOf(), objBoolean, objBoolean.valueOf());

// PROGRAMAÇÃO ORIENTADA A OBJETOS

// HERANÇA
// prototype
// FIAT -> CAR

const fiat = {
	name: 'Fiat',
	color: 'white',
	year: 2017,
	producer: {
		name: 'Fiat',
		country: 'Italy'
	},
};

// HERANÇA PROTOTÍPICA
fiat.__proto__ = car;

fiat.accelerate();


// console.log(car);
// console.log(fiat);

// CLASSES em JS
