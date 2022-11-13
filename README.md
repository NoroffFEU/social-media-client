# workflow 
this is a tutorial that goes throw the process of making a testing environment workflow fot this client front end project
# Decision making 
- the requirement for this workflow CA project, is to grow throw the use of the tools related to testing process for making the code more robust and as close as possible to errors-free
- the idea is to test our code using unit testing and end to end testing, jest will be used to test the code sections for unit testing purposes, cypress will be used to test the entire code . 
- linting utilities such as ESlint together with prettier will be also used to check the code for errors and missing items that would affect the workflow
- restructuring of functions related to testing via JEST using matchers that would test the code for errors with modern JS syntax, using eslint-jest-plugin.
-  hooks for crucial events such as pre-committing, and pre-merging will be implemented to prevent submitting code that contains some errors