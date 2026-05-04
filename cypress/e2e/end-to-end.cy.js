const { faker } = require('@faker-js/faker');

describe('End-to-End tests for registration and login flow', () => {
  it('Should register a new user and login successfully with the registered credentials', () => {
    const user = {
      name: faker.person.fullName(),
      email: faker.internet.email().toLowerCase(),
      phone: '11999999999',
      password: 'Test@123456',
    };

    cy.registerUser(user);

    cy.url().should('include', '/dashboard.html');
    cy.contains('Minha Conta').should('be.visible');

    cy.visit('/login.html');

    cy.login(user.email, user.password);

    cy.url().should('include', '/dashboard.html');
    cy.contains('Minha Conta').should('be.visible');
  });
});
