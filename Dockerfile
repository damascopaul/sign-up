# BUILD stage
FROM node:18.12.1-alpine as build
WORKDIR /build

COPY . .

RUN npm install
RUN npm run build

# RUN stage
FROM node:18.12.1-alpine
WORKDIR /app

COPY --from=build /build/.output ./output

EXPOSE 3000
USER eren
CMD ["node", "output/server/index.mjs"]
