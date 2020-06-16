export interface IApplication {
  name: string;
  icon: string;
  url: string;
  isNas: boolean
  disabled?: boolean;
}

export const APP_LIST: IApplication[] = [
  { name: 'AllMovies', icon: 'ticket-alt', url: 'movies', isNas: true },
  { name: 'NgMusic', icon: 'music', url: 'ngmusic', isNas: true },
  { name: 'Admin', icon: 'cogs', url: ':5001', isNas: true },
  { name: 'Deluge', icon: 'download', url: 'deluge', isNas: true },
  { name: 'File', icon: 'file-alt', url: '/file', isNas: true },
  { name: 'Cook', icon: 'cookie', url: 'http://69pmb.github.io/Cook', isNas: false },
  { name: 'DotFiles', icon: 'code', url: 'http://69pmb.github.io/DotFiles', isNas: false },
  { name: 'Radarr', icon: 'film', url: 'radarr', isNas: true },
  { name: 'Sonarr', icon: 'tv', url: 'sonarr', isNas: true },
  { name: 'Bazarr', icon: 'closed-captioning', url: 'bazarr', isNas: true },
];