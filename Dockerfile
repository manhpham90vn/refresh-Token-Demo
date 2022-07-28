FROM node:16
LABEL maintainer="manhpham90vn"
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]