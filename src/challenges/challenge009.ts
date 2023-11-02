import { Challenge } from "./types";

export const challenge009: Challenge = {
  id: "frmo54pm3233fdf",
  title: "Licznik znaków",
  instructions: `
  Policz ile razy wystąpił znak w tablicy z pierwszego parametru określony przez drugi parametr.
  
  Funkcja przyjmuje dwa parametry w pierwszym spodziewamy się tablicy z różnymi elementami
  natomiast drugim parametrem jest wartość która określa znak którego liczebnośc chcemy policzyć


  Przykład użycia i działania funkcji:

  ~~~js
  function countCharOccurences(arr, char){
    // miejsce Twój kod
  }

  const result = countCharOccurences([2,true,'trelemorele',2,'test'], 'test');

  console.log(result); 
  // result = 1  
  // bo słów 'test' (słowo 'test' jest określone w drugim parametrze) w tablicy arr jest jedno
  ~~~
  albo
  ~~~js
  function countCharOccurences(arr, char){
    // miejsce Twój kod
  }

  const result = countCharOccurences([2,2,2,1,2,3,4,5], 2);

  console.log(result); 
  // result = 4  
  // bo liczb 2 (liczba 2 jest określone w drugim parametrze) w tablicy arr jest 4
  ~~~

  `,
  shortDescription:
    "Policz ilość znaków przekazanych jako drugi parametr w tablicy przekazanej jako pierwszy parametr",
  tags: ["arrays", "couting"],
  level: "medium",
  initialSnippet: `function countCharOccurences(arr, char){
          console.log(arr, char);
      }`,
  solution: `
  function countCharOccurences(arr, char) {
    let counter = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === char) {
        counter++;
      }
    }
  
    return counter;
  }
      `,
  tests: [
    {
      input: '["2","test",[1],"test","qweqwe",true], "test"',
      output: "2",
      outputType: "number",
    },
    {
      input: "[3,2,1,7,4,2,5,5,9], 5",
      output: "2",
      outputType: "number",
    },
    {
      input: "[true,2,true,7,true,2,5,5,9], true",
      output: "3",
      outputType: "number",
    },
  ],
};
