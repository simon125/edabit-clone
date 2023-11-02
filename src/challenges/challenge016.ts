import { Challenge } from "./types";

export const challenge016: Challenge = {
  id: "cbwdyicnqw2s",
  title: "Sumaryczna długość wszystkich słów w tablicy",
  instructions: `
  Stwórz funkcje która zwróci długość wszystkich słów w tablicy

  tzn jeżeli przekazana tablica składa się z dwóch słów 
  
  np. "kot" i "pies" to suma długości tych słów to 3 (kot) + 4 (pies) = 7

  Przykład użycia i działania funkcji:

  ~~~js
  function howLongAreAllWords(words){
    // miejsce Twój kod
  }

  const givenWords = ["test", "trelemorele"];

  const length = howLongAreAllWords(givenWords);

  console.log(length); // 15
  ~~~
  

  `,
  shortDescription:
    "Stwórz funkcje która zwróci długość wszystkich słów w tablicy",
  tags: ["strings", "arrays"],
  level: "easy",
  initialSnippet: `function howLongAreAllWords(words){
          console.log(words);
      }`,
  solution: `
  function howLongAreAllWords(words) {
    let suma = 0;
  
    for (let i = 0; i < words.length; i++) {
      suma = suma + words[i].length;
    }
  
    return suma;
  }
  
      `,
  tests: [
    {
      input: '["test", "test", "te"]',
      output: "10",
      outputType: "number",
    },
    {
      input: '["test1", "test1", "te"]',
      output: "12",
      outputType: "number",
    },
  ],
};
