import Dexie, { Table } from "dexie";
import { useLiveQuery } from "dexie-react-hooks";

interface Solution {
  id?: string;
  code?: string;
}

class SolutionsDatabase extends Dexie {
  public solutions!: Table<Solution, string>;

  public constructor() {
    super("SolutionsDatabase");
    this.version(1).stores({
      solutions: "++id,code",
    });
  }
}

export const db = new SolutionsDatabase();

export const addSolution = (id: string, code: string) => {
  return db.solutions.add({ id, code });
};

export const updateSolution = (id: string, code: string) => {
  return db.solutions.update({ id, code }, { code });
};

export const deleteSolution = (id: string, code: string) => {
  return db.solutions.update({ id, code }, { code });
};

export const clearSolutions = () => {
  return db.solutions.clear();
};

export const useSolutionsQuery = () => {
  const solutions = useLiveQuery(() => db.solutions.toArray());

  return {
    isLoading: !solutions,
    solutions: solutions || [],
  };
};

export const getSolution = (solutionId: string) =>
  db.solutions.where("id").equals(solutionId).first();

export const useSolutionQuery = (solutionId: string) => {
  const solution = useLiveQuery(
    () => db.solutions.where("id").equals(solutionId).first(),
    [solutionId]
  );

  return solution;
};
