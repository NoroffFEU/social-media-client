this is a long eslint error message. 

peredward@Nilliz-Mac-Mini social-media-client % git commit -m "installed cypress, added ERROR.md, updated cypress.config.js"
[STARTED] Preparing lint-staged...
[COMPLETED] Preparing lint-staged...
[STARTED] Hiding unstaged changes to partially staged files...
[COMPLETED] Hiding unstaged changes to partially staged files...
[STARTED] Running tasks for staged files...
[STARTED] package.json — 52 files
[STARTED] *.js — 24 files
[STARTED] *.html — 0 files
[STARTED] *.scss — 0 files
[STARTED] *.css — 0 files
[SKIPPED] *.html — no files
[SKIPPED] *.scss — no files
[SKIPPED] *.css — no files
[STARTED] prettier --write
[COMPLETED] prettier --write
[STARTED] eslint --fix
[FAILED] eslint --fix [FAILED]
[FAILED] eslint --fix [FAILED]
[COMPLETED] Running tasks for staged files...
[STARTED] Applying modifications from tasks...
[SKIPPED] Skipped because of errors from tasks.
[STARTED] Restoring unstaged changes to partially staged files...
[SKIPPED] Skipped because of errors from tasks.
[STARTED] Reverting to original state because of errors...
[COMPLETED] Reverting to original state because of errors...
[STARTED] Cleaning up temporary files...
[COMPLETED] Cleaning up temporary files...

✖ eslint --fix:

/Users/peredward/Documents/GitHub/social-media-client/cypress.config.js
  1:26  error  'require' is not defined            no-undef
  3:1   error  'module' is not defined             no-undef
  5:21  error  'on' is defined but never used      no-unused-vars
  5:25  error  'config' is defined but never used  no-unused-vars

/Users/peredward/Documents/GitHub/social-media-client/cypress/e2e/2-advanced-examples/actions.cy.js
   12:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
   12:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
   12:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
   12:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
   12:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
   12:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
   12:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
   12:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
   30:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
   39:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
   48:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
   48:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
   58:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
   58:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
   69:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
  107:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
  107:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
  107:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
  107:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
  107:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
  107:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
  128:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
  137:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
  146:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
  151:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
  157:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
  162:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
  167:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
  171:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
  181:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
  187:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
  187:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
  193:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
  193:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
  199:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
  216:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
  223:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
  228:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
  249:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
  254:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
  259:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
  271:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command

/Users/peredward/Documents/GitHub/social-media-client/cypress/e2e/2-advanced-examples/cookies.cy.js
  89:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command

/Users/peredward/Documents/GitHub/social-media-client/cypress/e2e/2-advanced-examples/files.cy.js
  5:25  error  'require' is not defined  no-undef

/Users/peredward/Documents/GitHub/social-media-client/cypress/e2e/2-advanced-examples/misc.cy.js
  15:7  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
  74:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
  77:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command

/Users/peredward/Documents/GitHub/social-media-client/cypress/e2e/2-advanced-examples/spies_stubs_clocks.cy.js
  76:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
  88:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
  91:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command

/Users/peredward/Documents/GitHub/social-media-client/cypress/e2e/2-advanced-examples/storage.cy.js
   13:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
   22:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
   28:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
   37:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
   43:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
   52:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
   81:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
  110:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command

/Users/peredward/Documents/GitHub/social-media-client/cypress/e2e/2-advanced-examples/utilities.cy.js
  21:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command
  45:9  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command

✖ 64 problems (64 errors, 0 warnings)

husky - pre-commit hook exited with code 1 (error)
peredward@Nilliz-Mac-Mini social-media-client % git commit -m "installed cypress, added ERROR.md, updated cypress.config.js"