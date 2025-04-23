describe('speed game', () => {
    beforeEach(() => {
      cy.visit('https://thelab.boozang.com/')
    })
  
    it('jugar al speed game', () => {
        cy.get('.veggie_burger').click()
        cy.get(':nth-child(2) > .sub_list > :nth-child(1) > span > .link').click()
        cy.contains('Start Game').click()
        cy.wait(8000)
        cy.get('.delete').click()        
        cy.contains('Success')
    })
  })