FROM node:6.9.5

ADD . /app
WORKDIR /app
RUN npm install

EXPOSE 3000
ENTRYPOINT ["npm", "start"]