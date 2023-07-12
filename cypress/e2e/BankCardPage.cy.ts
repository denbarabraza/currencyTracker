import { cy } from 'local-cypress';

describe('BankCard Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/#/bank_card');
  });
  it('the elements of the BankCard page should be visible', () => {
    cy.get('[data-cy="inputItem"]').should('be.visible');
    cy.get('.mapboxgl-canvas').should('be.visible');
  });

  it('interaction with the input should be correct', () => {
    const inputValue = 'dol';

    cy.get('[data-cy="inputItem"]').should('be.visible');
    cy.get('[data-cy="inputItem"]').type(inputValue).should('have.value', inputValue);
  });

  it('hints should appear when the input value is more than one character', () => {
    cy.get('[data-cy="inputItem"]').type('H').should('have.value', 'H');
    cy.get('[data-cy="hintsBlock"]').should('be.visible');
  });
});
