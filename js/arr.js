const person = {
  name: "zz",
  age: 23,
  info: {
    height: 180,
    weight: 172,
  },
};

const b = person;

console.log(b === person);
console.log(b.info === person.info);
