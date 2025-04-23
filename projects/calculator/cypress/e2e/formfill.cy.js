describe('form fill', () => {
    beforeEach(() => {
      cy.visit('https://thelab.boozang.com/')
    })
  
    it('form fill', () => {
        cy.get('.veggie_burger').click()
        cy.get(':nth-child(4) > .sub_list > :nth-child(2) > span > .link').click()

        cy.get(':nth-child(1) > input').type('name1')
        cy.get(':nth-child(2) > input').type('lastname1')
        cy.get(':nth-child(3) > input').type('email1@gmail')
        cy.get(':nth-child(4) > input').type('password1')
        cy.get('.btn_section > .form_btn').click()
        cy.wait(4000)
        cy.get(':nth-child(1) > input').type('name2')
        cy.get(':nth-child(2) > input').type('lastname2')
        cy.get(':nth-child(3) > input').type('email2@gmail')
        cy.get(':nth-child(4) > input').type('password2')
        cy.get('.btn_section > .form_btn').click()
        cy.wait(4000)
        cy.get('.orange').click()
        cy.contains('name1')
        cy.contains('name2')

    })
  })