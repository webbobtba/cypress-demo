describe('i bims ein test0r', () => {

    before(() => {
        cy.visit('https://www.ashampoo.com/de/eur/pin/2424/multimedia-software/snap-12')
    })


    it('document has title', () => {
        cy.window().then(window => {
            expect(window.document.title).to.not.equal('')
        })
    })

    it('geil kaufi-klicki Button ist am Start', () => {
        cy.get('.btn_buy_new').should('exist')
    })

    it('no duplicate IDs', () => {
        cy.window().then(window => {
            const ids = [...window.document.querySelectorAll('[id]')].map(element => element.id)
            const idsWithoutDuplicates = [...new Set(ids)]

            let duplicates = [...ids]
            idsWithoutDuplicates.forEach(id => {
                const i = duplicates.indexOf(id)
                duplicates = duplicates
                    .slice(0, i)
                    .concat(duplicates.slice(i + 1, duplicates.length))
            })

            if (duplicates.length) {
                Cypress.log({
                    name: 'duplicate IDs found:',
                    message: duplicates.join(', ')
                })
            }

            expect(duplicates.length).to.equal(0)
        })
    })

})