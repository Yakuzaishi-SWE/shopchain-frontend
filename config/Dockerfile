FROM node:16.10-alpine AS build

WORKDIR /app/

COPY config/babel.config.json /app/config/
COPY config/webpack.prod.js /app/config/
COPY config/webpack.common.js /app/config/
COPY .npmrc /app/
COPY tsconfig.json /app/
COPY package.json /app/
COPY package-lock.json /app/
COPY src/ /app/src/

RUN npm ci
RUN npm run build

FROM nginx:1.9.15-alpine

COPY --from=build /app/dist/ /usr/share/nginx/html
COPY config/nginx.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["nginx"]
CMD [ "-g", "daemon off;" ]