# test blog
## testing frameworks to research
  - [x] jest(runner/expect) + react-testing-library(render)
  - [x] mocha(runner) + chai(expect) + enzyme(render)
  - [-] cypress
  - [-] jasmine(testing library) + enzyme(render)?

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
