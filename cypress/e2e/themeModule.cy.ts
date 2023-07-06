import { cy } from 'local-cypress';

describe('Theme module', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('the theme should change when clicking on the toggle, header and toggle test', () => {
    cy.get('[data-cy="header"]').should(
      'have.css',
      'background-color',
      'rgb(207, 241, 202)',
    );

    cy.get('[data-cy="main"]').should(
      'have.css',
      'background-color',
      'rgb(255, 255, 255)',
    );
    cy.get('[data-cy="currencyCard"] > :nth-child(1)').should(
      'have.css',
      'background-color',
      'rgb(207, 241, 202)',
    );

    cy.get('[data-cy="footer"]').should(
      'have.css',
      'background-color',
      'rgb(207, 241, 202)',
    );

    cy.get('[data-cy="themeToggleSlider"]').eq(0).click();

    cy.get('[data-cy="header"]').should('have.css', 'background-color', 'rgb(0, 0, 0)');

    cy.get('[data-cy="main"]').should('have.css', 'background-color', 'rgb(0, 0, 0)');
    cy.get('[data-cy="currencyCard"] > :nth-child(1)').should(
      'have.css',
      'background-color',
      'rgb(42, 42, 42)',
    );

    cy.get('[data-cy="footer"]').should('have.css', 'background-color', 'rgb(0, 0, 0)');
  });

  it('the theme should be saved and applied after the page is reloaded', () => {
    cy.get('[data-cy="themeToggleSlider"]').eq(0).click();
    cy.reload();
    cy.get('[data-cy="header"]').should('have.css', 'background-color', 'rgb(0, 0, 0)');
  });
});
