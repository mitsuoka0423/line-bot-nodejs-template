FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 13000

ENTRYPOINT ["npm", "run", "serve"]
