// api.ts
import { Platform } from "react-native";

export interface Playlist {
  playlist_id: number;
  playlist_name: string;
  playlist_description: string;
}

function getApiBaseUrl(): string {
  if (Platform.OS === "android") return "http://10.0.2.2:3000";
  if (Platform.OS === "ios") return "http://localhost:3000";
  return "http://192.168.0.65:3000/"; // web or real device (replace with your LAN IP)
}

// Fetch all playlists
export async function fetchPlaylists(): Promise<Playlist[]> {
  const response = await fetch(`${getApiBaseUrl()}/api/playlists`);
  if (!response.ok) throw new Error(`HTTP error! ${response.status}`);
  const data = await response.json();
  return Array.isArray(data) ? (data as Playlist[]) : [];
}

// Generate a new playlist based on mood
export async function generatePlaylist(mood: string): Promise<Playlist> {
  const response = await fetch(`${getApiBaseUrl()}/api/playlists/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ mood }),
  });
  if (!response.ok) throw new Error(`HTTP error! ${response.status}`);
  return response.json() as Promise<Playlist>;
}
