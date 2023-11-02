import { Challenge } from "./types";

export const challenge001: Challenge = {
  id: "d28oj23jop32pk9",
  title: "Dodaj dwie liczby",
  instructions: `

  ### Add Two Numbers

  Stwórz funckje **addTwoNumbers** która doda dwie liczby przekazane w parametrze i zwróci
  wynik dodawania.

  Funkcja przyjmuje 2 parametry, są to liczby ALE dla pewności użyj console.log-a
  który pozwoli Ci podejrzeć wartości przekazane w parametrach. 

  Przykład użycia i działania funkcji:

  ~~~js
  function addTwoNumbers(a,b){
    // miejsce Twój kod
  }

  const suma = addTwoNumbers(20, 30);

  console.log(suma); // 50
  ~~~

  ##### Notes

  - KOD NALEŻY PISAĆ TYLKO I WYŁĄCZNIE W ŚRODKU CIAŁA FUNKCJI
  - użyj console.log-a do podejrzenia parametrów
  - użyj słowa return w funkcji tak żeby funckja zwracała
  - zwróć wynik dodawania parametrów

  `,
  shortDescription:
    "Stwórz funkcje która zwróci wynik dodawnia dwóch liczb. Liczby które należy dodać są określone w dwóch parametrach",
  tags: ["math", "numbers"],
  level: "easy",
  initialSnippet: `function addTwoNumbers(a,b){
          console.log(a,b);
      }`,
  solution: `
      function addTwoNumbers(a, b) {
        return a + b;
      }      
      `,
  tests: [
    {
      input: "20, 20",
      output: "40",
      outputType: "number",
    },
    {
      input: "25, 10",
      output: "35",
      outputType: "number",
    },
    {
      input: "5, 1",
      output: "6",
      outputType: "number",
    },
  ],
};
