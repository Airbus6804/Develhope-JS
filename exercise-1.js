const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".

person2.firstName = "Simon"

//When person2 changes, person1 changes too because of the = operator that will assign to person2 the reference of person1, 
//This means that person1 and person2 are pointing to the same object and not its values

console.log(person1);
console.log(person2);
