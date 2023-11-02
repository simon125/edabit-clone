import { Challenge } from "./types";

export const challenge000: Challenge = {
  id: "gfhjczxcjv8932",
  title: "Intro",
  instructions: `
  ### Witaj na platformie EdabitClone

  Sekcja "Instructions" zawiera wszelkie potrzebne informacje dotyczące zadania.
  Tutaj znajdziesz wymagania jakie musi spełniać rozwiazanie, informacje o przekazanych parametrach 
  informacje co rozwiązanie/funkcja powinna zwracać i inne.

  Twoim pierwszym zadaniem "zapoznawczym" z platformą jest stworzenie funkcji
  **helloEdabitClone** która będzie przyjmować parametr hello będzie to zmienna typu string którą śmiało możesz podejrzeć 
  używając **console.log-a**

  następnie należy zwrócić nowy string skłądający się ze stringa pochodzącego z parametru oraz sztywnej wartości "EdabitClone"
  Zabieg ten nazywa się konkatenacją stringów.
  Nowostworzony string zwróć używając słowa kluczowego **return**


  Powyższą funkcje należy stworzyć w edyotrze dostępnym w zakładce **Code**
  Po utworzeniu funkcji należy zweryfikować zadanie klikając przycisk **Check**
  jeżeli weryfikacje przejdzie pomyślnie należy zapisać rozwiązanie w pamiętci przeglądarki
  dzięki czemu aplikacja będzie w stanie śledzić Twój progres w nauce.

  Przycisk **Check** możesz stosować kilkukrotnie jeżeli chcesz użyć console.log-a
  pozwoli Ci to zobaczenia wartości w consoli obok

  Przykład użycia i działania funkcji:

  ~~~js
  function helloEdabitClone(hello) {
    // miejsce na Twój kod
  }

  const test = helloEdabitClone('hello');

  console.log(test); // "hello EdabitClone"
  ~~~

  ##### Notes
  
  - KOD NALEŻY PISAĆ TYLKO I WYŁĄCZNIE W ŚRODKU CIAŁA FUNKCJI
  - użyj console.log-a do podejrzenia parametru
  - użyj słowa return w funkcji tak żeby funckja zwracała
  - zwróć słowo złożone z parametru oraz słowa EdabitClone - dokładnie w tej kolejności

  #### W razie W

  Jeżeli utkniesz przy jakimś zadaniu możesz skorzystać z dostępnego (o ile jest) rozwiązania
  w zakładce solution - staraj się jednak skorzystać z tego w ostateczności :)

  `,
  shortDescription:
    "Zadanie wprowadzające - pilotażowe - jak pracować z platformą - niech funckja zwraca parametr wraz ze słowem 'EdabitClone'",
  tags: ["intro"],
  level: "easy",
  initialSnippet: `function helloEdabitClone(hello){
          console.log(hello);
          // miejsce na Twój kod
      }`,
  solution: `
  function helloEdabitClone(hello) {
    return \`\${hello} EdabitClone\`
  }
  
      `,
  tests: [
    {
      input: '"Hello"',
      output: "Hello EdabitClone",
      outputType: "string",
    },
  ],
};
