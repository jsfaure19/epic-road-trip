FROM node:16-alpine
# Create and define the node_modules's cache directory.

WORKDIR /usr/src/app

# Install the application's dependencies into the node_modules's cache directory.
COPY ./rails-react-app/public /usr/src/app/
COPY ./rails-react-app/src /usr/src/app/
COPY ./rails-react-app/package-lock.json* /usr/src/app/
COPY ./rails-react-app/package.json /usr/src/app/
RUN npm ci && npm cache clean --force

COPY . ./

CMD ["npm", "run", "start"]
