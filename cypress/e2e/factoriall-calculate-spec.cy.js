import HomePage from '../pages/home_page'

import positiveData from '../fixtures/positive_test_data.json'
import negativeData from '../fixtures/negative_test_data.json'

describe('End to End test for calculating factorial of a number', () => {
  beforeEach(() => {
    cy.visit("/")
  })

  // using parametrized integer test data
  positiveData.forEach(data => {
    it(`returns correct result when using valid data. Input: ${data.input}`, () => {
      HomePage.enterAnInteger(data.input)
      HomePage.calculateFactorial()
      HomePage.getFactorialResult().should('have.text', `The factorial of ${data.input} is: ${data.output}`)
    })
  })

  // using parametrized non integer test data
  negativeData.forEach(data => {
    it(`returns error message when using invalid data. Input: ${data.input}`, () => {
      HomePage.enterAnInteger(data.input)
      HomePage.calculateFactorial()
      HomePage.getFactorialResult().should('have.text', 'Please enter an integer')
    })
  })
})