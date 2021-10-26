ARG NODE_VERSION=16.12.0-alpine3.12
ARG GITHUB_PROJECT

FROM node:${NODE_VERSION} AS build

ARG ANGULAR_VERSION=12
ARG GITHUB_DIR
ARG GITHUB_PROJECT
ARG GITHUB_HASH

WORKDIR /tmp

RUN apk -U upgrade && \
    apk add --no-cache git openssh && \
    npm i -g @angular/cli@${ANGULAR_VERSION} && \
    git clone -n https://github.com/${GITHUB_DIR}/${GITHUB_PROJECT}.git && \
    cd ${GITHUB_PROJECT} && \
    git checkout ${GITHUB_HASH} && \
    npm ci && \
    npm run build

FROM pmb69/ng-nginx:0.1.0

ARG GITHUB_PROJECT
ENV TITLE="My Nas"
ENV BASE_URL=""

WORKDIR /usr/share/nginx/html

COPY --from=build /tmp/${GITHUB_PROJECT}/dist .

RUN apk add --update libintl && \
    apk add --virtual build_deps gettext &&  \
    cp /usr/bin/envsubst /usr/local/bin/envsubst && \
    apk del build_deps && \
    rm -rf /var/cache/apk/* 

CMD ["/bin/sh",  "-c",  "envsubst < assets/env.template.js > assets/env.js && exec nginx -g 'daemon off;'"]
