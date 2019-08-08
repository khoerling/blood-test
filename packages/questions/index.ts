
// interfaces & types
// ---------
export interface Questionnaire {
  Test: QuestionGroup;
}

export type Test = string
export type Group = string
export type QuestionGroup = { Group: [Question] }
export type Question = string


// pure fns
// ---------
const data = require('./questionnaire.json') as Questionnaire

export function Questionaires(): Questionnaire {
  return data
}

export function Questions(test: Test, group: Group): [QuestionGroup] {
  return data[test][group]
}

export function QuestionGroups(test: Test): [Group] {
  return Object.keys(data[test]) as [Group]
}
