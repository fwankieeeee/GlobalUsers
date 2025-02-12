import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

type SafeScreenProps = {
  children: React.ReactNode;
};

const SafeScreen = ({ children }: SafeScreenProps) => {
  return (
    <SafeAreaView mode="padding" style={styles.layoutContainer}>
      <StatusBar style="inverted" />
      {children}
    </SafeAreaView>
  );
};
export default SafeScreen;
