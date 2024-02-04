FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force
RUN npm install
COPY . .
RUN npm run compile
RUN npm run migrate
EXPOSE 3030
CMD ["npm", "start"]
