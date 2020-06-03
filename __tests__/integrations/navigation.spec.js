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
