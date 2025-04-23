describe('wait game', () => {
    beforeEach(() => {
      cy.visit('https://thelab.boozang.com/')
    })
  
    it('jugar al wait game', () => {
        cy.get('.veggie_burger').click()
        cy.get(':nth-child(2) > .sub_list > :nth-child(2) > span > .link').click()
        cy.contains('Start Game').click()
        cy.wait(5000)
        cy.get('.delete').click()        
        cy.contains('Success')
    })
  })