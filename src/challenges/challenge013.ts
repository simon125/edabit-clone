import { workers } from "./data";
import { Challenge } from "./types";

export const challenge013: Challenge = {
  id: "f39j8vxcnvjfdk",
  title: "Średnia wynagrodzenia pracowników",
  instructions: `
  Stwórz funkcje która policzy średnią wynagrodzenia pracowników dostępnych w tablicy w parametrze funkcji
  
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

  
  Tablicę z pracownikami zawsze możesz podejrzeć w konsoli przy pomocy console.log-a

  Twoim zadaniem jest policzenie średniego wynagrodzenia w firmie na podstawie pola salary
  a następnie zwrócenie wyniku

  Przykład użycia i działania funkcji:

  ~~~js
  function avarageSalary(workers){
    // miejsce Twój kod
  }

  const staff = [
    {name: 'John', salary: 1000, level: 'junior', profession: 'developer'},
    {name: 'Jane', salary: 2000, level: 'junior', profession: 'designer'},
  ]

  const avgSalary = avarageSalary(staff);

  console.log(avgSalary); // 1500
  ~~~
  `,
  shortDescription:
    "Stwórz funkcje która policzy średnią wynagrodzenia pracowników dostępnych w tablicy w parametrze funkcji",
  tags: ["math", "arrays"],
  level: "medium",
  initialSnippet: `function avarageSalary(workers){
          console.log(workers);
      }`,
  solution: `
  function avarageSalary(workers) {
    let suma = 0;
    for (let i = 0; i < workers.length; i++) {
      suma += workers[i].salary;
    }
  
    return suma / workers.length;
  }
  
      `,
  tests: [
    {
      input: JSON.stringify(workers),
      output: "1443.75",
      outputType: "number",
    },
  ],
};
