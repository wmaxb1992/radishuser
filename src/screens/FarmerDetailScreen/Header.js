import { View, Text, Image } from "react-native";
import { CertificationBadges } from "../../components/FarmCard/certifications";
import FilterOptions from "./FilterOptions"; // Updated import
import { styles } from './style';

export const Header = ({ farm, onFilterChange }) => {
    if (!farm) return null;
    
    // Format the image URL properly for Unsplash
    const imageUrl = farm.image ? 
        `${farm.image}?q=80&w=1000&auto=format&fit=crop` : 
        null;
    
    // Extract unique categories from farm produce
    const categories = farm.produce 
        ? [...new Set(farm.produce.map(item => item.category).filter(Boolean))] 
        : [];
    
    return (
        <View>
            <View style={styles.imageContainer}>
                {imageUrl ? (
                    <Image 
                        source={{ uri: imageUrl }} 
                        style={styles.image} 
                        resizeMode="cover"
                    />
                ) : (
                    <View style={[styles.image, { backgroundColor: '#f0f0f0' }]} />
                )}
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
                
                <FilterOptions categories={categories} onFilterChange={onFilterChange} />
            </View>
        </View>
    );
};