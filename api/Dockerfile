FROM node:10.16.0-alpine

ENV NODE_ENV production
WORKDIR /home/node/app

COPY package.json ./
RUN npm install --production=true

COPY . .
EXPOSE 4000

# start the server
CMD ["node", "./server.js"]
