describe('YouTube Test', () => {
  it('should open YouTube, search for "Cypress movie", play the first video, skip ads, watch for 20 seconds, and close the site', () => {
    cy.visit('https://www.youtube.com/');

    cy.title().should('include', 'YouTube');

    cy.get('input[name="search_query"]').type('Cypress movie{enter}');

    // Проверить, что результаты поиска загружены
    cy.title().should('include', 'Cypress movie');

    // Перейти к первому видео
    cy.get('#video-title').first().click();

    // Воспроизвести первое видео
    cy.get('.html5-main-video').should('be.visible').click();

    // Skip рекламу (если есть)
    cy.get('.ytp-ad-skip-button').click();

    // Смотреть видео 20 секунд
    cy.wait(20000); // Подождать 20 секунд (или можно использовать cy.waitUntil)

    // Закрыть сайт
    cy.visit('about:blank');
  });
});
