# file used for commits in the TCR cycle (test && commit || revert)

npm run format;
CI=true npm test;

if [ $? == 0 ] 
then # $? == last exit code
    git add . & npx git-cz; # prompts commit message with default editor
else
    git reset --hard;
fi;