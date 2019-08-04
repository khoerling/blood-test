
// types
// ---------
export type Questions = [string]
export type Group = { [name: string]: Questions; }

export interface Questionnaire {
  [test: string]: Group;
}

// pure fns
// ---------
export function Questionaires(): [Questionnaire] {
  return require('./data/questionnaire.json')
}
