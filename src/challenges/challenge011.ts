import { Challenge } from "./types";

export const challenge011: Challenge = {
  id: "6u5gb8hyhujizx",
  title: "Walidacja hasła",
  instructions: `
  
  Napisz funkcje która zweryfikuje czy hasło oraz powtórzone hasło spełniają wymogi określone.

  - hasło oraz powtórzone hasło muszą być takie same w przeciwnym wypadku zwróć następującą wiadomość (string)
  "Password and repeated password don't match"
  - hasło powinno zawierać conajmniej 6 znaków w przeciwnym razie zwróć następującą wiadomość (string)
  "Password is to short"
  - hasło powinno zawierać conajmniej jeden ze znaków specjalnych: ! @ # $ % & w przeciwnym razie zwróć następującą wiadomość (string)
  "Password does not contain special character"
  - jeżeli hasło spełnia wymienione wcześniej wymogi zwróć następującą wiadomość
  "Password is ok"


  Przykład użycia i działania funkcji:

  ~~~js
  function validatePassword(password, repeatedPassword){
    // miejsce Twój kod
  }

  const result = validatePassword("test123!", "trelemorele");

  console.log(result); // "Password and repeated password don't match"
  // password i repeatedPassword nie są takimi samymi słowami 
  ~~~

  albo

  ~~~js
  function validatePassword(password, repeatedPassword){
    // miejsce Twój kod
  }

  const result = validatePassword("test", "test");

  console.log(result); // "Password is to short"
  // password jest słowem który ma tylko 4 litery - wymagana liczba znaków to 6 
  ~~~

  `,
  shortDescription:
    "Napisz funkcje która zweryfikuje czy hasło oraz powtórzone hasło spełniają wymogi określone w instrukcji",
  tags: ["strings", "validation"],
  level: "medium",
  initialSnippet: `function validatePassword(password, repeatedPassword){
          console.log(password, repeatedPassword);
      }`,
  solution: `
  function validatePassword(password, repeatedPassword) {
    if (password !== repeatedPassword) {
      return "Password and repeated password don't match";
    }
  
    if (password.length < 6) {
      return "Password is to short";
    }
  
    const specialChars = ["!", "@", "#", "$", "%", "&"];
    let passwordContainsSpecialChar = false;
    for (let i = 0; i < specialChars.length; i++) {
      if (password.includes(specialChars[i])) {
        passwordContainsSpecialChar = true;
      }
    }
  
    if (!passwordContainsSpecialChar) {
      return "Password does not contain special character";
    }
  
    return "Password is ok";
  }
      `,
  tests: [
    {
      input: "'haslo', 'haslo'",
      output: "Password is to short",
      outputType: "string",
    },
    {
      input: "'Test123!','Test321!'",
      output: "Password and repeated password don't match",
      outputType: "string",
    },
    {
      input: "'Test123!','Test123!'",
      output: "Password is ok",
      outputType: "string",
    },
    {
      input: "'Testttt','Testttt'",
      output: "Password does not contain special character",
      outputType: "string",
    },
  ],
};
