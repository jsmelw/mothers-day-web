"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type WebAudioWindow = Window & {
  webkitAudioContext?: typeof AudioContext;
};

type AmbientNodes = {
  context: AudioContext;
  gain: GainNode;
  oscillators: OscillatorNode[];
};

export function AmbientAudioToggle() {
  const [playing, setPlaying] = useState(false);
  const nodes = useRef<AmbientNodes | null>(null);

  useEffect(() => {
    return () => {
      nodes.current?.oscillators.forEach((oscillator) => oscillator.stop());
      nodes.current?.context.close();
      nodes.current = null;
    };
  }, []);

  const startAudio = async () => {
    const AudioContextClass = window.AudioContext || (window as WebAudioWindow).webkitAudioContext;

    if (!AudioContextClass) {
      return;
    }

    const context = new AudioContextClass();
    const gain = context.createGain();
    gain.gain.setValueAtTime(0.0001, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.035, context.currentTime + 1.2);
    gain.connect(context.destination);

    const frequencies = [196, 246.94, 329.63];
    const oscillators = frequencies.map((frequency, index) => {
      const oscillator = context.createOscillator();
      const filter = context.createBiquadFilter();

      oscillator.type = index === 0 ? "sine" : "triangle";
      oscillator.frequency.value = frequency;
      filter.type = "lowpass";
      filter.frequency.value = 520 + index * 120;
      oscillator.connect(filter);
      filter.connect(gain);
      oscillator.start();

      return oscillator;
    });

    nodes.current = { context, gain, oscillators };
    setPlaying(true);
  };

  const stopAudio = async () => {
    const current = nodes.current;

    if (!current) {
      setPlaying(false);
      return;
    }

    current.gain.gain.exponentialRampToValueAtTime(0.0001, current.context.currentTime + 0.55);

    window.setTimeout(() => {
      current.oscillators.forEach((oscillator) => oscillator.stop());
      current.context.close();
      if (nodes.current === current) {
        nodes.current = null;
      }
    }, 650);

    setPlaying(false);
  };

  return (
    <button
      aria-label={playing ? "Turn ambient sound off" : "Turn ambient sound on"}
      className="fixed bottom-5 left-5 z-50 grid h-11 w-11 place-items-center rounded-full border border-white/55 bg-white/35 text-ink shadow-[0_14px_40px_rgba(62,47,53,0.12)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-white/55"
      onClick={playing ? stopAudio : startAudio}
      type="button"
    >
      {playing ? <Volume2 size={18} strokeWidth={1.7} /> : <VolumeX size={18} strokeWidth={1.7} />}
    </button>
  );
}
