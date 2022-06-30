#!/bin/bash
set -e

# Remove a potentially pre-existing server.pid for Rails.
rm -f /rails-react-app/tmp/pids/server.pid
bundle exec rake db:migrate 2>/dev/null || bundle exec rake db:setup
# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"

# create & migrate database
docker-compose run api rake db:create
docker-compose run api rake db:migrate
