export interface IApplication {
  name: string;
  icon: string;
  url: string;
  localUrl?: string;
  isAdmin: boolean;
}

export const APP_LIST: IApplication[] = [
  { name: 'AllMovies', icon: 'ticket-alt', url: 'allmovies', isAdmin: false, localUrl: '7575' },
  { name: 'NgMusic', icon: 'music', url: 'ngmusic', isAdmin: false, localUrl: '2525' },
  { name: 'Admin', icon: 'cogs', url: 'admin', isAdmin: true, localUrl: '5001' },
  { name: 'Moments', icon: 'atom', url: 'moments', isAdmin: true, localUrl: '10005' },
  { name: 'Videos', icon: 'file-video', url: 'video', isAdmin: true, localUrl: '9008' },
  { name: 'Files', icon: 'file-alt', url: 'file', isAdmin: true, localUrl: '7001' },
  { name: 'Photos', icon: 'camera-retro', url: 'photo', isAdmin: true, localUrl: '443/photo' },
  { name: 'Cook', icon: 'cookie', url: 'https://69pmb.github.io/Cook', isAdmin: false },
  { name: 'DotFiles', icon: 'code', url: 'https://69pmb.github.io/DotFiles', isAdmin: false },
  { name: 'Deluge', icon: 'download', url: 'deluge', isAdmin: false, localUrl: '8112' },
  { name: 'Radarr', icon: 'film', url: 'radarr', isAdmin: false, localUrl: '8310' },
  { name: 'Sonarr', icon: 'tv', url: 'sonarr', isAdmin: false, localUrl: '8989' },
];
