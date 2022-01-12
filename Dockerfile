FROM node:16.10-alpine AS build

WORKDIR /app/

COPY .npmrc /app/
COPY .babelrc /app/
COPY tsconfig.json /app/
COPY package.json /app/
COPY package-lock.json /app/
COPY webpack.prod.js /app/
COPY webpack.common.js /app/
COPY src/ /app/src/

RUN npm ci
RUN npm run build

FROM nginx:1.9.15-alpine

COPY --from=build /app/dist/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["nginx"]
CMD [ "-g", "daemon off;" ]