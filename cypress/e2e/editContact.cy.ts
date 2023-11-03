describe('Test the edit contact flow', () => {
  const contactCards = '[aria-label="contact-card-intro"]';
  const contactCardEditBtn = '[aria-label="contact-card-edit-btn"]';
  const contactCardDeleteBtn = '[aria-label="contact-card-delete-btn"]';
  const contactFormSubmitBtn = '[aria-label="contact-form-submit-btn"]';
  const contactFormCancelBtn = '[aria-label="contact-form-cancel-btn"]';

  it('Open and close the contact', () => {
    cy.visit('http://localhost:3000/');

    cy.get(contactCards).first().click();

    // Check if the action buttons are visible
    cy.get(contactCardEditBtn).should('exist');
    cy.get(contactCardDeleteBtn).should('exist');

    // Close the contact
    cy.get(contactCards).first().click();

    // Check contactCardEditBtn the action buttons are now hidden
    cy.get(contactCardEditBtn).should('not.exist');
    cy.get(contactCardDeleteBtn).should('not.exist');
  });

  it('Test the edit form', () => {
    cy.visit('http://localhost:3000/');

    cy.get(contactCards).first().click();

    // Open the edit contact form
    cy.get(contactCardEditBtn).click();

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
