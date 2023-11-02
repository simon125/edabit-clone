import { Challenge } from "./types";

export const challenge007: Challenge = {
  id: "e2h7h89hr43",
  title: "Sortowanie liczb",
  instructions: `
  Stwórz funkcje która posortuje oraz zwróci tablice liczb (numbers)
  Sortowanie liczb powinno być od najmniejszej do największej

  przykładowo z takiej tablicy:

  ~~~js
  [2,5,1,2]
  ~~~
  trzeba zrobić taką:
  ~~~js
  [1,2,2,5]
  ~~~

  Przykład użycia i działania funkcji:

  ~~~js
  function sortNumbers(numbers){
    // miejsce Twój kod
  }

  const result = sortNumbers([2,1,4,2]);

  console.log(result); // [1,2,2,4]
  ~~~
  `,
  shortDescription:
    "Stwórz funkcje która posortuje oraz zwróci tablice liczb (numbers)",
  tags: ["arrays", "sorting"],
  level: "medium",
  initialSnippet: `function sortNumbers(numbers){
          console.log(numbers);
      }`,
  solution: `
      function sortNumbers(numbers) {
        return numbers.sort();
      }
      `,
  tests: [
    {
      input: "[2,5,1,6,3]",
      output: "[1,2,3,5,6]",
      outputType: "complex",
    },
    {
      input: "[3,2,1]",
      output: "[1,2,3]",
      outputType: "complex",
    },
  ],
};
