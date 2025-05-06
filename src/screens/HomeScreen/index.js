import { StyleSheet, FlatList } from 'react-native';
import FarmCard from '../../components/FarmCard';
import farms from '../../../assets/data/farms.json';

export default function HomeScreen() {
  return (
      <FlatList
        data={farms}
        renderItem={({ item }) => <FarmCard farm={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        keyExtractor={(item) => item.id}
      />
  );
}

const styles = StyleSheet.create({});
