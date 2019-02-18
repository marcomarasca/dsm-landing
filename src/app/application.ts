import {environment} from '../environments/environment';

export class Application {
  name: string;
  icon: string;
  url: string;
}

export const APP_LIST = [
  {name: 'Live', icon: 'tv', route: '/live'},
  {name: 'Photo', icon: 'images', route: 'redirect', url: environment.baseUrl + '/photo'},
  {name: 'Files', icon: 'file-code', route: 'redirect', url: environment.baseUrl + '/file'},
  {name: 'Video', icon: 'video', route: 'redirect', url: environment.baseUrl + '/video'},
  {name: 'Download', icon: 'download', route: 'redirect', url: environment.baseUrl + '/download'},
  {name: 'Admin', icon: 'cogs', route: 'redirect', url: environment.baseUrl + ':5001'}
];
