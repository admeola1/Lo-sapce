"use client";
import React, { Fragment, useEffect, useRef, useState, Component } from "react";

export default function MusicPlayer() : React.JSX.Element  {
  const tracks = [
    {
      id: 1,
      thumbnail: "/LofiThumbnails/ao20kkkmte9b1.jpg",
      path: "/AudioAssets/[no copyright music]  In Dreamland   background music.mp4",
      Title: "In Dreamland ",
    },
    {
      id: 2,
      thumbnail: "/LofiThumbnails/243600072_orig.jpg",
      path: "/AudioAssets/massobeats - floral (royalty free lofi music).mp4",
      Title: "floral",
    },
    {
      id: 3,
      thumbnail: "/LofiThumbnails/lofi-bedroom-night-2048x2048-15300.jpg",
      path: "AudioAssets/massobeats - gift (royalty free lofi music).mp4",
      Title: "Gift",
    },
    {
      id: 4,
      thumbnail: "/LofiThumbnails/RIO lofi Lofi chill wallpaper.jpeg",
      path: "/AudioAssets/massobeats - honey jam (royalty free lofi music).mp4",
      Title: "Honey Jam",
    },
  ];
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [songState, setsongState] = useState("");

  const playNext = () => {
    const nextIndex = (currentTrackIndex + 1) % tracks.length;
    setCurrentTrackIndex(nextIndex);
    setsongState("Now Playing");
  };

  const playPrevious = () => {
    const prevIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    setCurrentTrackIndex(prevIndex);
    setsongState("Now Playing");
  };

  const playSong = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setsongState("Now Playing");
    }
  };
  const PauseSong = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setsongState("Song Paused");
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load(); // Load the new source
      audioRef.current.play().catch((e) => console.error("Error playing:", e));
      setsongState("Now Playing");
    }
  }, [currentTrackIndex]);

  const track = tracks[currentTrackIndex];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white rounded-t-xl shadow-lg p-4 ">
      <audio ref={audioRef} key={track.path}>
        <source src={track.path} type="video/mp4" />
        Your browser does not support the video tag.
      </audio>

      <div className="flex justify-between items-center">
        <img
          className="w-12 h-12 rounded-full"
          src={track.thumbnail}
          alt="Track thumbnail"
        />
        <div className="flex-1 min-w-0 mx-3">
          <p className="text-gray-900 text-sm font-medium truncate">
            {track.Title}
          </p>
          <p className="text-gray-500 text-xs truncate">{songState}</p>
        </div>
        <div className="flex">
          <button
            onClick={playPrevious}
            className="text-blue-500 hover:text-blue-700 mx-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M8.5 4.75a.75.75 0 0 0-1.107-.66l-6 3.25a.75.75 0 0 0 0 1.32l6 3.25a.75.75 0 0 0 1.107-.66V8.988l5.393 2.921A.75.75 0 0 0 15 11.25v-6.5a.75.75 0 0 0-1.107-.66L8.5 7.013V4.75Z" />
            </svg>
          </button>
          <button
            onClick={playSong}
            className="text-green-500 hover:text-green-700 mx-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm-.847-9.766A.75.75 0 0 0 6 5.866v4.268a.75.75 0 0 0 1.153.633l3.353-2.134a.75.75 0 0 0 0-1.266L7.153 5.234Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <button
            onClick={PauseSong}
            className="text-red-500 hover:text-red-700 mx-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM5.5 5.5A.5.5 0 0 1 6 5h.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5v-5Zm4-.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h.5a.5.5 0 0 0 .5-.5v-5A.5.5 0 0 0 10 5h-.5Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <button
            onClick={playNext}
            className="text-blue-500 hover:text-blue-700 mx-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M2.53 3.956A1 1 0 0 0 1 4.804v6.392a1 1 0 0 0 1.53.848l5.113-3.196c.16-.1.279-.233.357-.383v2.73a1 1 0 0 0 1.53.849l5.113-3.196a1 1 0 0 0 0-1.696L9.53 3.956A1 1 0 0 0 8 4.804v2.731a.992.992 0 0 0-.357-.383L2.53 3.956Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
