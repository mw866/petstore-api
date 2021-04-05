FROM node:15.13.0-alpine3.13
WORKDIR /usr/src/app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "npm", "start" ]