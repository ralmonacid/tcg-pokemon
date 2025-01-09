FROM node:16 as base
ENV TZ=America/Santiago
WORKDIR /app

COPY package.json .
RUN npm install --only=development

COPY . .


FROM base as production

ENV NODE_PATH=./dist

RUN npm i
RUN npm run build

EXPOSE ${PORT}

CMD [ "node", "/app/dist/src/main.js" ]%
