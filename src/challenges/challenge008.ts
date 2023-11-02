import { Challenge } from "./types";

export const challenge008: Challenge = {
  id: "hg4j58g34k3",
  title: "Policz ilość piątek 5 w tablicy",
  instructions: `
    
  Policz ile razy występuję liczba 5 w tablicy pochodzącej z parametru
  
  Przykład użycia i działania funkcji:

  ~~~js
  function count5Occurrences(numbers){
    // miejsce Twój kod
  }

  const result = count5Occurrences([2,5,1,5,2]);

  console.log(result); // 2
  ~~~
  
  `,
  shortDescription:
    "Stwórz funkcje która policzy ilość cyfry pięć (5) w tablicy a następnie zwróci wynik",
  tags: ["arrays", "couting"],
  level: "medium",
  initialSnippet: `function count5Occurrences(numbers){
          console.log(numbers);
      }`,
  solution: `
  function count5Occurrences(numbers) {
    let ilosc5 = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] === 5) {
        ilosc5++;
      }
    }
  
    return ilosc5;
  }
  
      `,
  tests: [
    {
      input: "[2,5,1,6,3]",
      output: "1",
      outputType: "number",
    },
    {
      input: "[3,2,1,7,4,2,5,5,9]",
      output: "2",
      outputType: "number",
    },
  ],
};
