#!/bin/sh

npm run build

cp dist/* ../public/
echo "hmr-react has been built and copied to the public folder"
