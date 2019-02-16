export class Application {
  name: string;
  icon: string;
  url: string;
}

export const APP_LIST = [
  {name: 'Photo', icon: 'images', url: 'https://hedgycloud.synology.me/photo'},
  {name: 'Files', icon: 'file-code', url: 'https://hedgycloud.synology.me/file'},
  {name: 'Video', icon: 'video', url: 'https://hedgycloud.synology.me/video'},
  {name: 'Download', icon: 'download', url: 'https://hedgycloud.synology.me/download'},
  {name: 'Settings', icon: 'cogs', url: 'https://hedgycloud.synology.me:5001'}
];
