import { Challenge } from "./types";

export const challenge012: Challenge = {
  id: "f93j84fsejifojwe",
  title: "Usuń zduplikowane słowa lub liczby z tablicy",
  instructions: `
  Napisz funkcje która usunie zduplikowane słowa/liczby w tablicy przekazanej w parametrze a następnie zwróci tablice bez duplikatów
  
  
  Przykład użycia i działania funkcji:

  ~~~js
  function removeDuplicates(arr){
    // miejsce Twój kod
  }

  const result = removeDuplicates(["test", "test", "trelemorele", "trelemorele123", "lorem ipsum", "trelemorele"]);

  console.log(result); // ["test",  "trelemorele", "trelemorele123", "lorem ipsum" ]
  ~~~
  `,
  shortDescription:
    "Napisz funkcje która usunie zduplikowane słowa/liczby w tablicy przekazanej w parametrze a następnie zwróci tablice bez duplikatów",
  tags: ["strings", "arrays"],
  level: "medium",
  initialSnippet: `function removeDuplicates(arr){
          console.log(arr);
      }`,
  solution: `
  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
      `,
  tests: [
    {
      input:
        '["test", "test", "trelemorele", "trelemorele123", "lorem ipsum", "trelemorele"]',
      output: '["test",  "trelemorele", "trelemorele123", "lorem ipsum" ]',
      outputType: "complex",
    },
    {
      input: '["test", "test"]',
      output: '["test"]',
      outputType: "complex",
    },
    {
      input: "[1,23,13,1,2,5,33,13,23,2,1]",
      output: "[1,23,13,2,5,33]",
      outputType: "complex",
    },
  ],
};
