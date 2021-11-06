FROM node:latest

ENV APP_PORT=3000 
ENV APP_DIR=/app

WORKDIR ${APP_DIR}

ADD . .

RUN npm install

EXPOSE ${APP_PORT}

ENTRYPOINT [ "node", "main.js" ]
