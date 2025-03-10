FROM node:18-alpine

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

RUN npm ci

COPY . .

EXPOSE 8000

CMD ["npm","run","dev"]
