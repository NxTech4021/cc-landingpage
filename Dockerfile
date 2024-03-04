FROM node:20-alpine3.17 as development

WORKDIR /app

COPY package.json .

RUN yarn install --network-timeout 100000

COPY . .

EXPOSE 3000

CMD [ "yarn", "dev" ]
