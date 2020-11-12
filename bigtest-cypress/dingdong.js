import { bigtestGlobals } from '@bigtest/globals';


/*
  todos
  - better logging?
  - do we distinguish between assertions and steps? functionality looks to be the same...
*/


export default Cypress.Commands.add('interactor', (interactor, method, value) => {
  cy.document({ log: false }).then((document) => {
    bigtestGlobals.document = document;
    return interactor[method](value);
  });
  Cypress.log({
    displayName: 'BigTest',
    message: interactor.description,
    consoleProps: () => {
      return {
        'Interactor': interactor.name,
        'Method': `${method}(${value || ''})`,
      }
    }
  })
});
