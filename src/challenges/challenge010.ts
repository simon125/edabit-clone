import { Challenge } from "./types";

export const challenge010: Challenge = {
  id: "7h898j9j9u6gt",
  title: "Licznik typów",
  instructions: `
  Policz ile elementów w tablicy przekazanej w parametrze jest elementem typu string a ile jest numberem - rezultat zwróć w postaci tablicy gdzie pierwszym elementem jest ilość stringów a drugim elementem jest ilosc numberów
  
  Przykład użycia i działania funkcji:

  ~~~js
  function countStringsAndNumbers(arr){
    // miejsce Twój kod
  }

  const result = countStringsAndNumbers([2,true,'trelemorele',2,'test',55]);

  console.log(result); // [2,3] 
  // pierwszy element 2 bo są tylko dwa stringi: 'trelemorele' oraz 'test'
  // drugi element 3 bo są trzy liczby: 2, 2 oraz 55
  ~~~

  albo

  ~~~js
  function countStringsAndNumbers(arr){
    // miejsce Twój kod
  }

  const result = countStringsAndNumbers([2,55]);

  console.log(result); // [0,2] 
  // pierwszy element 0 bo nie ma żadnych stringów
  // drugi element 2 bo są dwie liczby: 2 oraz 55
  ~~~
  `,
  shortDescription:
    "Policz ile elementów w tablicy przekazanej w parametrze jest elementem typu string a ile jest numberem - rezultat zwróć w postaci tablicy gdzie pierwszym elementem jest ilość stringów a drugim elementem jest ilosc numberów",
  tags: ["arrays", "couting"],
  level: "medium",
  initialSnippet: `function countStringsAndNumbers(arr){
          console.log(arr);
      }`,
  solution: `
  function countStringsAndNumbers(arr) {
    const result = [0, 0];
  
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "string") {
        result[0] += 1;
      }
  
      if (typeof arr[i] === "number") {
        result[1] += 1;
      }
    }
  
    return result;
  }
  
      `,
  tests: [
    {
      input: '["2","test",[],"test",5,"qweqwe",true,2]',
      // [strings, numbers]
      output: "[4,2]",
      outputType: "complex",
    },
    {
      input: '["2","test",[],"test","5","qweqwe","true","2"]',
      // [strings, numbers]
      output: "[7,0]",
      outputType: "complex",
    },
  ],
};
