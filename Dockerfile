# syntax=docker/dockerfile:1

FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install --production
CMD ["node", "src/app.js"]
EXPOSE 3000