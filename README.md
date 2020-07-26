# Reto Desarrollador handytec

## Dependencies

- Node >= 11.0.0
- MongoDB

## Development

* Client

```sh
npm run dev
```

* Server

```
npm run serve
```

## Environments

* Client

```txt
URL_PRODUCTION=
VUE_APP_URL=
```

* Server
```txt
PORT=
NODE_ENV=
MONGO_URL=
```

## Production

* Server

```sh
npm run prod
```

* Client

Build dist

```sh
NODE_ENV=production npm run --prefix=client vue-cli-service build
```

## Deploy to Server

```sh
git push heroku master
```

<!-- heroku config:set NPM_CONFIG_PRODUCTION=false  -->
<!-- folder structure explicacion
uso de prettier
use de vue-cli
uso de socketio -->

<!-- https://www.codereadability.com/automated-code-formatting-with-prettier/ -->
