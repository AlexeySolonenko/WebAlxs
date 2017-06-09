Alexey Solonenko portfolio and CV website repository.

*** INTRO***
This repo contains source files for a webiste located at:
http://tab4lioz.beget.tech/

*** ABOUT FOLDERS***
app/dist contains all production code. Normally, dist should be
uploaded only under Master.
Images shall be soon transfered there too

Lib contains third party libraries not subject to be modified
or altered in its source code. Uploaded periodically, and used only 
if content delivery network is not avaialble or down.

Temp is an utility folder for Grunt and the like.

Trash is trash.

Test is used for code under test. 


*** ABOUT WORKFLOW ***

1) Diff and log, analyze.
2) Make a new test branch.
3) Develop everything into test folder.
Use test webpage for testing.
4) Once ready. Merge to Master.
5) Checkout to master.
6) Commit and push.
7) Copy from test to dist. Change refs in html(s).
8) Check. Commit and push if OK.
9) Delete test branch.


