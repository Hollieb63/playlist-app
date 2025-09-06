import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { List } from "react-native-paper";
import { fetchPlaylists, generatePlaylist, Playlist } from "./api";
import { mockPlaylists } from "@/constants/mockPlaylist";

export default function Form() {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [post, setPost] = useState<Playlist[]>([]);
  const [mood, setMood] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // Load playlists on mount
  useEffect(() => {
    loadPlaylists();
  }, []);

  async function loadPlaylists(): Promise<void> {
    setLoading(true);
    try {
      const playlists = await fetchPlaylists();
      setPost(playlists);
    } catch (err) {
      console.error("Failed to fetch playlists:", err);
    } finally {
      setLoading(false);
    }
  }

  const handleGeneratePlaylist = async () => {
    // You can replace this with the API call later
    const generated = mockPlaylists.find((p) => p.mood === mood.toLowerCase());

    if (generated) {
      // Map mock playlist to Playlist type
      setPlaylists([
        {
          playlist_id: Number(generated.id),
          playlist_name: generated.name,
          playlist_description: `Mood: ${generated.mood}`,
        },
      ]);
    } else {
      alert("No playlist matches that mood!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Personalise your playlist with our mood generator!
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter mood"
        value={mood}
        onChangeText={setMood}
      />

      <TouchableOpacity style={styles.button} onPress={handleGeneratePlaylist}>
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Generate Playlist</Text>
        )}
      </TouchableOpacity>

      <List.Section title="Playlists">
        {post.map((playlist) => (
          <List.Item
            key={playlist.playlist_id}
            title={playlist.playlist_name}
            description={playlist.playlist_description}
            left={(props) => <List.Icon {...props} icon="music" />}
            onPress={() =>
              console.log(`Selected playlist: ${playlist.playlist_name}`)
            }
          />
        ))}
      </List.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "70%",
    alignItems: "center",
    backgroundColor: "gray",
  },
  text: {
    marginTop: 30,
    fontSize: 20,
    color: "#fff",
  },
  input: {
    fontSize: 16,
    width: "30%",
    height: 50,
    borderColor: "black",
    borderWidth: 1,
    marginTop: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "rgba(6, 7, 7, 1)",
    borderRadius: 5,
    width: "30%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
