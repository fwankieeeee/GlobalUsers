import { StatusBar } from "expo-status-bar";
import { Platform, StatusBar as RNStatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SafeScreenProps } from "./types";

const SafeScreen = ({ children }: SafeScreenProps) => {
  return (
    <SafeAreaView
      mode="padding"
      className={`flex-1 bg-white ${
        Platform.OS === "android"
          ? `pt-[${RNStatusBar.currentHeight}px]`
          : `pt-0`
      }`}
    >
      <StatusBar style="auto" />
      {children}
    </SafeAreaView>
  );
};
export default SafeScreen;
