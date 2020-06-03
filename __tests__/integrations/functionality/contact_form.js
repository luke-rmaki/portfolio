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
