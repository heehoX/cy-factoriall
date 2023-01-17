require('cypress-xpath')

class HomePage {
    elements = {
        numberTextBox: () => cy.get("#number"),
        calculateButton: () => cy.get("#getFactorial"),
        resultText: () => cy.get("#resultDiv"),
        termsAndConditionLink: () => cy.xpath("//a[text()='Terms and Conditions']"),
        privacyLink: () => cy.xpath("//a[text()='Privacy']")
    }

    enterAnInteger(number_) {
        this.elements.numberTextBox().type(number_)
    }

    calculateFactorial() {
        this.elements.calculateButton().click()
    }

    getFactorialResult() {
        return this.elements.resultText()
    }

    clickTermsAndConditionLink() {
        this.elements.termsAndConditionLink().click()
    }

    clickPrivacyLink() {
        this.elements.privacyLink().click()
    }
}

module.exports = new HomePage();