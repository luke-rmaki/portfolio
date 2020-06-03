describe('Using social media links', () => {
  it('Home navigates to the about page and clicks all links', () => {
    cy.visit('http://localhost:8000/');
    cy.get('a[href="/about"]').click();
    cy.get('a > img').each('a > img', $el => {
      cy.wrap($el).click();
    });
  });
});
