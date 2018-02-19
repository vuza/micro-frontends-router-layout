# Micro frontends: Tailor

[Tailor](https://github.com/zalando/tailor) is a part of a proof of concept, showing how to build micro frontends with [Zalando's Mosaic](https://www.mosaic9.org/) framework. This repository is responsible for providing the correct page layout and piping the layout's micro frontends for each web application's path. Have a look at [the overview repository](https://github.com/vuza/micro-frontends) for further architecture explanations and other components of this POC.

## Usage

Type `npm start` to run Tailor locally. See `templates/` for possible templates, call them via `localhost:port/templateName`. See `.travis.yml` for AWS Elastic Beanstalk deployment.

## Modifications to default Tailor

There are two Tailor.js request middlewears defined at `src/index.js`. One responsible of always loading a base template in order to prevent redefinition of the default HTTP boilerplate for every template and the other for forwarding every HTTP header if the micro frontend is not marked as public.
