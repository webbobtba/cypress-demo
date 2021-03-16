describe('language testen', () => {

    before(() => {
        cy.visit('https://www.ashampoo.com/')
    })


    it('redirects to de/eur', () => {
        cy.location().then(location =>{
            expect(location.href).to.include('uk/gbp')
        })
    })

    it('percent badge has nice discount', () => {
        cy.get('.dow__percentbadge').should($badge => {
            const discount = parseInt($badge.text().slice(1))
            expect(discount).to.be.greaterThan(70)
        })
    })

})