FROM node:16-alpine
# Create and define the node_modules's cache directory.

WORKDIR /usr/src/app

# Install the application's dependencies into the node_modules's cache directory.
COPY ./rails-react-app/public ./
COPY ./rails-react-app/src ./
COPY ./rails-react-app/package-lock.json* ./
COPY ./rails-react-app/package.json ./
RUN npm ci && npm cache clean --force

COPY . ./
RUN npm run build


CMD ["npm", "run", "start"]
