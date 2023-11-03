describe('Test the search box', () => {
  const searchBoxInput = '[aria-label="search-box-input"]';
  const searchBoxReset = '[aria-label="search-box-reset"]';
  const value = 'Jimmy';

  it('Type into the search box to check the filter', () => {
    cy.visit('http://localhost:3000/');

    cy.get(searchBoxInput).type('Jimmy');
    cy.get(searchBoxInput).should('have.value', value);
  });

  it('Check if the clear button works', () => {
    cy.visit('http://localhost:3000/');

    cy.get(searchBoxInput).type('Jimmy');
    cy.get(searchBoxInput).should('have.value', value);

    cy.get(searchBoxReset).click();

    cy.get(searchBoxInput).should('have.value', '');
  });
});
