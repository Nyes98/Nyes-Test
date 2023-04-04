class GenericMath<T> {
  pi: T;
  sum: (x: T, y: T) => T;
}

let math = new GenericMath<number>();

function getProperty<T, O extends keyof T>(obj: T, key: O) {
  return obj[key];
}
let obj = { a: 1, b: 2, c: 3 };

getProperty(obj, "a");
// okay
getProperty(obj, "z");
// error: "z"는 "a", "b", "c" 속성에 해당하지 않습니다.
