#!/usr/bin/env sh

# Ensure that the script throws the error encountered
set -e

# Generate static files
npm run build

# Go to the generated file folder
cd build

# If it is published to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# If posted to https://<USERNAME>.github.io
git push -f git@github.com:reihanboo/reihanboo.github.io.git master
git push -f https://${access_token}@github.com/reihanboo/reihanboo.github.io.git master

# If posted to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:reihanboo/blog.git master:gh-pages
# git push -f https://${access_token}@github.com/reihanboo/blog.git master:gh-pages

cd -