describe('Home navigating to About page', () => {
  it('Home navigates to the about page', () => {
    cy.visit('http://localhost:8000/');
    cy.get('a[href="/about"]').click();
  });
});

describe('Home navigating to Blog page', () => {
  it('Home navigates to the blog page', () => {
    cy.visit('http://localhost:8000/');
    cy.get('a[href="/blog"]').click();
  });
});

describe('Home navigating to Contact page', () => {
  it('Home navigates to the contact page', () => {
    cy.visit('http://localhost:8000/');
    cy.get('a[href="/contact"]').click();
  });
});
