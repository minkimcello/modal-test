# Outline
- Title: Error Reporting

- Introduction of what we're going to be observing
  - gif of modal
  - explain the error we will be triggering

- Jest tests v1
  - simple test case
    - one error for the whole batch. easier for this test case but would be harder to track down error in a real project.

- Jest tests v2
  - arrange act assert - more elaborate tests
    - after the top test fails, the ones dependent on that failed test will run and repeat the same errors in its reportings

- Bigtest Suggestion
  - draft visual prototype
  - happy medium between the two extreme cases
    - failing tests stop children tests
    - more descriptive error messages

# what's missing
- how user can interact with the error. mention at the end that this will be addressed next?
