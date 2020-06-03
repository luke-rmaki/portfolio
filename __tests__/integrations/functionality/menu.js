describe('Menu', () => {
  it('Menu works properly', () => {
    cy.visit('http://localhost:8000/about');
    cy.get('#logo-wrapper').click();
    cy.get('span[data-cy="menu-close"]').click();
  });
});
