import { bannedWords } from "../../bannedWords";

export const getFunctionBasedOnCode = (code: string, input: string) => {
  if (bannedWords.some((bannedWord) => code?.includes(bannedWord))) {
    throw new Error("Stop hacking!");
  }

  /**
   * replacing regular console.log with custom logging feature
   */
  let finalCode = code?.split("console.log").join("window.customLog");

  /**
   * Changing named arrow function to anonymous arrow function
   */
  if (finalCode?.trim().startsWith("const")) {
    finalCode = finalCode?.replace(/const\s+\w+\s*=\s*/, "");
  }

  return new Function(`return (${finalCode})(${input})`);
};
