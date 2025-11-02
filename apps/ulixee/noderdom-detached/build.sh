#!/bin/bash

npm run compile

./build-package-json.ts

cp ./README.md dist/README.md
