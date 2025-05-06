import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import { useCustomFonts } from './src/hooks/useFonts';
import FarmerDetailPage from './src/screens/FarmerDetailScreen';


export default function App() {
  const { fontsLoaded } = useCustomFonts();

  if (!fontsLoaded) {
    return <View />;
  }

  return (
    
      <View style={styles.container}>
        <FarmerDetailPage />
        <StatusBar style="auto" />
      </View>
   
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    overflow: 'visible',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    overflow: 'visible',
  },
});
