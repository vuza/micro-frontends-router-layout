# Micro frontends: Tailor

This is a part of a proof of concept, showing how to build micro frontends with Zalando's Mosaic framework. This repository is responsible for routing incoming requests and providing the correct page layout. Have a look at [the overview repository](https://github.com/vuza/micro-frontends-overview) for further architecture explanations and other components of this POC.

## Components

Skipper is included as Git submodules. Since there are some steps required, before their Dockerfiles can be used, I created two build scripts for this submodules, see [How to run](#how-to-run) for instructions. Have a look at the build script's comments to see what is happening. There are NPM packages available as well, but they run on a very old version.
Since Tailor.js' NPM package is up to date, I created a little Node.js application running Tailor.js, providing a Dockerfile, which is working out of the box. The frontend applications are simple React.js applications and can be found at `./frontends`.

### Project Mosaic

Project Mosaic is a partly open source project from Zalando. The project's aim is to enable micro frontends. The software which is part of this project provides different functionality usable to build micro frontends. Since up to now only parts are open sources and only parts are well documented, I use only the more common parts of project Mosaic.
[https://www.mosaic9.org/](https://www.mosaic9.org/)

#### Tailor.js

Tailor.js is a layout service, providing multiple layout which reference UI microservices.

[https://github.com/zalando/tailor](https://github.com/zalando/tailor)

#### Skipper

Skipper is a HTTP router, which streams the correct layout from Tailor.js based on the URL, params, header, etc.

[https://github.com/zalando/skipper](https://github.com/zalando/skipper)

## How to run

1. `./build-skipper-image.sh`
2. `docker-compose up`
