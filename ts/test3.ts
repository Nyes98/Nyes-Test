function pickObjectKeys<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
) {
  let result = {} as Pick<T, K>;
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result;
}

const language = {
  name: "TypeScript",
  age: 8,
  extensions: ["ts", "tsx"],
};

const ageAndExtensions = pickObjectKeys(language, ["age", "extensions"]);

console.log(ageAndExtensions);
