/* eslint-disable no-undef */

describe('Cypress', () => {
  beforeEach('visits the app', () => {
    cy.visit('/');
    cy.get('[data-testid=sign-in-button]').click();
  });
  it('shows modal after clicking on button', () => {
    cy.get('[data-testid=modal]').should('be.visible');
  });
  describe('', () => {
    beforeEach('fill', () => {
      cy.get('[data-testid=modal-username]').type('yeah');
      cy.get('[data-testid=modal-password]').type('yeah');
    })
    it('types', () => {
      cy.get('[data-testid=modal-username]').should('have.value', 'yeah');
    });
  })
  // it('focuses the input', () => {
  //   cy.focused().should('have.class', 'form-control');
  // });
  // it('accepts input', () => {
  //   const input = "Learn about Cypress"
  //   cy.get('.form-control')
  //     .type(input)
  //     .should('have.value', input)
  // });
  // it('displays list of todo', () => {
  //   cy.get('li')
  //     .should('have.length', 2)
  // });
  // it('adds a new todo', () => {
  //   const input = "Learn about cypress"
  //   cy.get('.form-control')
  //     .type(input)
  //     .type('{enter}')
  //     .get('li')
  //     .should('have.length', 3)
  // });
  // it('deletes a todo', () => {
  //   cy.get('li')
  //     .first()
  //     .find('.btn-danger')
  //     .click()
  //     .get('li')
  //     .should('have.length', 1)
  // })
  // it('deletes all todo', () => {
  //   cy.get('li')
  //     .first()
  //     .find('.btn-danger')
  //     .click()
  //     .get('li')
  //     .first()
  //     .find('.btn-danger')
  //     .click()
  //     .get('.no-task')
  //     .should('have.text', 'No task!')
  // })
});

