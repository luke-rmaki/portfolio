describe('Navigate full site', () => {
  it('Navigates from home to about to blog to contact', () => {
    cy.visit('http://localhost:8000/');
    cy.get('a[href="/about"]').click();
    cy.get('#logo-wrapper').click();
    cy.get('a[href="/blog"]').click();
    cy.get('#logo-wrapper').click();
    cy.get('a[href="/contact"]').click();
  });
});
