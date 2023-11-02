import { workers } from "./data";
import { Challenge } from "./types";

export const challenge014: Challenge = {
  id: "fnreiujf84j432",
  title: "Wynagrodzenia wg seniority",
  instructions: `
  
  Stwórz funkcje która policzy ile pieniędzy firma wydaje na wypłaty dla poszczególnych pracowników ze względu na ich seniority, wynik powinien być zwrócony w postaci tablicy gdzie 1 elementem będzie suma wynagrodzen juniorów, 2 elementem będzie suma wynagrodzeń regularów a 3 elementem suma wynagrodzen seniorów

  element tablicy czyli pojedyńczy pracownik wygląda następująco

  ~~~js
  const worker =  {
    name: "John",
    profession: "developer",
    salary: 1000,
    level: "senior",
  }
  ~~~

  - **name** nazwa pracownika
  - **profession** posada pracownika - możliwe wartości: "developer", "designer", "tester"
  - **salary** wynagrodzenie
  - **level** seniority pracownika - możliwe wartości: "senior", "regular", "junior"

  Przykład użycia i działania funkcji:

  ~~~js
  function groupedSalaries(workers){
    // miejsce Twój kod
  }

  const staff = [
    {name: 'John', salary: 1000, level: 'junior', profession: 'developer'},
    {name: 'Jane', salary: 2000, level: 'junior', profession: 'designer'},
    {name: 'Jack', salary: 3000, level: 'senior', profession: 'designer'},
    {name: 'Jerry', salary: 2000, level: 'regular', profession: 'designer'},

  ]

  const groupedSalaries = groupedSalaries(staff);

  console.log(groupedSalaries); // [3000, 2000, 3000]
  ~~~
  

  `,
  shortDescription:
    "Stwórz funkcje która policzy ile pieniędzy firma wydaje na wypłaty dla poszczególnych pracowników ze względu na ich seniority, wynik powinien być zwrócony w postaci tablicy gdzie 1 elementem będzie suma wynagrodzen juniorów, 2 elementem będzie suma wynagrodzeń regularów a 3 elementem suma wynagrodzen seniorów",
  tags: ["math", "arrays"],
  level: "hard",
  initialSnippet: `function groupedSalaries(workers){
          console.log(workers);
      }`,
  solution: `
  function groupedSalaries(workers) {
    const groupedSalaries = [0, 0, 0];
    let index = 0;
  
    for (let i = 0; i < workers.length; i++) {
      if (workers[i].level === "junior") {
        index = 0;
      } else if (workers[i].level === "regular") {
        index = 1;
      } else if (workers[i].level === "senior") {
        index = 2;
      }
  
      groupedSalaries[index] += workers[i].salary;
    }
  
    return groupedSalaries;
  }
  
      `,
  tests: [
    {
      input: JSON.stringify(workers),
      output: `[4800, 3750, 3000]`,
      outputType: "complex",
    },
  ],
};
