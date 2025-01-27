FROM node:20-alpine as builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install
# RUN yarn install --frozen-lockfile --production

COPY . .

RUN yarn build

FROM nginx:stable-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

# USER nginx

# EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]