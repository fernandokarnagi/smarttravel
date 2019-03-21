npm install
npm --max-old-space-size=4096 run-script build
cd dist
aws s3 sync . s3://smarttravel-app.com --acl public-read --delete
