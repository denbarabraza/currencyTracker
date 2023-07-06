import { cy } from 'local-cypress';

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('the elements of the Home page should be visible', () => {
    const currencyCount = 10;

    cy.get('.sc-dAOort').should('be.visible');
    cy.get('[data-cy="currencyCard"]').should('be.visible').its('length').should('eq', 1);
    cy.get('[data-cy="currencyItem"]')
      .should('be.visible')
      .its('length')
      .should('eq', currencyCount);
  });

  it('when you click on the currency, a modal window should open', () => {
    cy.get('[data-cy="currencyCard"] > :nth-child(1)').click();
    cy.get('[data-cy="modalCurrency"]').should('be.visible');
  });
});
