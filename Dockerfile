FROM node:16 as BUILD
COPY . /rea
WORKDIR /rea
RUN npm run build
