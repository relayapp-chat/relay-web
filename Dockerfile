FROM caddy
COPY ./ /app
WORKDIR /app
CMD caddy run
