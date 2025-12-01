import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router";

interface SiteData {
  occasion: string;
  design: string;
  plan: string;
  title: string;
  message: string;
  photos: string[];
  music: string;
  musicUrl?: string;
}

function getSpotifyEmbedUrl(url?: string) {
  if (!url) return null;
  try {
    const u = new URL(url);
    const parts = u.pathname.split("/").filter(Boolean);
    if (u.hostname.includes("spotify") && parts.length >= 2) {
      const type = parts[0];
      const id = parts[1];
      return `https://open.spotify.com/embed/${type}/${id}`;
    }
  } catch (e) {
    return null;
  }
  return null;
}

function getYouTubeEmbedUrl(url?: string) {
  if (!url) return null;
  try {
    // youtu.be/ID or youtube.com/watch?v=ID
    const ytShort = url.match(/youtu\.be\/([-_A-Za-z0-9]+)/);
    if (ytShort) return `https://www.youtube.com/embed/${ytShort[1]}`;
    const ytMatch = url.match(/[?&]v=([-_A-Za-z0-9]+)/);
    if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}`;
  } catch (e) {
    return null;
  }
  return null;
}

function getDeezerEmbedUrl(url?: string) {
  if (!url) return null;
  try {
    const m = url.match(/deezer\.com\/(?:[a-z]{2}\/)?track\/(\d+)/);
    if (m) {
      const id = m[1];
      return `https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=false&width=700&height=92&type=track&id=${id}`;
    }
  } catch (e) {
    return null;
  }
  return null;
}

function looksLikeAudioUrl(url?: string) {
  if (!url) return false;
  return /\.mp3$|\.wav$|\.ogg$/i.test(url) || url.startsWith("http");
}

const SitePreview: React.FC = () => {
  const { id } = useParams();
  const [data, setData] = useState<SiteData | null>(null);
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (!id) return;
    const raw = localStorage.getItem(`mylove4you_site_${id}`);
    if (raw) {
      try {
        setData(JSON.parse(raw));
      } catch (e) {
        console.error("Failed parse site data", e);
      }
    }
  }, [id]);

  // Carousel auto-advance
  useEffect(() => {
    if (!data || !data.photos || data.photos.length <= 1) return;
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (data.photos ? (i + 1) % data.photos.length : 0));
    }, 3500);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [data]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Site não encontrado</h2>
          <p className="text-gray-500">ID inválido ou expirado.</p>
        </div>
      </div>
    );
  }

  // Build embed element based on selected provider and URL
  let embedElement: JSX.Element | null = null;
  if (data.music && data.music !== "none" && data.musicUrl) {
    if (data.music === "spotify") {
      const src = getSpotifyEmbedUrl(data.musicUrl);
      if (src)
        embedElement = (
          <div className="mx-auto max-w-md">
            <iframe
              title="spotify-player"
              src={src}
              width="100%"
              height="80"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />
          </div>
        );
    } else if (data.music === "youtube") {
      const src = getYouTubeEmbedUrl(data.musicUrl);
      if (src)
        embedElement = (
          <div className="mx-auto max-w-md">
            <iframe
              title="youtube-player"
              src={src}
              width="100%"
              height="315"
              frameBorder="0"
              allow="autoplay; encrypted-media; picture-in-picture"
            />
          </div>
        );
    } else if (data.music === "deezer") {
      const src = getDeezerEmbedUrl(data.musicUrl);
      if (src)
        embedElement = (
          <div className="mx-auto max-w-md">
            <iframe
              title="deezer-player"
              src={src}
              width="100%"
              height="92"
              frameBorder="0"
              allow="autoplay; encrypted-media; clipboard-write"
            />
          </div>
        );
    } else if (data.music === "amazon") {
      // Amazon Music doesn't have a simple public embed; try audio if direct
      if (looksLikeAudioUrl(data.musicUrl)) {
        embedElement = (
          <audio controls autoPlay className="w-full mt-2">
            <source src={data.musicUrl} />
            Seu navegador não suporta o elemento de áudio.
          </audio>
        );
      } else {
        embedElement = (
          <div className="mt-2">
            <a
              href={data.musicUrl}
              target="_blank"
              rel="noreferrer"
              className="text-pink-400 underline"
            >
              Abrir música no Amazon Music
            </a>
          </div>
        );
      }
    }

    // Fallback: if we didn't create an embed but the URL looks like direct audio, play it
    if (!embedElement && looksLikeAudioUrl(data.musicUrl)) {
      embedElement = (
        <audio controls autoPlay className="w-full mt-2">
          <source src={data.musicUrl} />
          Seu navegador não suporta o elemento de áudio.
        </audio>
      );
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
        <div className="p-4 bg-slate-800 border-b border-slate-700">
          <div className="text-sm text-gray-400">loveyuu.com/{id}</div>
        </div>

        {/* Carousel */}
        <div className="relative bg-black">
          {data.photos && data.photos.length > 0 ? (
            <div className="relative h-[60vw] md:h-96 lg:h-[500px] overflow-hidden">
              {data.photos.map((p, i) => (
                <img
                  key={i}
                  src={p}
                  alt={`photo-${i}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    i === index ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                />
              ))}

              {/* Controls */}
              {data.photos.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setIndex(
                        (idx) =>
                          (idx - 1 + data.photos.length) % data.photos.length
                      )
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
                    aria-label="Anterior"
                  >
                    ‹
                  </button>
                  <button
                    onClick={() =>
                      setIndex((idx) => (idx + 1) % data.photos.length)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
                    aria-label="Próxima"
                  >
                    ›
                  </button>
                </>
              )}
            </div>
          ) : (
            <div className="h-64 flex items-center justify-center bg-gradient-to-br from-red-600 to-orange-600">
              <span className="text-6xl">📷</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 bg-slate-900 text-center">
          <h1 className="text-3xl font-bold text-white mb-3">
            {data.title || "Nosso site"}
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {data.message}
          </p>

          <div className="mt-6">{embedElement}</div>

          <div className="mt-6 text-sm text-gray-400">
            Estilo: {data.design}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitePreview;
