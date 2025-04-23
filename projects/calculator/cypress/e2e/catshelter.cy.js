describe('cat shelter', () => {
    beforeEach(() => {
      cy.visit('https://thelab.boozang.com/')
    })
  
    it('cat shelter', () => {
        cy.get('.veggie_burger').click()
        cy.get(':nth-child(4) > .sub_list > :nth-child(3) > span > .link').click()
        cy.get('.cat_shelter_header > .link_btn').click()
        cy.wait(2000)
        cy.get('.list_form > :nth-child(1) > input').type('Miau')
        cy.get('textarea').type('El primer gato de victoria')
        cy.get('.go_out_or_not > :nth-child(2) > label > input').click()
        cy.get('.text-center > .form_btn').click()
        cy.wait(4000)
      
        let totalItems1;
        cy.get('.catshelter_section')
            .then($items => {
                // num de elementos en cat section
                totalItems1 = $items.length;
                // ultimo
                cy.wrap($items).last().within(() => {
                    //boton
                    cy.get(':last-child > .new_home').click();
                });
            })

        cy.wait(4000)
        //add new cat
        cy.get('.cat_shelter_header > .link_btn').click()
        cy.wait(2000)
        cy.get('.list_form > :nth-child(1) > input').type('Alfajor')
        cy.get('textarea').type('El segundo gato de victoria')
        cy.get('.go_out_or_not > :nth-child(2) > label > input').click()
        cy.get('.text-center > .form_btn').click()
        cy.wait(4000)

        let totalItems;
        cy.get('.catshelter_section')
            .then($items => {
            
                totalItems = $items.length;
                cy.wrap($items).last().within(() => {
                    cy.get(':last-child > .new_home').click();
                });
            })
    })
  })
