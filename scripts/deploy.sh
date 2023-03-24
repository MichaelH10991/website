#!/bin/bash

BUCKET="s3://mike-bucket-foo/"

# build the app
npm install
npm run build

# deploy
aws --profile mike s3 cp build/ $BUCKET --recursive