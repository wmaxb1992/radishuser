import { StyleSheet, FlatList, View } from 'react-native';
import FarmCard from '../../components/FarmCard';
import farms from '../../../assets/data/farms.json';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={farms}
        renderItem={({ item }) => <FarmCard farm={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContent: {
    padding: 16,
  },
});
