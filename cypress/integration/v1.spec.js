/* eslint-disable no-undef */

describe('Simple Testing with Cypress', () => {
  it('displays submitted data from modal', () => {
    cy.visit('/').get('[data-testid=sign-in-button]').click();
    cy.get('[data-testid=modal]').should('be.visible');
    cy.get('[data-testid=modal-username]').type('minkim');
    cy.get('[data-testid=modal]').submit();
    cy.get('[data-testid=modal]').should('not.be.visible');
    cy.get('[data-testid=welcome-text]').should('have.text', 'Hello minkim.');
  });
});
