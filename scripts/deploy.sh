#!/bin/bash
timestamp=$(date)
export REACT_APP_TIMESTAMP=$timestamp

BUCKET="s3://mike-bucket-foo/"

# build the app
npm install
npm run build

# deploy
aws --profile mike s3 cp build/ $BUCKET --recursive