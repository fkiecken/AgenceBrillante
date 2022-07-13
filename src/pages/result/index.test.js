import { formatJobList } from ".";
import { formatQueryParams } from "."

const fakeSurveyResultToGetAParamsWith6Yes = [
    {questionNumber :1, answerQuestion: 'oui'},
    {questionNumber :2, answerQuestion: 'oui'},
    {questionNumber :3, answerQuestion: 'oui'},
    {questionNumber :4, answerQuestion: 'oui'},
    {questionNumber :5, answerQuestion: 'oui'},
    {questionNumber :6, answerQuestion: 'oui'},
]
const fakeSurveyResultToGetAParamsWith3Yes = [
    {questionNumber :1, answerQuestion: 'oui'},
    {questionNumber :2, answerQuestion: 'oui'},
    {questionNumber :3, answerQuestion: 'oui'},
    {questionNumber :4, answerQuestion: 'non'},
    {questionNumber :5, answerQuestion: 'non'},
    {questionNumber :6, answerQuestion: 'non'},
]
const fakeSurveyResultToGetAParamsWith3YesWithWrongData = [
    {questionNumber :1, answerQuestion: 'oui'},
    {questionNumber :2, answerQuestion: null},
    {questionNumber :3, answerQuestion: 'oui'},
    {questionNumber :4, answerQuestion: 'zsqdf'},
    {questionNumber :5, answerQuestion: 'oui'},
    {questionNumber :6, answerQuestion: 8},
]

describe('Format of the jobList', () => {
    test('Should add a comma when item isnt first', () => {
        const result = 'item2,'
        expect(formatJobList('item2', 3, 1)).toEqual(result)
    })
    test('Should dont add comma for the last item', () => {
        const result = 'item3'
        expect(formatJobList('item3', 3, 2)).toEqual(result)
    })
})

describe('Return of params', () => {
    test('Should return a param with full positive answer (1)', () => {
        const result = 'a1=1&a2=1&a3=1&a4=1&a5=1&a6=1'
        expect(formatQueryParams(fakeSurveyResultToGetAParamsWith6Yes)).toEqual(result)
    })
    test('Should return a param with 3 positive answers', () => {
        const result = 'a1=1&a2=1&a3=1'
        expect(formatQueryParams(fakeSurveyResultToGetAParamsWith3Yes)).toEqual(result)
    })
    test('Should return a param with 3 positive answers from wrong data', () => {
        const result = 'a1=1&a3=1&a5=1'
        expect(formatQueryParams(fakeSurveyResultToGetAParamsWith3YesWithWrongData)).toEqual(result)
    })
})