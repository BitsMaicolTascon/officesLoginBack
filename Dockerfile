FROM node:16

RUN mkdir -p /Documents/cleanCode/officesLoginBack

WORKDIR /Documents/cleanCode/officesLoginBack

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]