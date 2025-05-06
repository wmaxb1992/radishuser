import { StyleSheet, FlatList } from 'react-native';
import FarmItem from '../../components/FarmItem';
import farms from '../../../assets/data/farms.json';

export default function HomeScreen() {
  return (
      <FlatList
        data={farms}
        renderItem={({ item }) => <FarmItem farm={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        keyExtractor={(item) => item.id}
      />
  
  );
}

const styles = StyleSheet.create({});
