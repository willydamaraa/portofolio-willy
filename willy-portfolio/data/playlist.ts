import { PlaylistTrack } from "@/types";

// Visual only — this list does not play audio. Clicking a track just
// changes which one is shown as "now playing". See components/Playlist.tsx.
export const playlist: PlaylistTrack[] = [
  { id: 1, title: "Ditto", artist: "NewJeans", duration: "03:14" },
  { id: 2, title: "Attention", artist: "NewJeans", duration: "03:04" },
  { id: 3, title: "Hype Boy", artist: "NewJeans", duration: "03:01" },
  { id: 4, title: "Super Shy", artist: "NewJeans", duration: "02:34" },
];
