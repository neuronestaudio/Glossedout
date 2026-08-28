import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { Play, Volume2, VolumeX } from 'lucide-react';

interface ScrollVideoProps {
  src: string;
  poster: string;
  /** Describes the footage for anyone who can't see it. */
  label: string;
  children?: React.ReactNode;
}

/* The file is only fetched once the viewer is within a screen of it. Committing a
   src up front would cost every visitor the download whether or not they scroll
   this far — which on a phone is the whole data budget for the page. */
const APPROACH_MARGIN = '400px';
/* Start once half the frame is on screen, so a video clipped at the very edge of
   the viewport doesn't play to nobody. */
const PLAY_RATIO = 0.5;

const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';

/* Read as an external store rather than effect-into-state: it is right on the
   first client render, it follows the setting if the visitor changes it, and it
   has a server snapshot so the pre-render doesn't touch `window`. */
function usePrefersReducedMotion() {
  return useSyncExternalStore(
    onChange => {
      const mq = window.matchMedia(REDUCED_MOTION);
      mq.addEventListener('change', onChange);
      return () => mq.removeEventListener('change', onChange);
    },
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => false,
  );
}

export default function ScrollVideo({ src, poster, label, children }: ScrollVideoProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(false);
  const reduced = usePrefersReducedMotion();
  const [muted, setMuted] = useState(true);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const approach = new IntersectionObserver(
      entries => {
        if (entries.some(e => e.isIntersecting)) {
          setLoaded(true);
          approach.disconnect();
        }
      },
      { rootMargin: APPROACH_MARGIN },
    );
    const playback = new IntersectionObserver(
      entries => setVisible(entries.some(e => e.isIntersecting)),
      { threshold: PLAY_RATIO },
    );
    approach.observe(wrap);
    playback.observe(wrap);
    return () => { approach.disconnect(); playback.disconnect(); };
  }, []);

  /* Play/pause is driven off state rather than from inside the observer, so it
     can't race the render that attaches the src. */
  useEffect(() => {
    const el = videoRef.current;
    if (!el || !loaded) return;
    if (visible && !reduced) {
      /* Set imperatively. This page is pre-rendered and the server HTML carries
         no `muted` attribute, so iOS Safari would treat the first play() as an
         unmuted autoplay and refuse it. */
      el.muted = muted;
      el.play().then(() => setBlocked(false)).catch(() => setBlocked(true));
    } else {
      el.pause();
    }
  }, [loaded, visible, reduced, muted]);

  return (
    <div className="svid-frame" ref={wrapRef}>
      <video
        ref={videoRef}
        src={loaded ? src : undefined}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        aria-label={label}
        /* Controls are the fallback for anyone we won't autoplay at. */
        controls={reduced}
      />

      {blocked && !reduced && (
        <button
          type="button"
          className="svid-btn svid-btn--play"
          onClick={() => videoRef.current?.play().then(() => setBlocked(false)).catch(() => {})}
          aria-label="Play the video"
        >
          <Play size={26} fill="currentColor" strokeWidth={0} />
        </button>
      )}

      {!reduced && (
        <button
          type="button"
          className="svid-btn svid-btn--mute"
          onClick={() => setMuted(m => !m)}
          aria-label={muted ? 'Unmute the video' : 'Mute the video'}
        >
          {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      )}

      {children}
    </div>
  );
}
