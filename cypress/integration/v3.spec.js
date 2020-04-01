/* eslint-disable no-undef */

function requires(check, fn) {
  beforeEach(() => {
    if (!check()) throw fn()
  });
}

describe('Modal Test with BigTest', () => {
  beforeEach('visits the app', () => {
    cy.visit('/');
  });

  describe('clicking on sign in button', () => {
    requires(() => cy.get('[data-testid=sign-in-button]'), () => new Error('Sign in button was not found'));

    beforeEach(() => {
      cy.get('[data-testid=sign-in-button]').click();
    });

    describe('opening sign in modal', () => {
      requires(() => cy.get('[data-testid=modal]'), () => new Error('Modal was not found'));

      describe('filling in the form', () => {
        requires(() => cy.get('[data-testid=modal-username]'), () => new Error('USERNAME was not found'));

        beforeEach(() => cy.get('[data-testid=modal-username]').type('minkim'));

        requires(() => cy.get('[data-testid=modal-username]').should('have.value', 'minkim'), () => new Error('Could not fill USERNAME with value minkim'));

        describe('submitting the data', () => {
          requires(() => cy.get('[data-testid=modal-submit]'), () => new Error('Could not find SUBMIT'));

          beforeEach(() => cy.get('[data-testid=modal]').submit());

          it('closes the modal', () => {
            cy.get('[data-testid=modal]').should('not.be.visible');
          });

          it('shows the welcome text', () => {
            cy.get('[data-testid=welcome-text]').should('have.text', 'Hello minkim.');
          });
        });
      });
    });

  });
});
