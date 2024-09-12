import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as WebBrowser from "expo-web-browser";

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useCallback, useState } from 'react';

function isValidUrl(urlString: string) {
      try { 
          return Boolean(new URL(urlString)); 
      }
      catch(e){ 
          return false; 
      }
  }

export default function HomeScreen() {
  const [url, setUrl] = useState(process.env.EXPO_PUBLIC_TEST_URL ?? "");

  const open = useCallback(() => {
    if (isValidUrl(url)) WebBrowser.openBrowserAsync(url);
  }, [url]);

  return (
    <ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Test In-App Browser</ThemedText>

        <TextInput value={url} onChangeText={setUrl} style={styles.input} />

        <TouchableOpacity style={styles.button} onPress={open}>
          <ThemedText>Test</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 32,
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  input: {
    width: "80%",
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "lightblue"
  }
});
