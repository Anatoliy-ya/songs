export interface Song {
  id: string;
  track: string;
  albumName: string;
  artist: string;
  releaseDate: string;
  isrc: string;
  allTimeRank: number;
  trackScore: number;
  spotifyStreams: number;
  spotifyPlaylistCount: number;
  spotifyPlaylistReach: number;
  spotifyPopularity: number;
  youtubeViews: number;
  youtubeLikes: number;
  tiktokPosts: number;
  tiktokLikes: number;
  tiktokViews: number;
  youtubePlaylistReach: number;
  appleMusicPlaylistCount: number;
  airplaySpins: number;
  siriusXMSpins: number;
  deezerPlaylistCount: number;
  deezerPlaylistReach: number;
  amazonPlaylistCount: number;
  pandoraStreams: number;
  pandoraTrackStations: number;
  soundcloudStreams: number;
  shazamCounts: number;
  tidalPopularity: number;
  isExplicit: boolean;
}
