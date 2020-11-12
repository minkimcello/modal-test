/* eslint-disable no-undef */
import { Button, Heading, TextField } from 'bigtest';

describe('Cypress with Interactors', () => {
  it('displays submitted data from modal', () => {
    cy.visit('/');
    cy.interactor(Button('SIGN IN'), 'click');
    cy.interactor(TextField({ placeholder: 'USERNAME' }), 'fillIn', 'batman');
    cy.interactor(Button('SUBMIT'), 'click');
    cy.interactor(Heading('Hello batman.'), 'exists');
  });
});
