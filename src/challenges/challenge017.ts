import { Challenge } from "./types";

export const challenge017: Challenge = {
  id: "f238h98jew90ksd",
  title: "Wielkie porządki",
  instructions: `
  Stwórz funkcje która zwróci 'uporządkowaną' tablice na podstawie tablicy z parametru. Niech w nowej uporządkowanej tablicy pierwszymi elementami będę elementy typu string, następnie number a ostatnie booleany

  czyli z takiej tablicy:

  ~~~js
  ["test", 1, true, true, 1, "test", true, "test", 1]
  ~~~
  trzeba zrobić taką:
  ~~~js
  ["test", "test", "test", 1, 1, 1, true, true, true]
  ~~~

  Przykład użycia i działania funkcji:

  ~~~js
  function declutter(arr){
    // miejsce Twój kod
  }

  const result = declutter(["test", 1, true, true, 1, "test", true, "test", 1]);

  console.log(result); // ["test", "test", "test", 1, 1, 1, true, true, true]
  ~~~

  Żeby połączyć dwie tablice możesz skorzystać z poniższego kodu:

 
  ~~~js
  const array1 = ['a', 'b', 'c'];
  const array2 = ['d', 'e', 'f'];
  const array3 = array1.concat(array2);

  console.log(array3);
  // Expected output: Array ["a", "b", "c", "d", "e", "f"]
  ~~~

  `,
  shortDescription:
    "Stwórz funkcje która zwróci 'uporządkowaną' tablice na podstawie tablicy z parametru. Niech w nowej tablicy pierwszymi elementami będę elementy typu string, następnie number a ostatnie booleany",
  tags: ["types", "arrays"],
  level: "easy",
  initialSnippet: `function declutter(arr){
          console.log(arr);
      }`,
  solution: `
  function declutter(arr) {
    let strings = [];
    let numbers = [];
    let booleans = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "string") {
        strings.push(arr[i]);
      } else if (typeof arr[i] === "number") {
        numbers.push(arr[i]);
      } else if (typeof arr[i] === "boolean") {
        booleans.push(arr[i]);
      }
    }
  
    return [...strings, ...numbers, ...booleans];
  }
  
      
      `,
  tests: [
    {
      input: '[true, 1, "test", 1, 1, true, 1, true, "test","test"]',
      output: '["test", "test", "test", 1, 1, 1, 1, true, true, true]',
      outputType: "complex",
    },
  ],
};
