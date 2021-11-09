FROM node:17

ENV APP_PORT=3000 
ENV APP_DIR=/app

WORKDIR ${APP_DIR}

ADD . .

RUN npm ci

EXPOSE ${APP_PORT}

ENTRYPOINT [ "node", "main.js" ]
