# Synology DSM Landing Page

Simple responsive [Angular](https://angular.io) application built with [Bootstrap](https://getbootstrap.com/) that functions as a landing page to access the [Synology DiskStation Manager](https://www.synology.com/en-us/dsm) services from a Synology NAS (Tested on [DS218j](https://www.synology.com/en-us/products/DS218j)).

## Getting Started

### Enabling WebStation

The [WebStation](https://www.synology.com/en-global/dsm/packages/WebStation) package needs to be enabled so that the [nginx](https://www.nginx.com/) will start serving a static page from a shared folder (web by default).

### Configuration

The [Environment](./src/environments) files allows to configure the applications as follow:

* `title`: Specify the title of the application
* `baseUrl`: Specify the base url of the station (e.g. if accessing from outside the local network)
* `streamUrl`: Specify the url of an [HLS](https://en.wikipedia.org/wiki/HTTP_Live_Streaming) stream for the [live](#live-section) section
* `pingTimeout`: The default timeout used to check if the stream is alive
* `pingFrequency`: The default interval used to ping the stream

The list of applications shown in the home page can be configured in the [application.ts](./src/app/application.ts), the structure is as follows:

* `name`: The name of the application
* `icon`: The icon used for the application (See https://fontawesome.com/icons)
* `route`: The angular route used for the application; At the moment only the `redirect` route (which uses the url parameter) and the `live` route are available
* `url`: The url of the application
* `disabled`: If true the application will be disabled (the button will still be shown but not enabled)

### Live Page

The application uses [Videogular](https://videogular.github.io/videogular2/) to show an optional live stream coming from an [HLS](https://en.wikipedia.org/wiki/HTTP_Live_Streaming) source (this was implemented to add a live stream of a [GoPro](https://gopro.com/) camera). If the stream is alive the live section will embed a video player that auto play the stream, the application automatically detects if the stream is alive.

A simple way to setup an hls stream is to use [nginx](https://www.nginx.com/) compiled with the [RTMP Module](https://github.com/arut/nginx-rtmp-module). For example the [GoPro Hero 7](https://gopro.com/) allows to stream live to a [rtmp](https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol) server. Nging would function as the rtmp server that can broadcast to clients and at the same time create the HLS stream for this application.

Relevant sections for the nginx configuration:

```
rtmp {
    server {
        listen 1935;
        chunk_size 4096;

        application live {
            live on;
            record off;
            hls on;
            hls_path "_path_to_the_hls_fragments_folder_";
            # publishing only from a specific IP address (e.g. the GoPro connected to the local network)
            allow publish 192.168.1.150;
            allow publish 127.0.0.1;
            deny publish all;
            allow play all;
        }
    }
}
```

```
http {
    ...
    server {
        listen       8080;
        location /hls {
            # CORS setup
            add_header 'Access-Control-Allow-Origin' '*' always;
            add_header 'Access-Control-Expose-Headers' 'Content-Length';

            # allow CORS preflight requests
            if ($request_method = 'OPTIONS') {
                add_header 'Access-Control-Allow-Origin' '*';
                add_header 'Access-Control-Allow-Methods' 'OPTIONS';
                add_header 'Access-Control-Max-Age' 1728000;
                add_header 'Content-Type' 'text/plain charset=UTF-8';
                add_header 'Content-Length' 0;
                return 204;
            }
            # Serve HLS fragments
            types {
                application/vnd.apple.mpegurl m3u8;
                video/mp2t ts;
            }
            root "_path_to_the_hls_fragments_folder_";
            add_header Cache-Control no-cache;
        }
        ...
    }
}
```

Without recompiling nginx on the Synology NAS one can setup a machine in the local network and use the synology NAS directly as a reverse proxy (https://www.synology.com/en-us/knowledgebase/DSM/help/DSM/AdminCenter/application_appportalias).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build (which will automatically use the [environment.prod.ts](./src/environments/environment.prod.ts) configuration file).

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

