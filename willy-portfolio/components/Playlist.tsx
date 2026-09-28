"use client";

import { useState } from "react";
import { playlist } from "@/data/playlist";
import SectionLabel from "@/components/decorative/SectionLabel";

export default function Playlist() {
  const [activeId, setActiveId] = useState(playlist[0].id);
  const activeTrack =
    playlist.find((track) => track.id === activeId) ?? playlist[0];

  return (
    <section
      id="playlist"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24"
    >
      <SectionLabel index="06" filename="WILLYS_PLAYLIST.mp3" />

      <div className="crt-border grid grid-cols-1 gap-0 overflow-hidden bg-white md:grid-cols-[280px,1fr]">
        {/* Player face */}
        <div className="flex flex-col justify-between gap-6 border-b border-ink bg-ink p-6 text-paper md:border-b-0 md:border-r">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper/50">
              now playing
            </p>
            <p className="mt-2 truncate text-lg font-bold">
              {activeTrack.title}
            </p>
            <p className="truncate font-mono text-xs text-paper/60">
              {activeTrack.artist}
            </p>
          </div>

          <div>
            <div
              className="h-1.5 w-full overflow-hidden rounded-full bg-paper/20"
              role="img"
              aria-label="Playback progress, display only"
            >
              <div className="h-full w-[38%] rounded-full bg-blue-soft" />
            </div>
            <div className="mt-1.5 flex justify-between font-mono text-[10px] text-paper/60">
              <span>01:24</span>
              <span>{activeTrack.duration}</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 font-mono text-xs">
            <span aria-hidden="true">|◁◁</span>
            <span
              className="flex h-8 w-8 items-center justify-center border border-paper/40"
              aria-hidden="true"
            >
              ▶
            </span>
            <span aria-hidden="true">▷▷|</span>
          </div>
          <p className="text-center font-mono text-[9px] uppercase tracking-[0.1em] text-paper/40">
            display only — tap a track, no audio plays
          </p>
        </div>

        {/* Track list */}
        <ul className="divide-y divide-ink/10">
          {playlist.map((track) => {
            const isActive = track.id === activeTrack.id;
            return (
              <li key={track.id}>
                <button
                  type="button"
                  onClick={() => setActiveId(track.id)}
                  aria-pressed={isActive}
                  className={`flex w-full items-center justify-between gap-4 px-5 py-3.5 text-left transition-colors ${
                    isActive ? "bg-blue-pale" : "hover:bg-paper"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-xs text-ink/50">
                      {String(track.id).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-ink">
                        {track.title}
                      </span>
                      <span className="block font-mono text-[11px] text-ink/50">
                        {track.artist}
                      </span>
                    </span>
                  </span>
                  <span className="font-mono text-[11px] text-ink/50">
                    {isActive ? "▶ playing" : track.duration}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
