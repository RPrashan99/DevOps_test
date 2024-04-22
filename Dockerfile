FROM node:latest

WORKDIR /home/eg4118/Documents/app

COPY APP/* /

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]

