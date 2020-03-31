/* eslint-disable no-undef */

describe('Arrange, Act, Assert with Cypress', () => {
  beforeEach('visits the app', () => {
    cy.visit('/');
  });

  describe('clicking on sign in button', () => {
    beforeEach(() => {
      cy.get('[data-testid=sign-in-button]').click();
    });

    it('shows the modal', () => {
      cy.get('[data-testid=modal]').should('be.visible');
    });

    describe('filling in the form', () => {
      beforeEach(() => cy.get('[data-testid=modal-username]').type('minkim'));

      it('types', () => {
        cy.get('[data-testid=modal-username]').should('have.value', 'minkim');
      });

      describe('submitting the data', () => {
        beforeEach(() => {
          cy.get('[data-testid=modal]').submit();
        });

        it('closes the modal', () => {
          cy.get('[data-testid=modal]').should('not.be.visible');
        });

        it('shows the welcome text', () => {
          cy.get('[data-testid=hello-username]').should('have.text', 'Hello minkim.');
        });
      });
    });
  });
});

