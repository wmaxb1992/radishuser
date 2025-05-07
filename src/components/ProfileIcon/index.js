import { TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ProfileIcon = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => navigation.navigate('Profile')}
    >
      <MaterialCommunityIcons 
        name="account" 
        size={26} 
        color="#694fad" 
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 1000,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
});

export default ProfileIcon; 