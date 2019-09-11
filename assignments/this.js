/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window - This will grab onto the object its inside which is the window
 * 2. Implicit - Points to the object it's inside of (Loosly Defined)
 * 3. New - An implicit binding created by a constuctor
 * 4. Explicit - Defining what is bound using Apply,Call, or Bind (Explicitly Defined)
 *
 * write out a code example of each explanation above
 */

// Principle 1
// code example for Window Binding
const myName = function() {
  console.log(this);
  return myName;
};
myName("leroy Jankins");

// Principle 2
// code example for Implicit Binding

const thisObject = {
  last: "jankins",
  battleCry: function(frist) {
    console.log(`Lets Go! LEEEEROYYYYY ${this.name}`);
    console.log(this);
  }
};

thisObject.battleCry();

// Principle 3
// code example for New Binding

function OfficeCast(attr) {
  this.name = attr.name;
  this.position = attr.position;
  this.introduction = function() {
    console.log(`hello my name is ${this.name} and I am a ${this.position}`);
  };
}

const ryan = new OfficeCast({
  name: "Ryan",
  position: "Sales Perosn"
});

const kevin = new OfficeCast({
  name: "Kevin",
  position: "Accountant"
});

ryan.introduction();
kevin.introduction();

// Principle 4

// code example for Explicit Binding

const jim = new OfficeCast({
  name: "jim",
  position: "Sales Perosn"
});

function intro() {
  return `hello my name is ${this.name} and I am a ${this.position}`;
}

console.log(intro.call(jim));
