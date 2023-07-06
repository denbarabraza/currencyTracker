import { cy } from 'local-cypress';

describe('TimeLine Page', () => {
  const waitSecValue = 2000;

  beforeEach(() => {
    cy.visit('http://localhost:3000/#/time_line');
  });

  it('the elements of the TimeLine page should be visible', () => {
    cy.get('[data-cy="selectOptions"]').should('be.visible');
    cy.get('[data-cy="periodToggleSlider"]').should('be.visible');
    cy.get('[data-cy="daySelectOption"]').should('be.visible');
    cy.get('[data-cy="currencyItem"]').should('be.visible');
    cy.get('[data-cy="barChat"]').should('not.exist');
  });

  it('when select a day, a chart should be displayed', () => {
    cy.get('[data-cy="daySelect"]').should('be.visible').click();
    cy.get('[data-cy="optionsContainer"] > :nth-child(1)').click();

    cy.wait(waitSecValue);
    cy.get('[data-cy="barChat"]').should('be.visible');
  });

  it('when we click on toggle(Month), we send a request for statistics for the month', () => {
    cy.get('[data-cy="periodToggleSlider"]').should('be.visible').click();

    cy.wait(waitSecValue);
    cy.get('[data-cy="barChat"]').should('be.visible');
    cy.get('[data-cy="chartPopUp"]').should('be.visible');
  });

  it('the value in select and in the card must be the same', () => {
    cy.get('[data-cy="selectOption"] > :nth-child(1)').should('contains.text', 'Bitcoin');
    cy.get('[data-cy="currencyTitle').should('contains.text', 'Bitcoin');
  });

  it('if the toggle value is "Month", then select with date selection is not shown', () => {
    cy.get('[data-cy="periodToggleSlider"]').should('be.visible').click();
    cy.get('[data-cy="daySelect').should('not.exist');
  });
});
