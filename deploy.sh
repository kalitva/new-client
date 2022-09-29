#!/bin/bash

STAGED_FILES=$(git diff --name-only --staged)

# abort if there are staged files, as all these changes will be lost
if [ -n "$STAGED_FILES" ]; then
  echo "$(tput setaf 3)You have staged files$(tput sgr0)"
  echo Commit staged or restore these from index:
  echo $STAGED_FILES
  exit
fi

# on exit callback
function checkoutBack {
  git checkout master
  git branch -D deploy
}

trap checkoutBack exit

git checkout -b deploy
npm run build || exit
git add --force dist && git commit -m 'adding dist subtree'
git push origin --delete gh-pages
git subtree push --prefix dist origin gh-pages

echo "$(tput setaf 2)Successfully deployed to gh-page$(tput sgr0)"
