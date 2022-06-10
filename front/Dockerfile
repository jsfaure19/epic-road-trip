FROM node:16-alpine
# Create and define the node_modules's cache directory.
WORKDIR /usr/src/app

# chown -R change the owner of app folder to app

# the node_modules will be owned by app too

RUN addgroup app && adduser -S -G app app && chown -R app /usr/src/app

USER app

# Install the application's dependencies into the node_modules's cache directory.
COPY ./rails-react-app/package.json ./
COPY ./rails-react-app/package-lock.json ./

RUN npm install --silent
