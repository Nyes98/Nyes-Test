const person = {
  name: "nyes",
  age: 26,
  info: {
    height: 171,
    weight: 60,
  },
};

const b = JSON.parse(JSON.stringify(person));

b.info.height = 186;

console.log(b === person); // false

console.log(b.info.height, person.info.height); // 186 171
console.log(b.info.height === person.info.height); // false
