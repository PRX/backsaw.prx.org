FROM mhart/alpine-node:6

MAINTAINER PRX <sysadmin@prx.org>
LABEL org.prx.s3static="true"

WORKDIR /app

RUN apk --no-cache add git
RUN apk --no-cache add zip

ENTRYPOINT [ "npm", "run" ]

ADD package.json .
RUN npm install
ADD . .
RUN npm run ci-build
RUN npm run build-zip
