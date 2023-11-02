import { Challenge } from "./types";

export const challenge004: Challenge = {
  id: "r892jr93k0",
  title: "Filtrowanie tablicy",
  shortDescription:
    "Stwórz funkcje która będzie filtrowała przekazaną w parametrze tablice - zwracana tablica powinna zostać pozbawiona dwójek (2)",
  instructions: `
  
  Stwórz funkcje która będzie filtrowała przekazaną w parametrze tablice - zwracana tablica powinna zostać pozbawiona dwójek (2)
  
  Żeby wykonać zadanie musisz sprawdzić każdy element w tablicy czy nie jest dwójką jeżeli nie możesz ten element dodać do nowej tablicy (trzeba ja utworzyć)
  następnie nowostworzoną tablicę spopulowaną elementami nie będącymi liczbą dwa należy zwrócić

  Przykład użycia i działania funkcji:

  ~~~js
  function removeTwos(numbers){
    // miejsce Twój kod
  }

  const result = removeTwos([1,2,3,2,1]);

  console.log(result); // [1,3,1]  tablica bez dwójek
  ~~~
  
  `,
  tags: ["math", "numbers", "arrays"],
  level: "easy",
  initialSnippet: `function removeTwos(numbers){
          console.log(numbers);
      }`,
  solution: `
  function removeTwos(numbers) {
    const arr = [];
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] !== 2) {
        arr.push(numbers[i]);
      }
    }
  
    return arr;
  }
      `,
  tests: [
    {
      input: "[32,2,1,5,6,2,3,4,6,2]",
      output: "[32,1,5,6,3,4,6]",
      outputType: "complex",
    },
    {
      input: "[2,1,3]",
      output: "[1,3]",
      outputType: "complex",
    },
  ],
};
