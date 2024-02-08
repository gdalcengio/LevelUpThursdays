FROM node:20

COPY . .
RUN npm install
RUN npm run build

EXPOSE 4173 4173
CMD ["npm", "run", "preview"]