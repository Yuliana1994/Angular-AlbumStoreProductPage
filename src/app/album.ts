import { Track } from './track'

export interface AlbumInfo {
  name: string
  releaseDate: string
  coverImage: string
  tracks: Track[]
}
export interface Album {
  id: string
  artist: string
  album: AlbumInfo
}
