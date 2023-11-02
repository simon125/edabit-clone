export interface Challenge {
  id: string;
  title: string;
  instructions: string;
  shortDescription: string;
  tags: string[];
  initialSnippet: string;
  solution: string;
  level: "easy" | "medium" | "hard";
  tests: Array<{
    input: string;
    output: string;
    outputType: "number" | "string" | "complex";
  }>;
}
