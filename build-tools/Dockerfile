FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --omit=dev

COPY src/ ./src/
COPY run.js .

CMD [ "node", "run.js", "BotElite" ]
