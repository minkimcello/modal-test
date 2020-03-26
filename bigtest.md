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
