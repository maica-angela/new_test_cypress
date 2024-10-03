import { clickCookies } from '../cypress/support/cookies.js';

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://web-dev3-k8s.webopsvolaris.com/')
    cy.wait(5000)
    cy.get('[class="radius-6"]').should('be.visible').click().wait(3000)
    cy.get('[name="fnameDestination"]').should('be.visible').wait(3000).type('CUN')
    cy.contains('CUN').click()

    clickCookies();

    //add function/checker: is the cookie pop up there? if yes, click Accept all
  })
})