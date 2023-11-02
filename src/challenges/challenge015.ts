import { Challenge } from "./types";

export const challenge015: Challenge = {
  id: "f3498jjfsoefj",
  title: "Przelicznik centymetrów na milimetry",
  instructions: `
  Stwórz funkcje która przelicza wartość podaną w **cm** na **mm** - wartość 
  do przeliczenia jest w parametrze.

  Funckja powinna zawierać przeliczenie centymetrów na milimetry i zwrócić (**return**) przeliczoną wartość

  ~~~js
  function cmToMm(cm){
    // miejsce na Twój kod
  }

  const mm = cmToMm(20);

  console.log(mm); // 200
  ~~~
  `,
  shortDescription:
    "Stwórz funkcje która przelicza wartość podaną w cm na mm - wartość do przeliczenia jest w parametrze",
  tags: ["math"],
  level: "easy",
  initialSnippet: `function cmToMm(cm){
          console.log(cm);
      }`,
  solution: `
  function cmToMm(cm) {
    return cm * 10;
  }
  
      `,
  tests: [
    {
      input: "10",
      output: "100",
      outputType: "number",
    },
    {
      input: "45",
      output: "450",
      outputType: "number",
    },
  ],
};
