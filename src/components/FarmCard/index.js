import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { CertificationBadges } from "./certifications";
import { useNavigation } from "@react-navigation/native";

const FarmCard = ({ farm }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("FarmerDetail", { id: farm.id });
  };

  return (
    <Pressable onPress={onPress}>
      <View style={styles.farmContainer}>
        <Image source={{ uri: farm.image }} style={styles.image} />
        <View style={styles.infoContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {farm.name}
              <Text style={styles.ratingText}> {farm.rating}</Text>
            </Text>
          </View>

          <Text style={styles.location}>{farm.location}</Text>

          <Text style={styles.subtitle}>
            ${farm.deliveryFee} delivery fee • {farm.minDeliveryTime}-
            {farm.maxDeliveryTime} min
          </Text>
          <CertificationBadges certifications={farm.certifications} />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  farmContainer: {
    width: "100%",
    marginVertical: 10,
    backgroundColor: "#f8f8f8",
    marginBottom: 20,
    borderRadius: 8,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    borderTopColor: "gray",
    borderTopWidth: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 4 / 2,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  infoContainer: {
    padding: 12,
  },
  titleContainer: {
    marginBottom: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "RobotoMedium",
    color: "#333",
  },
  ratingText: {
    fontSize: 14,
    color: "#006400",
    fontWeight: "bold",
  },
  location: {
    fontSize: 14,
    marginVertical: 4,
    color: "#666666",
  },
  subtitle: {
    color: "gray",
    fontSize: 14,
    marginVertical: 4,
  },
});

export default FarmCard;
