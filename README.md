# line-bot-nodejs

## Requirement

- Node.js 18.x ~

## Install

```bash
npm i
```

## Run

> `CHANNEL_ACCESS_TOKEN` & `CHANNEL_SECRET` can be got at https://developers.line.biz/console/

### With .env file

```bash
cp .env.sample .env
```

Write `CHANNEL_ACCESS_TOKEN` & `CHANNEL_SECRET` to `.env`

```bash
npm run dev
```

### Without .env file

```bash
CHANNEL_ACCESS_TOKEN=**** CHANNEL_SECRET=**** node index.js
```
