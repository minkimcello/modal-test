import { bigtestGlobals } from '@bigtest/globals';

function interact(interaction, runnerState) {
  bigtestGlobals.runnerState = runnerState;
  return cy.document({ log: false }).then(async doc => {
    bigtestGlobals.document = doc;
    return interaction;
  }).then(()=> {
    Cypress.log({
      displayName: runnerState,
      message: interaction.description
    })
  })
}

Cypress.Commands.add('dzo', interaction => {
  if(Array.isArray(interaction)) {
    Cypress.log({
      message: 'arrayz do'
    })
    interaction.map(interaction => {
      interact(interaction, 'step')
    })
  } else {
    Cypress.log({
      message: 'singlez do'
    })
    interact(interaction, 'step')
  }
});

Cypress.Commands.add('expzect', interaction => {
  if(Array.isArray(interaction)) {
    Cypress.log({
      message: 'arrayz expectz'
    })
    interaction.map(interaction => {
      interact(interaction, 'assertion')
    })
  } else {
    Cypress.log({
      message: 'singlez expectz'
    })
    interact(interaction, 'assertion')
  }
});

