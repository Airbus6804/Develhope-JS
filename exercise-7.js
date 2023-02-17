class Person {
  #firsName;
  #lastName;
  #age;

  constructor(firstName, lastName, age) {
    this.#firsName = firstName;
    this.#lastName = lastName;
    this.#age = age;
  }

  get firstName() {
    return this.#firsName;
  }

  set firstName(firstName) {
    this.#firsName = firstName;
    return this;
  }

  get lastName() {
    return this.#lastName;
  }

  set lastName(lastName) {
    this.#lastName = lastName;
    return this;
  }

  get age() {
    return this.#age;
  }

  set age(age) {
    this.#age = age;
    return this;
  }

  get fullName() {
    return `This person is name ${this.#firsName} ${this.#lastName}`
  }

}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);