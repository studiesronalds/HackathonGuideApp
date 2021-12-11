FROM node:14.0.0-alpine
WORKDIR /usr/app

RUN npm config set strict-ssl false -g
RUN npm install -g typescript
RUN npm i postgres

CMD ["npm", "run", "start"]
