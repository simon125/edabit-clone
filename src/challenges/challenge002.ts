import { Challenge } from "./types";

export const challenge002: Challenge = {
  id: "f23o2fj23",
  title: "Średnia arytmetyczna",
  shortDescription:
    "Napisz funkcję która policzy średnią arytmetyczną liczb przekazanych w parametrze za pomocą tablicy liczb",
  instructions: `
  
  Napisz funkcję która policzy średnią arytmetyczną liczb przekazanych w parametrze za pomocą tablicy liczb
  tzn. parametrem jest tablica liczb a funckja powinna obliczyć średnią arytemtyczną tych liczb
  żeby to zrobić należy dodać wszystkie liczby i podzielić przez ilość tych liczb - wynik 
  należy zwrócić

  Przykład użycia i działania funkcji:

  ~~~js
  function getAverage(numbers){
    // miejsce Twój kod
  }

  const średnia = getAverage([1,2,3,4,5]);

  console.log(średnia); // 3
  ~~~
  
  #### Hints
  - Do zrealizowania zadania będziesz musiał/a użyć pętli 
  - stwórz zmienną w której przechowasz sumę wszystkich liczb
  - zmienną z sumą wszystkich liczb podziel przez długość tablicy liczb
  
  
  
  `,
  tags: ["math", "numbers", "arrays"],
  level: "easy",
  initialSnippet: `function getAverage(numbers){
          console.log(numbers);
      }`,
  solution: `
      function getAverage(numbers) {
        return numbers.reduce((acc, a) => acc + a, 0) / numbers.length;
      }
      `,
  tests: [
    {
      input: "[12,33,21,1,5,3,76,43,66,34]",
      output: "29.4",
      outputType: "number",
    },
    {
      input: "[5,10,15]",
      output: "10",
      outputType: "number",
    },
  ],
};
