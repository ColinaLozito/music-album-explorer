import { AlbumDetails } from "../../services/types";

export interface AlbumDetailContextType {
  albumDetail: AlbumDetails | null;
  setAlbumDetail: (detail: AlbumDetails) => void;
  clearAlbumDetail: () => void;
}