FROM node:latest

ENV APP_PORT=3000 
#ENV APP_DIR=/app

#WORKDIR ${APP_DIR}

ADD main.js .
ADD package.json .
ADD package-lock.json .
ADD public public
ADD views views

RUN npm install

EXPOSE ${APP_PORT}

ENTRYPOINT [ "node", "main.js" ]
