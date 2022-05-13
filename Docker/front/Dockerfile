FROM node:16-alpine
WORKDIR /app
COPY rails-react-app/package.json ./
COPY rails-react-app/package-lock.json ./
COPY ./ ./
RUN npm i
CMD ["npm", "run", "start"]