import { Challenge } from "./types";

export const challenge003: Challenge = {
  id: "v7349j8few90",
  title: "Kalkulator",
  shortDescription:
    "Napisz funkcję która wykona operacje matematyczną na przekazanych dwóch liczbach na podstawie znaku przekazanego jako 3 parametr",
  instructions: `
  Napisz funkcję która wykona operacje matematyczną na przekazanych dwóch liczbach na podstawie znaku przekazanego jako 3 parametr
  
  tzn. 
  - dwa pierwsze parametry przekazane do funkcji są liczbami na których trzeba wykonać operacje matematyczną
  - trzeci parametr jest **jednym** z następujących znaków **+** **-** **/** *
    
    - w przypadku + należy dodać dwa pierwsze parametry
    - w przypadku - należy odjąć dwa pierwsze parametry  
    - w przypadku * należy pomnożyć dwa pierwsze parametry  
    - w przypadku / należy podzelić dwa pierwsze parametry  


  Przykład użycia i działania funkcji:

  ~~~js
  function calculate(a, b, mathOperator){
    // miejsce Twój kod
  }

  const result = calculate(1, 4, "+");

  console.log(result); // 5
  ~~~
  `,
  tags: ["math", "numbers"],
  level: "easy",
  initialSnippet: `function calculate(a,b,mathOperator){
          console.log(a,b,mathOperator);
      }`,
  solution: `
  function calculate(a, b, mathOperator) {
    const t = {
      "+": a + b,
      "-": a - b,
      "*": a * b,
      "/": a / b,
    };
  
    return t[mathOperator];
  }
      `,
  tests: [
    {
      input: `3,5,"+"`,
      output: "8",
      outputType: "number",
    },
    {
      input: `5,3,"-"`,
      output: "2",
      outputType: "number",
    },
    {
      input: `5,3,"*"`,
      output: "15",
      outputType: "number",
    },
    {
      input: `15,3,"/"`,
      output: "5",
      outputType: "number",
    },
  ],
};
