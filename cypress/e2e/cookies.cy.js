
export function clickCookies() {
    //cy.wait(6000)
    cy.get('[id="onetrust-banner-sdk"]').should('be.visible')
        .get('[id="onetrust-accept-btn-handler"]').click({ force: true })
}

