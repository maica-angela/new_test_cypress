import { clickCookies } from '/cypress/e2e/cookies.cy.js';

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://web-dev3-k8s.webopsvolaris.com/')
    cy.wait(5000)
    cy.get('[class="radius-6"]').should('be.visible').click().wait(3000)
    cy.get('[name="fnameDestination"]').should('be.visible').type('CUN')
    cy.contains('CUN').click()
    clickCookies();
    //add function/checker: is the cookie pop up there? if yes, click Accept all

    cy.wait(5000)
    cy.get('[class="dialog-top-text col-12 col-md-6 ng-star-inserted"]')
      .get('[class="btn-calendar d-none d-md-block mat-flat-button mat-button-base mat-secondary"]').click()

    cy.get('[class="mat-form-field-infix"]').click()
    
  })
})