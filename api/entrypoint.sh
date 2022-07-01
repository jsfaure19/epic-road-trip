#!/bin/bash
set -e

# Remove a potentially pre-existing server.pid for Rails.
rm -f /rails-react-app/tmp/pids/server.pid
bundle exec rake db:migrate db:seed 2>/dev/null || bundle exec rake db:create db:migrate db:seed
# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"
