import HomePage from '../pages/home_page'

import positiveData from '../fixtures/positive_test_data.json'
import negativeData from '../fixtures/negative_test_data.json'

describe('Validate links in page', () => {
  beforeEach(() => {
    cy.visit("/")
  })

  // Expected to fail, Terms and Condition link is pointing to Privacy page.
  it('should redirect to the Terms and Conditions page', () => {
    HomePage.clickTermsAndConditionLink()
    cy.url().should('include', '/terms')
  })

  // Expected to fail, Privacy link is pointing to Terms and Condition page.
  it('should redirect to the Privacy page', () => {
    HomePage.clickPrivacyLink()
    cy.url().should('include', '/privacy')
  })
})