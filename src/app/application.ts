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
  { name: 'Deluge', icon: 'download', url: 'deluge', isAdmin: false, localUrl: '8112' },
  { name: 'File', icon: 'file-alt', url: 'file', isAdmin: true, localUrl: '7001' },
  { name: 'Cook', icon: 'cookie', url: 'https://69pmb.github.io/Cook', isAdmin: false },
  { name: 'DotFiles', icon: 'code', url: 'https://69pmb.github.io/DotFiles', isAdmin: false },
  { name: 'Radarr', icon: 'film', url: 'radarr', isAdmin: false, localUrl: '8310' },
  { name: 'Sonarr', icon: 'tv', url: 'sonarr', isAdmin: false, localUrl: '8989' },
  { name: 'Bazarr', icon: 'closed-captioning', url: 'bazarr', isAdmin: false, localUrl: '6767' },
];
