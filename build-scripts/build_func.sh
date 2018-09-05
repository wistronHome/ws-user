#!/usr/bin/env bash

cd ~/Documents/angular6/ws-user/

git pull

# yarn
yarn add ws-common@latest

npm run package

cd ./dist

mv ws-user ./user

cp -r user /usr/local/var/www/html/

rm -r ../dist
