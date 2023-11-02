import { Challenge } from "./types";

export const challenge006: Challenge = {
  id: "f87h4398jfe",
  title: "String divider",
  instructions: `
  
  Stwórz funkcje która przetworzy przekazany w parametrze string i wstawi pomiędzy każdym znakiem znak określny w drugim parametrze
  

  przykładowo z takiego stringa:

  ~~~js
  "trelemorele"
  ~~~
  trzeba zrobić takiego (zakładając że znak jaki chcemy mieć pomiędzy to * ):
  ~~~js
  "t*r*e*l*e*m*o*r*e*l*e"
  ~~~

  Przykład użycia i działania funkcji:

  ~~~js
  function stringDivider(text, divider){
    // miejsce Twój kod
  }

  const result = stringDivider("test", "+");

  console.log(result); // "t+e+s+t"
  ~~~
  `,
  shortDescription:
    "Stwórz funkcje która przetworzy przekazany w parametrze string i wstawi pomiędzy każdym znakiem znak określny w drugim parametrze",
  tags: ["strings", "arrays"],
  level: "medium",
  initialSnippet: `function stringDivider(text, divider){
          console.log(text, divider);
      }`,
  solution: `
      function stringDivider(text, divider) {
        return text.split("").join(divider);
      }      
      `,
  tests: [
    {
      input: "'test', '.'",
      output: "t.e.s.t",
      outputType: "string",
    },
    {
      input: "'simon', '#'",
      output: "s#i#m#o#n",
      outputType: "string",
    },
  ],
};
