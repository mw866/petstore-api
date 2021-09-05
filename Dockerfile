FROM node:15-alpine3.13
WORKDIR /usr/src/app
COPY package.json ./
COPY package-lock.json ./
RUN npm install --production
COPY . .
EXPOSE 8080
CMD [ "npm", "start" ]