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

> bigtest

# behavior

> bigtest

  1. default: run all tests (not watch)
  2. open menu

# jest
  - react ships by default by opening menu. jest usually just runs all tests without watchall.
  - multiple test runs only show files
  - fail still complets all the other files
  - fail test will show the nested name of test case and describe fail info.
  - when only one test file, it shows all the tests inside the file.

# questions
  - running only failed tests. does it create cache somewhere? what if files change before trigger?
  - when runner starts, i'm guessing it listens for the whole project so that whenever a file changes it knows how to retrigger the tests?
    - are some runners optimized to run only the affected files?
