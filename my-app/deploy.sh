#!/usr/bin/env sh

# abort on errors
set -e

env PUBLIC_URL=https://github.com/AnastassiyaR/birthday.git npm run build

cd build

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://anastassiyar.github.io (см. https://pages.github.com for instructions)
# git push -f git@github.com:anastassiyar/anastassiyar.github.io.git main

# если вы развертываете на https://anastassiyar.github.io/birthday

git push -f git@github.com:AnastassiyaR/birthday.git main:gh-pages
