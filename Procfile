release: NODE_ENV=production npm run --prefix=client vue-cli-service build && npm install --prefix server
web: export $(cat .env | xargs)  && node src/server.js