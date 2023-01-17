import positiveData from '../fixtures/api-positive_test_data.json'
import negativeData from '../fixtures/negative_test_data.json'

describe('API test for calculating factorial of a number', () => {
  // using parametrized integer test data
  positiveData.forEach(test_data => {
    it(`returns correct value. Input: ${test_data.input}`, () => {
      cy.request({
        method: 'POST',
        url: "/factorial",
        form: true,
        body: {
          number: test_data.input
        },
        failOnStatusCode: false,
      }).then((res) => {
        expect(res.status).to.deep.equal(200, "Status code should be 200")
        expect(res.body.answer).to.deep.equal(test_data.output)
      })
    })
  })

  // using parametrized negative test data
  negativeData.forEach(test_data => {
    it(`returns error message. Input: ${test_data.input}`, () => {
      cy.request({
        method: 'POST',
        url: "/factorial",
        form: true,
        body: {
          number: test_data.input
        },
        failOnStatusCode: false,
      }).then((res) => {
        expect(res.status).to.not.deep.equal(500, "Status code should not be 500")
      })
    })
  })
})