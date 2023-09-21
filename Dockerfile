FROM nginx
COPY ./docs /usr/share/nginx/html/portfolio
COPY nginx.conf /etc/nginx/conf.d/default.conf
