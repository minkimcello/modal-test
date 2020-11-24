import { Button, Heading, TextField } from 'bigtest';

describe('Cypress with Interactors', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.do(Button('SIGN IN').click())
  });
  describe('displays submitted data from modal', () => {
    it('check name batman', () => {
      cy.do([
        TextField({ placeholder: 'USERNAME' }).fillIn('batman'),
        TextField({ placeholder: 'USERNAME' }).fillIn('batman2'),
      ])
      cy.do(Button('SUBMIT').click())
      cy.expect(Heading('Hello batman2.').exists());
      cy.expect([
        Heading('Hello batman2.').exists(),
        Heading('Hello batman2.').exists()
      ]);
    })
  });
});