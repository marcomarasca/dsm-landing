# Synology DSM Landing Page

Simple responsive [Angular](https://angular.io) application built with [Bootstrap](https://getbootstrap.com/) that functions as a landing page to access the [Synology DiskStation Manager](https://www.synology.com/en-us/dsm) services from a Synology NAS.

## Getting Started

### Enabling WebStation

The [WebStation](https://www.synology.com/en-global/dsm/packages/WebStation) package needs to be enabled so that the [nginx](https://www.nginx.com/) will start serving a static page from a shared folder (web by default).

### Configuration

The [Environment](./src/environments) files allows to configure the applications as follow:

* `title`: Specify the title of the application
* `baseUrl`: Specify the base url of the station (e.g. if accessing from outside the local network). Must start by a dot

The list of applications shown in the home page can be configured in the [application.ts](./src/app/application.ts), the structure is as follows:

* `name`: The name of the application
* `icon`: The icon used for the application (See https://fontawesome.com/icons)
* `route`: The angular route used for the application; At the moment only the `redirect` route (which uses the url parameter) is available
* `url`: The url of the application
* `disabled`: If true the application will be disabled (the button will still be shown but not enabled)

Without recompiling nginx on the Synology NAS one can setup a machine in the local network and use the synology NAS directly as a reverse proxy (https://www.synology.com/en-us/knowledgebase/DSM/help/DSM/AdminCenter/application_appportalias).

### Deployment

You can directly deploy the app using docker with the following commands:  
```bash
docker run -e TITLE="Welcome to my landing page" -e BASE_URL=.my.domain.com -d -p 8080:8080 -t pmb69/dsm-landing:0.1.0
```
See [configuration](README.md#Configuration) for the `-e` parameters. 

The landing page is now available at `localhost:8080`

If you're not running on a Raspberry pi, you could be asked to add this parameter: `--platform linux/arm/v7`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build (which will automatically use the [environment.prod.ts](./src/environments/environment.prod.ts) configuration file).

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Docker build

Run `docker build --build-arg GITHUB_DIR=69pmb --build-arg GITHUB_PROJECT=dsm-landing  --build-arg GITHUB_HASH=master -t dsm-landing https://raw.githubusercontent.com/69pmb/dsm-landing/master/docker/Dockerfile`
