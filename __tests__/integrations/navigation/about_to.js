describe('About navigating to Home page', () => {
  it('About navigates to the home page', () => {
    cy.visit('http://localhost:8000/about');
    cy.get('#logo-wrapper').click();
    cy.get('a[href="/"]').click();
  });
});

describe('About navigating to Blog page', () => {
  it('About navigates to the blog page', () => {
    cy.visit('http://localhost:8000/about');
    cy.get('#logo-wrapper').click();
    cy.get('a[href="/blog"]').click();
  });
});

describe('About navigating to Contact page', () => {
  it('About navigates to the contact page', () => {
    cy.visit('http://localhost:8000/about');
    cy.get('#logo-wrapper').click();
    cy.get('a[href="/contact"]').click();
  });
});
