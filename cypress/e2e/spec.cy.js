describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  });

 
});

it('MichelleAmosah-Portfoliotesting', function() {
  cy.visit('http://localhost:3000')
  cy.get('[data-cy="nav-home"]').click();
  cy.get('[data-cy="nav-about"]').click();
  cy.get('[data-cy="nav-education"]').click();
  cy.get('[data-cy="nav-projects"]').click();
  cy.get('[data-cy="nav-services"]').click();
  cy.get('[data-cy="nav-contact"]').click();
  cy.get('[data-cy="nav-register"]').click();
  cy.get('[data-cy="register-username"]').click();
  cy.get('[data-cy="register-username"]').type('Hello');
  cy.get('[data-cy="register-email"]').click();
  cy.get('[data-cy="register-email"]').click();
  cy.get('[data-cy="register-email"]').type('hello@gmail.com');
  cy.get('[data-cy="register-password"]').click();
  cy.get('[data-cy="register-password"]').type('12345');
  cy.get('[data-cy="register-submit"]').click();
  cy.get('[data-cy="login-email"]').click();
  cy.get('[data-cy="login-email"]').type('hello@gmail.com');
  cy.get('[data-cy="login-password"]').click();
  cy.get('[data-cy="login-password"]').click();
  cy.get('[data-cy="login-password"]').type('12345');
  cy.get('[data-cy="login-submit"]').click();
  cy.get('#root nav.nav-links').click();
  cy.get('[data-cy="nav-projects"]').click();
  cy.get('[data-cy="create-name-input"]').click();
  cy.get('[data-cy="create-name-input"]').type('Hello Project');
  cy.get('[data-cy="create-description-input"]').click();
  cy.get('[data-cy="create-description-input"]').type('hello project');
  cy.get('[data-cy="create-project-btn"]').click();
  cy.get('#root button.btn').click();
  
  //localhost should not have token and username
  cy.window().then((win) => {
    expect(win.localStorage.getItem('token')).to.be.null;
    expect(win.localStorage.getItem('username')).to.be.null;
  });
});

