// dzień 2 zad.1

// const country = {
//     capital: "Warsaw",
//     population: 37.8,
//     president: 'Andrew D.',
//     ministers: ['Sasin', 'Niedzielski']
// }
//
// console.log(country);


// zadanie 2

// const timeMachine = {
//     shape: 'circle',
//     model: 'Delorean',
//     run(date, place){
//         return `Jesteś w ${place}, data: ${date}`
//     }
// }
//
// console.log(
//     timeMachine.shape,
//     timeMachine.model,
//     timeMachine.run( '29.02.2028', 'Bieszczady')
// )

// zadanie 3




// zadanie 4

// const person = {
//     name: "Józef",
//     age: 68,
//     sayHello(){
//         console.log("Hello")
//     }
// }
//
// console.log(
//     person.name,
//     person.age,
// )
// person.sayHello();


// zadanie 5

// const recipe = {
//     title: "Jajecznica",
//     servings: 2,
// }
// recipe.ingredients = ["jajka", "masło", "cebula", "sól"]
//
// console.log(
//     recipe.title,
//     recipe.servings,
//     recipe.ingredients
// )


// THIS
//
// const user = {
//     name: 'Janusz',
//     age: 44,
//     getName() {
//         return user.name;
//     }
// }
//
// console.log(user.getName())


// Dzień 2, This, zad.1

// const car = {
//     brand: "Subaru",
//     color: "gold",
//     numberOfKilometers: 0,
//     printCarInfo(){
//         console.log(`${this.color} ${this.brand} ${this.numberOfKilometers}km`);
//     },
//     drive(km) {
//         this.numberOfKilometers += km;
//     }
// }
//
// car.printCarInfo();
// car.drive(240);
// car.printCarInfo();


// zadanie 3 this
//
// const stairs = {
//     step: 0,
//     up() {
//         this.step++;
//     },
//     down() {
//         this.step--;
//     },
//     printStep() {
//         console.log(this.step);
//     }
// }
//
// stairs.up()
// stairs.up()
// stairs.down()
// stairs.prinsStep()


// zadanie

// function User() {
//     this.name = "Janusz";
// }
// const janusz = new User("Janusz");
// console.log(janusz)


// ConstructionFunction Zadanie 1
//
// function Basket() {
//     this.products = [];
//     this.sum = 0;
// }
//
// Basket.prototype.addProduct = function(name, price){
//     this.products.push({
//         name: name, price: price  //można shorthandem, jeśli nazwa kategorii jest taka sama
//     });
//     this.sum += price;
// }
//
// Basket.prototype.showBasket = function(){
//     const formattedProducts = this.products.map((product) => `${product.name}: ${product.price}zł`)
//     console.log("Koszyk:");
//     console.log(formattedProducts.join(', '));
//     console.log(`Suma: ${this.sum}zł`);
//
// }
//
// const aliceBasket = new Basket();
// aliceBasket.addProduct("pomidor",10);
// aliceBasket.addProduct("arbuz",40);
// aliceBasket.showBasket();
//
// const bruceBasket = new Basket();
// bruceBasket.addProduct("rice", 10);
// bruceBasket.addProduct("grzyby mun",50);
// bruceBasket.addProduct("tofu",20);
// bruceBasket.showBasket();

// zadanie 2

// const Robot = function (name) {
//     this.name = name;
//     this.isFunctional = false;
// };
//
// Robot.prototype.sayHi = function (toWho) {
//     if (this.isFunctional) {
//         console.log("Robot " + this.name + " greets " + toWho);
//     } else {
//         console.log("Robot " + this.name + " is broken");
//     }
// };
//
// Robot.prototype.changeName = function (newName) {
//     console.log("Robot " + this.name + " changes name to " + newName);
//     this.name = newName;
// };
//
// Robot.prototype.fixIt = function () {
//     this.isFunctional = true;
//     console.log("Robot " + this.name + " was fixed");
// };
//
// const sophia = new Robot("Sophia");
// sophia.sayHi("Januszowi");
// sophia.changeName("Sophia2");
// sophia.fixIt();
// sophia.sayHi("Januszowi")


// zadanie 3
//
// function Calculator (){
//     this.operationsHistory = [];
//
// }
// Calculator.prototype.add = function (num1, num2){
//     const result = num1 + num2;
//     this.operationsHistory.push(`added ${num1} to ${num2} got ${result}`)
//     return result;
//
// }
// Calculator.prototype.subtract = function (num1, num2){
//     const result = num1 - num2;
//     this.operationsHistory.push(`subtracted ${num1} from ${num2} got ${result}`)
//     return result;
//
// }
// Calculator.prototype.divide = function (num1, num2){
//     const result = num1 / num2;
//     this.operationsHistory.push(`divided ${num1} by ${num2} got ${result}`)
//     return result;
//
// }
// Calculator.prototype.multiply = function (num1, num2){
//     const result = num1 * num2;
//     this.operationsHistory.push(`multiplied ${num1} with ${num2} got ${result}`)
//     return result;
//
// }
// Calculator.prototype.printOperations = function () {
//     const formattedData = this.operationsHistory
//         .map((operation, index) => `${index + 1}. ${operation}`);
//     console.log(formattedData.join('\n'));
//
// }
// Calculator.prototype.clearOperations = function () {
//     this.operationsHistory = [];
//
// }
//
// const casio = new Calculator();
// casio.add(1,2);
// casio.add(0.1, 0.2);
// casio.subtract(3, 2);
// casio.divide(0.1, 0.2);
// casio.multiply(0.1, 0.2);


// D.O.M


