FROM node:18.16-alpine
WORKDIR /usr/backend

COPY *.json .

RUN npm install
RUN npm install typescript -D

COPY . .

EXPOSE 8080
