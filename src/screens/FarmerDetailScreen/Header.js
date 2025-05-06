import { View, Text, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { CertificationBadges } from "../../components/FarmCard/certifications";
import { styles } from './style';
import farms from "../../../assets/data/farms.json";  // Add this import

const farm = farms[0];

export const Header = () => {
    return (
        <View>
            <View style={styles.imageContainer}>
                <Image source={{ uri: farm.image }} style={styles.image} />
               
            </View>
            
            <View style={styles.infoContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.title}>{farm.name}</Text>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.ratingText}>{farm.rating} ★</Text>
                    </View>
                </View>
                
                <Text style={styles.location}>{farm.location}</Text>
                
                <View style={styles.deliveryRow}>
                    <Text style={styles.deliveryInfo}>
                        ${farm.deliveryFee} delivery fee &#8226; {farm.minDeliveryTime}-{farm.maxDeliveryTime} min
                    </Text>
                    <CertificationBadges certifications={farm.certifications} />
                </View>
                
                <Text style={styles.description}>{farm.description}</Text>
                
                <Text style={styles.sectionTitle}>Products</Text>
            </View>
        </View>
    );
};