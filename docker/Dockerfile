FROM pmb69/ng-nginx:0.1.0

ENV TITLE="My Nas"

ENV BASE_URL=""

WORKDIR /usr/share/nginx/html

COPY dist .

RUN apk add --update libintl && \
    apk add --virtual build_deps gettext &&  \
    cp /usr/bin/envsubst /usr/local/bin/envsubst && \
    apk del build_deps && \
    rm -rf /var/cache/apk/* 

CMD ["/bin/sh",  "-c",  "envsubst < assets/env.template.js > assets/env.js && exec nginx -g 'daemon off;'"]
