describe('concatenate strings', () => {
    beforeEach(() => {
      cy.visit('https://thelab.boozang.com/')
    })
  
    it('concatenate string', () => {
        cy.get('.veggie_burger').click()
        cy.get(':nth-child(7) > .sub_list > :nth-child(1) > span > .link').click()
        cy.contains('Generate strings').click()
        cy.wait(2000)
        cy.get('.string1').invoke('text').then(str1 => {
            cy.get('.string2').invoke('text').then(str2 => {
              const concatenated = `${str1.trim()}${str2.trim()}`;
          
              cy.get('input').type(concatenated);
              cy.get('.text-center > .form_btn').click();
              cy.contains('Success').should('be.visible');
            });
          });
          

    })
  })