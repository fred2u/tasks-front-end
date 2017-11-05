FROM node:boron

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
RUN npm install -g @angular/cli@1.1.2
COPY package.json package-lock.json ./
RUN npm install

# Bundle app source
COPY . .

## Build Angular
RUN npm run build-prod

ENV PORT=8080
EXPOSE 8080
CMD [ "npm", "start" ]
