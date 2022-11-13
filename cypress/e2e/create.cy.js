// Test user:
// ("gonzalo02@stud.noroff.no", "Gonzalo123")

describe('Log in and Create Post', () => {
  const wait = 2000;
  const MOCK_EMAIL = 'gonzalo02@stud.noroff.no';
  const MOCK_PASSWORD = 'Gonzalo123';
  const MOCK_TITLE = 'Retro Game';
  const MOCK_TAGS = 'Cypress';
  const MOCK_MEDIA =
    'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/virtual_console_nintendo_3ds_7/SI_3DSVC_SuperMarioBros_image1600w.jpg';
  const MOCK_BODY = 'Retro game!';

  function testCreatePost(title, tags, media, body, id) {
    cy.wait(wait);
    cy.get('#footerActions .btn-outline-success')
      .should('have.text', 'New Post')
      .click();
    cy.wait(wait);
    cy.get('#postTitle').should('be.visible');
    if (title) {
      cy.get('#postTitle').type(title);
    }
    cy.get('#postTags').should('be.visible');
    if (tags) {
      cy.get('#postTags').type(tags);
    }
    cy.get('#postMedia').should('be.visible');
    if (media) {
      cy.get('#postMedia').type(media);
    }
    cy.get('#postBody').should('be.visible');
    if (body) {
      cy.get('#postBody').type(body, { force: true });
    }
    cy.wait(wait);
    cy.get("span[data-action='publish']")
      .should('be.visible')
      .click({ force: true });
    cy.get(`${id}:invalid`)
      .should('have.length', 1)
      .invoke('prop', 'validationMessage')
      .should('exist');
  }

  beforeEach(() => {
    cy.visit('/');
    cy.get('#registerModalLabel')
      .should('have.text', 'Create Profile')
      .should('be.visible');
    cy.wait(wait);
    cy.get('#registerForm')
      .find('.btn-outline-success')
      .should('be.visible')
      .click();
    cy.get('#loginModalLabel')
      .should('have.text', 'Login')
      .should('be.visible');
    cy.wait(wait);
    cy.get('#loginEmail').type(`${MOCK_EMAIL}`);
    cy.get('#loginPassword').type(`${MOCK_PASSWORD}`);
    cy.wait(wait);
    cy.get('#loginForm .btn-success').should('be.visible').click();
  });

  it('should show validation message when title is missing', () => {
    testCreatePost(null, MOCK_TAGS, MOCK_MEDIA, MOCK_BODY, '#postTitle');
  });

  it('should show validation message when URL is missing', () => {
    testCreatePost(MOCK_TITLE, MOCK_TAGS, 'not a url', MOCK_BODY, '#postMedia');
  });

  it('should publish when post is created', () => {
    cy.wait(wait);
    cy.get('#footerActions .btn-outline-success')
      .should('have.text', 'New Post')
      .click();
    cy.wait(wait);
    cy.get('#postTitle').should('be.visible').type(MOCK_TITLE);
    cy.get('#postTags').should('be.visible').type(MOCK_TAGS);
    cy.get('#postMedia').should('be.visible').type(MOCK_MEDIA);
    cy.get('#postBody').type(MOCK_BODY, { force: true });
    cy.wait(wait);
    cy.get("span[data-action='publish']")
      .should('be.visible')
      .click({ force: true });
  });
});
