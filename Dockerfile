FROM nginx
COPY ./docs /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
