describe('sorted list', () => {
    beforeEach(() => {
      cy.visit('https://thelab.boozang.com/')
    })
  
    it('sorted list', () => {
        cy.get('.veggie_burger').click()
        cy.get(':nth-child(4) > .sub_list > :nth-child(1) > span > .link').click()
        cy.get('input').type('Objeto 1')
        cy.get('.form_btn').click()
        cy.wait(4000)
        cy.get('input').type('Objeto 2')
        cy.get('.form_btn').click()
        cy.contains('Objeto 1')
        cy.contains('Objeto 2')
    })
  })