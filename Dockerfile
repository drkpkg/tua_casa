FROM ubuntu:22.04 as builder
WORKDIR /app
# install nodejs v18.14.0
RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install -y nodejs
RUN npm i -g @angular/cli
COPY package.json .
RUN npm cache clean --force
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx:1.21-alpine
# remove html folder
RUN rm -rf /usr/share/nginx/html/*
# copy dist folder
COPY --from=builder /app/dist/. /usr/share/nginx/html
EXPOSE 80
