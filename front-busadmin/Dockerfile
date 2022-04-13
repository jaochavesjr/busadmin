FROM node:16-alpine
# Add a work directory

WORKDIR /app

COPY package.json ./

RUN yarn install

COPY . .

CMD ["yarn", "start"]
