import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import { useCustomFonts } from './src/hooks/useFonts';
import FarmerDetailPage from './src/screens/FarmerDetailScreen';
import FarmerProduceDetailScreen from './src/screens/FarmerProduceDetailScreen';

export default function App() {
  const { fontsLoaded } = useCustomFonts();

  if (!fontsLoaded) {
    return <View />;
  }

  return (
    <View style={styles.container}>
      <FarmerProduceDetailScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    overflow: 'visible',
  },
});
