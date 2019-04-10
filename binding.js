/*
 * In JavaScript, binding is always explicit
 */

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function(otherPerson) {
  console.log(`Hi ${otherPerson.name}, my name is ${this.name}`);
};

var elodie = new Person("Elodie", "Jaubert", 27);
var christophe = new Person("Christophe", "Porteneuve", 30);

// binding of "this" is christophe
christophe.greet(elodie); // => Hi Elodie, my name is Christophe

/*
 * Below we create a reference to the greet function , an alias
 * assign method as value
 */
var chrisGreet = christophe.greet; // greet will lost it's binding i.e christophe

{
  /*
   * binding of "this" is global/window
   * global in case of nodejs and
   * window in case of browser and
   * name is undefined by default for global and empty for window
   */
  chrisGreet(elodie); // => Hi Elodie, my name is undefined
  global.name = "John";
  // window.name = 'John';
  chrisGreet(elodie); // => Hi Elodie, my name is John
  /*
   * binding of "this" is christophe
   * apply and call accept first arg reference for "this"
   * call function immediately
   */
  chrisGreet.apply(christophe, [elodie]); // => Hi Elodie, my name is Christophe
  chrisGreet.call(christophe, elodie); // => Hi Elodie, my name is Christophe
}

{
  /*
   * binding of "this" is christophe
   * bind accept first arg reference for "this"
   * create a new function
   * using bind , function currying can be achieved
   */
  chrisGreet = christophe.greet.bind(christophe);
  chrisGreet(elodie); // => Hi Elodie, my name is Christophe
}

/*
 * lexical closure
 */

(function lexicalClosure() {
  var Jane = new Person("Jane", "Doe", 30);
  var Kurt = new Person("Kurt", "Weller", 40);
  // binding of "this" is global
  this.greet = function() {
    Jane.greet(Kurt); // => Hi Kurt, my name is Jane
  };
  setTimeout(function() {
    try {
      /*
      * binding of "this" is "Timeout" object 
      * "Timeout" not contain "greet" function
      */
      this.greet(); // => TypeError: this.greet is not a function
    } catch (e) {
      console.log(e.message); // => this.greet is not a function
    }
  });

  setTimeout(
    // changing "this" binding from "Timeout" to "global"
    function() {
      this.greet();
    }.bind(this) // binding "this" to current "this" i.e "global"
  );

  /*
   * creating "self" variable to hold the reference of the current "this"
   * no explicit binding require using bind/apply/call function
   * It is able to access greet function because the nested function can access the
   * variable of the parent function i.e lexicalClouser
   */
  var self = this;
  setTimeout(function() {
    self.greet();
  });

  /*
  * es6 added arrow function
  * which bind "this" to the current "this"
  * no need for "bind" function
  * no need to assign "this" to any variable
  * Transpiler(such as Babel) underhood turn the code to local variable syntax one.
  */ 
  setTimeout(() => {
    this.greet();
  });
})();
