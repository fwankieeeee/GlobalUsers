import SafeScreen from '@/components/SafeScreen';
import UserList from '@/components/UserList';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeScreen>
        <UserList />
      </SafeScreen>
    </SafeAreaProvider>
  );
}
