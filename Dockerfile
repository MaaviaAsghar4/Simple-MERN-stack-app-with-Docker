#Build client
FROM node:14.15.3-alpine3.12

WORKDIR /usr/app/public

COPY public/package*.json ./

RUN npm install

COPY public/ ./

RUN npm run build

#Build server
FROM node:14.15.3-alpine3.12

WORKDIR /usr/src/app

COPY --from=public /usr/app/public/build ./public/build/

WORKDIR /usr/src/app/server

COPY server/package*.json ./

RUN npm install

COPY server/ ./

EXPOSE 8000

CMD ["npm","start"]