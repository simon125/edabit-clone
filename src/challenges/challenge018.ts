import { workers } from "./data";
import { Challenge } from "./types";

export const challenge018: Challenge = {
  id: "h98j32fkmsa",
  title: "Liczenie personelu",
  instructions: `
  
  Stwórz funkcje która policzy ilość pracowników na podstawie ich profesji. Rezultat powinien zostać zwrócony w postaci obiektu gdzie kluczem będzie nazwa profesji a wartością ilość pracowników z danej profesji

  Pracownicy są dostępni w parametrze w postaci tablicy - element tablicy czyli pojedyńczy pracownik wygląda następująco

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
  function countWorkers(workers){
    // miejsce Twój kod
  }

  const staff = [
    {name: 'John', salary: 1000, level: 'junior', profession: 'developer'},
    {name: 'Johny', salary: 1000, level: 'junior', profession: 'developer'},
    {name: 'Jane', salary: 2000, level: 'junior', profession: 'designer'},
    {name: 'Jack', salary: 3000, level: 'senior', profession: 'designer'},
    {name: 'Jerry', salary: 2000, level: 'regular', profession: 'designer'},

  ]

  const countedStaff = countWorkers(staff);

  console.log(countedStaff); 
  // {
  //   developer: 2, // ponieważ jest dwóch devów
  //   designer: 3, // ponieważ jest trzech designerów
  //   tester: 0 // ponieważ jest zero testerów buuuuu to kto testuje???
  // }
  ~~~
  `,
  shortDescription:
    "Stwórz funkcje która policzy ilość pracowników na podstawie ich profesji. Rezultat powinien zostać zwrócony w postaci obiektu gdzie kluczem będzie nazwa profesji a wartością ilość pracowników z danej profesji",
  tags: ["arrays", "objects"],
  level: "hard",
  initialSnippet: `function countWorkers(workers){
          console.log(workers);
      }`,
  solution: `
  function countWorkers(workers) {

    const result = {};
    
    workers.forEach((worker) => {
      if (result[worker.profession]) {
        result[worker.profession] += 1;
      } else {
        result[worker.profession] = 1;
      }
    });
  
    return result;
  }
      `,
  tests: [
    {
      input: JSON.stringify(workers),
      output: JSON.stringify({
        developer: 3,
        designer: 3,
        tester: 2,
      }),
      outputType: "complex",
    },
  ],
};
