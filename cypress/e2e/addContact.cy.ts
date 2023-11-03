describe('Test add a new contact form', () => {
  const addContactBtn = '[aria-label="add-new-contact-btn"]';
  const contactFormSubmitBtn = '[aria-label="contact-form-submit-btn"]';
  const contactFormCancelBtn = '[aria-label="contact-form-cancel-btn"]';

  it('Click the add contact button, open the form, check the button is disabled', () => {
    cy.visit('http://localhost:3000/');

    // Click to open the form, the button should be disabled
    cy.get(addContactBtn).click().should('be.disabled');

    // Check the submit and cancel buttons are showing
    cy.get(contactFormSubmitBtn).should('exist');
    cy.get(contactFormCancelBtn).should('exist');

    // Click the cancel button to close the form
    cy.get(contactFormCancelBtn).click();

    // The add new contact button should be enabled
    cy.get(addContactBtn).should('not.be.disabled');
  });

  it('Check the existence of the submit and reset buttons', () => {
    cy.visit('http://localhost:3000/');

    // Click to open the form
    cy.get(addContactBtn).click();

    // Check the submit and cancel buttons are showing
    cy.get(contactFormSubmitBtn).should('exist');
    cy.get(contactFormCancelBtn).should('exist');

    // Click the cancel button to close the form
    cy.get(contactFormCancelBtn).click();

    // Check the submit and cancel buttons should be hidden
    cy.get(contactFormSubmitBtn).should('not.exist');
    cy.get(contactFormCancelBtn).should('not.exist');
  });
});
