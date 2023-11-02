import { Challenge } from "./types";

export const challenge005: Challenge = {
  id: "f43f3094kf",
  title: "Numer telefonu",
  shortDescription:
    "Stwórz funkcje która doda znak '-' do przekazanego parametru a tym samym odseparuje/pogrupuje numer z postaci 111111111 do 111-111-111 ",
  instructions: `
  
  Stwórz funkcje która doda znak **-** do przekazanego parametru (numeru) a tym samym odseparuje/pogrupuje numer z postaci 111111111 do 111-111-111
  
  Przykład użycia i działania funkcji:

  ~~~js
  function phoneNumber(rawPhoneNumber){
    // miejsce Twój kod
  }

  const result = phoneNumber("123456789");

  console.log(result); // "123-456-789"
  ~~~

  #### Hints
  - Do zrealizowania zadania będziesz musiał/a użyć pętli 
  - stwórz zmienną let w której przechowasz nowy string z numerem stworzonym na podsatwie numeru z parametru

  `,
  tags: ["math", "numbers"],
  level: "easy",
  initialSnippet: `function phoneNumber(rawPhoneNumber){
          console.log(rawPhoneNumber);
      }`,
  solution: `
    function phoneNumber(rawPhoneNumber) {
      let phoneNumberWithDivider = "";
    
      for (let i = 0; i < rawPhoneNumber.length; i++) {
        if(i === 2 || i === 5){
          phoneNumberWithDivider += \`\${rawPhoneNumber[i]}-\`
        }else{
          phoneNumberWithDivider += \`\${rawPhoneNumber[i]}\`
        }
      }
    
      return phoneNumberWithDivider;
    }
      `,
  tests: [
    {
      input: "'123123123'",
      output: "123-123-123",
      outputType: "string",
    },
    {
      input: "'111111111'",
      output: "111-111-111",
      outputType: "string",
    },
  ],
};
