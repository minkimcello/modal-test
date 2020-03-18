# test blog
## testing frameworks to research
  - [x] jest + react testing library
  - [ ] mocha + chai
  - [ ] cypress
  - [ ] enzyme + jasmine + karma?

# questions
- googling for these answers gave me a bunch of different answers
  - integration test is a collection of unit tests.
    - testing modal = integration test?
  - acceptance test vs end to end test?
  - toBeInTheDocument() - does not find detached elements, so use toContainElement(). what is a detached element?

```js
// cypress when do these tests supposed to run usually?
describe('My First Test', function() {
  it('Gets, types and asserts', function() {
    cy.visit('https://www.mydomain.com')
    cy.contains('login').click()

    cy.url().should('include', '/login')

    cy.get('.email')
      .type('my@email.com')
      .should('have.value', 'my@email.com')
  })
})
```

# jest matchers
toBeVisible() = checks if visible to user by checking for css attributes and on top of dom tree

toBeInTheDocument() = whole dom

toContainElement() = dom

toContainHTML() = 'div'
toHaveTextContent() = checks string specifically
toHaveValue() = for components with input value (textarea, input, etc)

# queries
getBy - returns first matching node but error if none or multiple
getAllBy - array, error if none
