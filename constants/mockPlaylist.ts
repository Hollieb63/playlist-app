type Track = {
  song_title: string;
  artist: string;
  track: number;
};

type PlaylistType = {
  mood: string;
  name: string;
  tracks: Track[];
};

export const mockPlaylist: PlaylistType[] = [
  {
    mood: "Happy",
    name: "Happy Vibes",
    tracks: [
      {
        track: 1,
        song_title: "Happy",
        artist: "Pharrell Williams",
      },
      {
        track: 2,
        song_title: "Can't Stop the Feeling!",
        artist: "Justin Timberlake",
      },
      {
        track: 3,
        song_title: "Walking on Sunshine",
        artist: "Katrina & The Waves",
      },
    ],
  },
  {
    mood: "relaxed / calm",
    name: "chill vibes",
    tracks: [
      { song_title: "Ordinary", artist: "Alex Warren", track: 1 },
      {
        song_title: "I Love You, I'm Sorry",
        artist: "Gracie Abrams",
        track: 2,
      },
      { song_title: "Headphones On", artist: "Addison Rae", track: 3 },
    ],
  },
  {
    mood: "Energetic / Upbeat",
    name: "Pump Up Hits",
    tracks: [
      { song_title: "Fast", artist: "Demi Lovato", track: 1 },
      { song_title: "Anxiety", artist: "Doechii", track: 2 },
      { song_title: "Apt.", artist: "Rosé & Bruno Mars", track: 3 },
    ],
  },
  {
    mood: "Romance",
    name: "Date Night",
    tracks: [
      { song_title: "Another Life", artist: "Alabama Shakes", track: 1 },
      {
        song_title: "Something Beautiful",
        artist: "Miley Cyrus",
        track: 2,
      },
      { song_title: "Afterlife", artist: "Alex G", track: 3 },
    ],
  },
  {
    mood: "Party Anthems",
    name: "Dance Hits",

    tracks: [
      { song_title: "Summer High", artist: "Neon Hearts", track: 1 },
      { song_title: "All Night", artist: "Jax & The Crew", track: 2 },
      { song_title: "Turn It Up", artist: "Pulse Theory", track: 3 },
    ],
  },
  {
    mood: "Sad / Emotional",
    name: "Heartfelt Tunes",

    tracks: [
      { song_title: "Grey Horizon", artist: "Silent Echoes", track: 1 },
      {
        song_title: "Tears of Yesterday",
        artist: "Broken Strings",
        track: 2,
      },
      { song_title: "Lost Without You", artist: "Velvet Sky", track: 3 },
    ],
  },
  {
    mood: "Indie / Alternative",
    name: "Indie Gems",

    tracks: [
      { song_title: "Golden Hour Glow", artist: "The Wildwoods", track: 1 },
      { song_title: "Backroads", artist: "Riverstone", track: 2 },
      {
        song_title: "Shadows and Light",
        artist: "Crimson Pines",
        track: 3,
      },
    ],
  },
  {
    mood: "Focus / Study",
    name: "Concentration Boost",

    tracks: [
      { song_title: "Mind Flow", artist: "Zen Machine", track: 1 },
      { song_title: "Infinite Calm", artist: "Echo Drift", track: 2 },
      { song_title: "Deep Reading", artist: "Aurora Tides", track: 3 },
    ],
  },
  {
    mood: "Anger",
    name: "Release the Rage",

    tracks: [
      { song_title: "Break the Chains", artist: "Iron Veins", track: 1 },
      { song_title: "Burn It Down", artist: "Ash Riot", track: 2 },
      { song_title: "No Surrender", artist: "Static Fury", track: 3 },
    ],
  },
  {
    mood: "Motivation",
    name: "Get Moving",

    tracks: [
      { song_title: "Rise Again", artist: "Pulse Theory", track: 1 },
      { song_title: "Unstoppable", artist: "Skyline Drive", track: 2 },
      { song_title: "Keep Climbing", artist: "Nova Lights", track: 3 },
    ],
  },
  {
    mood: "Boredom",
    name: "Something New",

    tracks: [
      { song_title: "Weird But Fun", artist: "Paper Planets", track: 1 },
      { song_title: "Lazy Daze", artist: "Cloud Lounge", track: 2 },
      { song_title: "Daydream Circus", artist: "Neon Oddities", track: 3 },
    ],
  },
];
