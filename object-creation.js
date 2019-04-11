/*
 *
 * Object is fundamental datatype in javascript.
 * It is the only complex datatype.
 * Rest datatype are primitive (number, boolean, string, symbol, null, undefined).
 * Object are mutable (can be changed).
 * Object is unordered list of primitive datatype,
 * that is stored as a series of name-value pair.
 * Everything in js is object.
 *
 */

function print(str) {
  console.log(str, " - ", this);
}

/*
 * Object Literal
 * Object literal is used when
 */
const John = {
  name: "John",
  print
};
John.print("John"); // => John  -  { name: 'John', print: [Function: print] }

/*
 * Object Constructor
 */

const Jane = new Object();
Jane.name = "Jane";
Jane.print = print;
Jane.print("Jane"); // => Jane  -  { name: 'Jane', print: [Function: print] }

/*
 * es6 classes
 */

class Person {
  constructor(name) {
    this.name = name;
  }
  print(str) {
    console.log(str, " - ", this);
  }
}

const Tasha = new Person("Tasha");
Tasha.print("Tasha"); // => Tasha  -  Person { name: 'Tasha' }

/*
 * constructor function pattern
 */

function Animal(name) {
  this.name = name;
  this.print = print;
}

const dog = new Animal("Fluffy");
dog.print("Dog"); // => Dog  -  Animal { name: 'Fluffy', print: [Function: print] }

/*
 * prototype pattern
 */

function Movie(name) {
  this.name = name;
}

Movie.prototype.print = print;

const matrix = new Movie('Matrix');
matrix.print('Matrix'); // => Matrix  -  Movie { name: 'Matrix' }

/*
 * object.create()
 */

const JaneDoe = Object.create(Jane); // using Jane as a prototype of JaneDoe
JaneDoe.lastname = "Doe";
// print function is inhertited from Jane
JaneDoe.print("JaneDoe"); // => JaneDoe  -  { lastname: 'Doe' }
