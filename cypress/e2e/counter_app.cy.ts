// Click Add
// describe('My First Test', () => {
//   it('Gets, types and asserts', () => {
//     cy.visit('http://localhost:3000')

//     cy.contains('Add').click()
//   })
// })

// Click Delete Element
//  describe('My First Test', () => {
//    it('Gets, types and asserts', () => {
//      cy.visit('http://localhost:3000')

//      cy.contains('Delete').click()
//    })
//  })

//Click Decrement
 describe('My First Test', () => {
  it('Gets, types and asserts', () => {
    cy.visit('http://localhost:3000')

    cy.contains('Add').click()
    cy.contains('Add').click()
    cy.contains('Decrement').click()
  })
})