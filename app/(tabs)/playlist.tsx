import { useState } from "react";
import { mockPlaylist } from "@/constants/mockPlaylist";
import { TamaguiProvider, Theme } from "tamagui";
import config from "../tamagui.config";
import { Button, YStack, XStack, Text, Input, Card, ScrollView } from "tamagui";

export default function Playlist() {
  const [mood, setMood] = useState("");
  const [playlists, setPlaylists] = useState<PlaylistType[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const moodMap: Record<string, string> = {
    chill: "relaxed / calm",
    relaxed: "relaxed / calm",
    calm: "relaxed / calm",
    happy: "Happy",
    joy: "Happy",
    sad: "Sad / Emotional",
    emotional: "Sad / Emotional",
    angry: "Anger",
    anger: "Anger",
    romance: "Romantic Evening",
    romantic: "Romantic Evening",
    study: "Focus / Study",
    focus: "Focus / Study",
    bored: "Boredom",
    boredom: "Boredom",
    motivate: "Motivation",
    motivation: "Motivation",
  };

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

  const handleGeneratePlaylist = () => {
    setSubmitted(true);
    const normalizedMood = moodMap[mood.toLowerCase()] || mood;
    const matched = mockPlaylist.filter(
      (p) => p.mood.toLowerCase() === normalizedMood.toLowerCase()
    );

    setPlaylists(matched.length > 0 ? matched : mockPlaylist);
  };

  return (
    <TamaguiProvider config={config}>
      <YStack
        flex={1}
        justifyContent="center"
        alignItems="center"
        padding="$4"
        space="$4"
        backgroundColor="$background"
      >
        <Text fontFamily={"$body"} fontSize={30} fontWeight="700">
          Generate a Playlist Based on Your Mood
        </Text>

        <Input
          placeholder="e.g., chill, happy, sad, etc."
          alignContent="center"
          fontSize={"$3"}
          fontFamily={"$body"}
          padding="$3"
          width={300}
          value={mood}
          onChangeText={setMood}
          borderColor={"black"}
        />

        <Button
          size={60}
          fontSize={20}
          fontWeight={500}
          onPress={handleGeneratePlaylist}
        >
          Generate Playlist
        </Button>

        {mood !== "" && playlists.length > 0 && (
          <YStack space="$3" marginTop="$4" width="100%" maxWidth={500}>
            {playlists.map((playlist) => (
              <Card key={playlist.name} padding="$4" bordered>
                <Text fontSize={"$3"} fontWeight="600">
                  Mood: {playlist.mood}
                </Text>

                {playlist.tracks.map((track) => (
                  <Text key={track.song_title}>
                    {track.track}. {track.song_title} - {track.artist}
                  </Text>
                ))}
              </Card>
            ))}
          </YStack>
        )}

        {submitted && playlists.length === 0 && (
          <Text fontSize={"$3"} color="$gray10">
            No playlists found for "{mood}". Try another mood.
          </Text>
        )}
      </YStack>
    </TamaguiProvider>
  );
}
