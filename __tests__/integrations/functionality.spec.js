describe('Contact form', () => {
  it('Contact form works', () => {
    cy.visit('http://localhost:8000/contact');
    cy.get('input[name="email"]')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com');
    cy.get('form > button').click();
    cy.get('form > textarea')
      .type("This is a test form entry to make sure 💩 doesn't break")
      .should(
        'have.value',
        "This is a test form entry to make sure 💩 doesn't break"
      );
  });
});

describe('Menu', () => {
  it('Menu works properly', () => {
    cy.visit('http://localhost:8000/about');
    cy.get('#logo-wrapper').click();
    cy.get('span[data-cy="menu-close"]').click();
  });
});

describe('Using social media links', () => {
  it('Home navigates to the about page and clicks all links', () => {
    cy.visit('http://localhost:8000/');
    cy.get('a[href="/about"]').click();
    cy.get('a > img').each('a > img', $el => {
      cy.wrap($el).click();
    });
  });
});
