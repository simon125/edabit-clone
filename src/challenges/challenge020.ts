import { workers } from "./data";
import { Challenge } from "./types";

export const challenge020: Challenge = {
  id: "cej98wj0912",
  title: "Podział na departamenty",
  instructions: `
  Firma zadecydowała o podziale pracowników na dwa deparatamenty: **tech** oraz **biznes** - do departamentu tech mają należeć developerzy oraz testerzy
  natomiast do biznesu mają należeć designerzy.
  
  Napisz funkcje która doda pole **department** do każdego z obiektów w tablicy workers na podstawie jego profesji
  wartościami tego pola jest wartość **tech** dla developerów i testerów i wartość **business** dla desingerów
  
  element tablicy pracowników czyli pojedyńczy pracownik wygląda następująco

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
  function assignToDepartments(workers){
    // miejsce Twój kod
  }

  const staff = [
    {name: 'John', salary: 1000, level: 'junior', profession: 'tester'},
    {name: 'Jane', salary: 2000, level: 'junior', profession: 'developer'},
    {name: 'Jerry', salary: 2000, level: 'regular', profession: 'designer'},
  ]

  const staffAssignedToDepartments = assignToDepartments(staff);

  console.log(staffAssignedToDepartments); 
    {name: 'John', salary: 1000, level: 'junior', profession: 'tester', department: 'tech'},
    {name: 'Jane', salary: 2000, level: 'junior', profession: 'developer', department: 'tech'},
    {name: 'Jerry', salary: 2000, level: 'regular', profession: 'designer', department: 'business'},
  ~~~
  
  `,
  shortDescription: `Firma zadecydowała o podziale pracowników na dwa deparatamenty: tech oraz biznes - do departamentu tech mają należeć developerzy oraz testerzy
      natomiast do biznesu mają należeć designerzy - napisz funkcje która doda pole "department" do każdego z obiektów w tablicy workers na podstawie jego profesji wartościami tego pola
      są tech dla developerów i testerów i business dla desingerów`,
  tags: ["arrays"],
  level: "hard",
  initialSnippet: `function assignToDepartments(workers){
          console.log(workers);
      }`,
  solution: `
  function groupToDepartments(workers) {
    for (let index = 0; index < workers.length; index++) {
      if (workers[index].profession === "designer") {
        workers[index].department = "business";
      } else {
        workers[index].department = "tech";
      }
    }
  
    return workers;
  }
  
      `,
  tests: [
    {
      input: JSON.stringify(workers),
      output: JSON.stringify(
        workers.map((worker) => ({
          ...worker,
          department: worker.profession === "designer" ? "business" : "tech",
        }))
      ),
      outputType: "complex",
    },
  ],
};
