# test blog
## testing frameworks to research
  - [x] jest + react testing library
  - [x] mocha(runner) + chai(expect) + enzyme(simulating react)
  - [ ] cypress
  - [ ] jasmine(testing library) + karma(runner)?

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
  });
});
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

# notes
when tests are retriggered, we should show it immediately.
- mocha don't do that
