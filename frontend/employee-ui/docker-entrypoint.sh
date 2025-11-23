#!/bin/sh
# Replace placeholder with env variable
# envsubst < /usr/share/nginx/html/runtime-config.js > /usr/share/nginx/html/runtime-config.tmp && \
# mv /usr/share/nginx/html/runtime-config.tmp /usr/share/nginx/html/runtime-config.js

# Start Nginx
nginx -g 'daemon off;'
