FROM node:alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
RUN npm run build-prod

EXPOSE 3000
CMD [ "npm", "start" ]
