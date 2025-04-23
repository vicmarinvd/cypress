describe('yellor or blue game', () => {
    beforeEach(() => {
      cy.visit('https://thelab.boozang.com/')
    })
  
    it('yellow or blue', () => {
        cy.get('.veggie_burger').click()
        cy.get(':nth-child(3) > .sub_list > :nth-child(1) > span > .link').click()
        cy.contains('Generate Color').click()
        let color = cy.get('.color')
        if (color == 'yellow'){
            cy.get('.yellow').click()
        }
        else{
            cy.get('.blue').click()
        }
        cy.contains('Success')
           
    })
  })