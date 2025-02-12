import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeScreen from './src/components/SafeScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeScreen>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      </SafeScreen>
    </SafeAreaProvider>
  );
}
