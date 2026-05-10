export type Memory = {
  id: string;
  title: string;
  eyebrow: string;
  body: string;
  note: string;
  imageSrc: string;
  flower: {
    x: string;
    y: string;
    scale: number;
    delay: number;
    color: "blush" | "lavender" | "peach" | "sage";
  };
};

export type Letter = {
  id: string;
  title: string;
  preview: string;
  body: string;
  x: string;
  y: string;
  delay: number;
};

export type TimelineMoment = {
  id: string;
  title: string;
  body: string;
  imageSrc: string;
  side: "left" | "right";
  tilt: "left" | "right";
};

export const memories: Memory[] = [
  {
    id: "morning-light",
    title: "A Little Garden of Us",
    eyebrow: "a memory in bloom",
    body: "A quiet keepsake from the garden of everything you have given: comfort, laughter, patience, and the feeling of being deeply loved.",
    note: "You made ordinary moments feel safe.",
    imageSrc: "/images/memories/memory1.jpg",
    flower: {
      x: "18%",
      y: "57%",
      scale: 0.96,
      delay: 0,
      color: "blush",
    },
  },
  {
    id: "brave-lesson",
    title: "The Strength You Gave",
    eyebrow: "soft courage",
    body: "A memory for the strength you carried with grace, and for the way your love quietly became the ground beneath us.",
    note: "Everything good in me began with you.",
    imageSrc: "/images/memories/memory2.jpg",
    flower: {
      x: "38%",
      y: "40%",
      scale: 1.08,
      delay: 0.4,
      color: "lavender",
    },
  },
  {
    id: "hidden-sacrifice",
    title: "The Unseen Things",
    eyebrow: "quiet love",
    body: "For every sacrifice that happened in the background, every tired day you still showed up, and every prayer we may never fully know.",
    note: "So much of life was held by your love.",
    imageSrc: "/images/memories/memory4.jpg",
    flower: {
      x: "61%",
      y: "62%",
      scale: 1,
      delay: 0.8,
      color: "peach",
    },
  },
  {
    id: "rain-song",
    title: "Always Home",
    eyebrow: "where love stays",
    body: "A warm memory for the way you turned every place into home, and every difficult season into something we could pass through together.",
    note: "Your presence is still the calmest place.",
    imageSrc: "/images/memories/memory8.jpg",
    flower: {
      x: "82%",
      y: "45%",
      scale: 1.12,
      delay: 1.2,
      color: "sage",
    },
  },
];

export const letters: Letter[] = [
  {
    id: "thank-you",
    title: "For Every Unseen Thing",
    preview: "A note for every quiet sacrifice.",
    body: "Thank you for everything you have done for us,\neven on the days you were tired.\nYou carried so much without ever complaining.\nFor every unseen sacrifice\u2026 thank you, Mama.",
    x: "21%",
    y: "38%",
    delay: 0,
  },
  {
    id: "because-of-you",
    title: "Because of You",
    preview: "A note about everything you helped grow.",
    body: "Because of you, I stand where I stand today.\nYou are the one who taught me values, strength, and kindness.\nEverything good in me began with you, Maa.",
    x: "48%",
    y: "24%",
    delay: 0.35,
  },
  {
    id: "always-home",
    title: "Always Home",
    preview: "A note for the home your love created.",
    body: "Thank you for always being there for our family.\nThank you for making every place feel like home.\nFor everything you gave us \u2014 thank you, Mama.",
    x: "71%",
    y: "43%",
    delay: 0.7,
  },
];

export const timelineMoments: TimelineMoment[] = [
  {
    id: "held-close",
    title: "Held Close",
    body: "Some memories do not need a date. They simply stay warm.",
    imageSrc: "/images/timeline/memory3.jpg",
    side: "left",
    tilt: "left",
  },
  {
    id: "small-laughter",
    title: "Small Laughter",
    body: "The soft joy that made the years feel lighter.",
    imageSrc: "/images/timeline/memory5.jpg",
    side: "right",
    tilt: "right",
  },
  {
    id: "steady-hands",
    title: "Steady Hands",
    body: "Love quietly doing its work beneath everything.",
    imageSrc: "/images/timeline/memory6.jpg",
    side: "left",
    tilt: "right",
  },
  {
    id: "through-seasons",
    title: "Through Seasons",
    body: "Every change felt gentler because you were there.",
    imageSrc: "/images/timeline/memory7.jpg",
    side: "right",
    tilt: "left",
  },
  {
    id: "quiet-glow",
    title: "Quiet Glow",
    body: "The kind of care that shines without asking to be seen.",
    imageSrc: "/images/timeline/memory9.jpg",
    side: "left",
    tilt: "left",
  },
  {
    id: "still-blooming",
    title: "Still Blooming",
    body: "All of it growing forward, rooted in you.",
    imageSrc: "/images/timeline/memory10.jpg",
    side: "right",
    tilt: "right",
  },
];
