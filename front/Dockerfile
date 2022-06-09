FROM node:16-alpine
# Create and define the node_modules's cache directory.
WORKDIR /usr/src/app

# Install the application's dependencies into the node_modules's cache directory.
COPY ./rails-react-app/package.json ./
COPY ./rails-react-app/package-lock.json ./
RUN ./rails-react-app/npm install --silent
