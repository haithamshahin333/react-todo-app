describe('TodoMVC - React', function () {
    // setup these constants to match what TodoMVC does
    let TODO_ITEM_ONE = 'buy some cheese'
    let TODO_ITEM_TWO = 'feed the cat'
    let TODO_ITEM_THREE = 'book a doctors appointment'
  
    beforeEach(function () {
      // By default Cypress will automatically
      // clear the Local Storage prior to each
      // test which ensures no todos carry over
      // between tests.
      //
      // Go out and visit our local web server
      // before each test, which serves us the
      // TodoMVC App we want to test against
      //
      // We've set our baseUrl to be http://localhost:8888
      // which is automatically prepended to cy.visit
      //
      // https://on.cypress.io/api/visit
      cy.visit('/')
    })

    afterEach(() => {
        // In firefox, blur handlers will fire upon navigation if there is an activeElement.
        // Since todos are updated on blur after editing,
        // this is needed to blur activeElement after each test to prevent state leakage between tests.
        cy.window().then((win) => {
          // @ts-ignore
          win.document.activeElement.blur()
        })
    })

    it('adds 2 todos', function () {
        cy.get('.add-todo')
        .type('learn testing{enter}')
        .type('add another todo item{enter}')
    
        cy.get('.todo-item').should('have.length', 2)
    })

})