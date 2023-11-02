import { workers } from "./data";
import { Challenge } from "./types";

export const challenge019: Challenge = {
  id: "cb872398oeia",
  title: "Restrukturyzacja firmy",
  instructions: `
  
  Stwórz funkcje która przefiltruje tablicę pracowników z parametru i zwróci nową tablice zgodnie z założeniami.

  Firma postanowiła zwolnić seniorów oraz wszystkich testerów przefiltruj tablice workerów i zwróć nową
  bez obiektów gdzie level === "senior" oraz profession === 'tester'

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
  function layoffs(workers){
    // miejsce Twój kod
  }

  const staff = [
    {name: 'John', salary: 1000, level: 'junior', profession: 'tester'},
    {name: 'Jane', salary: 2000, level: 'junior', profession: 'designer'},
    {name: 'Jack', salary: 3000, level: 'senior', profession: 'designer'},
    {name: 'Jerry', salary: 2000, level: 'regular', profession: 'designer'},

  ]

  const newStaff = layoffs(staff);

  console.log(newStaff); 
  // newStaff 
  // [
  //   {name: 'Jane', salary: 2000, level: 'junior', profession: 'designer'},
  //   {name: 'Jerry', salary: 2000, level: 'regular', profession: 'designer'},
  // ]
  ~~~
  
  `,
  shortDescription:
    "Stwórz funkcje która przefiltruje i zwróci tablice workers zgodnie z wytycznymi w instrukcji.",
  tags: ["arrays"],
  level: "hard",
  initialSnippet: `function layoffs(workers){
          console.log(workers);
      }`,
  solution: `
  function layoffs(workers) {
    const newStaff = [];
    for (let i = 0; i < workers.length; i++) {
      if (workers[i].profession !== "tester" && workers[i].level !== "senior") {
        newStaff.push(workers[i]);
      }
    }
  
    return newStaff;
  }
  
      `,
  tests: [
    {
      input: JSON.stringify(workers),
      output: JSON.stringify(
        workers.filter(
          ({ level, profession }) =>
            level !== "senior" && profession !== "tester"
        )
      ),
      outputType: "complex",
    },
  ],
};
