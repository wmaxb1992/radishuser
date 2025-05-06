import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import farms from "../../../assets/data/farms.json";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useCustomFonts } from "../../hooks/useFonts";
import { CertificationBadges } from "../../components/FarmCard/certifications";
import FarmListItems from "../../components/FarmListItems";
import { Header } from "./Header";

const farm = farms[0];

const FarmerDetailPage = () => {
    return (
        <View style={styles.page}>
            

            <FlatList
                ListHeaderComponent={Header}
                data={farm.produce}
                renderItem={({ item, index }) => (
                    <FarmListItems key={item.id || index} produce={item} />
                )}
                keyExtractor={(item, index) => item.id || index.toString()}
                style={styles.productsSection}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.productsContainer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "#fff",
    },
    imageContainer: {
        position: 'relative',
    },
    image: {
        width: "100%",
        height: 220,
    },
    iconContainer: {
        position: "absolute",
        top: 40,
        left: 20,
        borderRadius: 70,
        backgroundColor: "rgba(0,0,0,0.3)",
    },
    infoContainer: {
        padding: 16,
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: -20,
        borderBottomColor: "#eee",
        borderBottomWidth: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        fontFamily: "RobotoMedium",
        flex: 1,
    },
    ratingContainer: {
        backgroundColor: '#f8f8f8',
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    ratingText: {
        fontSize: 16,
        color: '#006400',
        fontWeight: 'bold',
    },
    location: {
        fontSize: 16,
        color: "#666",
        marginBottom: 8,
    },
    deliveryRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    deliveryInfo: {
        fontSize: 15,
        color: "gray",
        flex: 1,
    },
    description: {
        fontSize: 15,
        color: "#444",
        lineHeight: 22,
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 10,
        color: "#333",
    },
    productsSection: {
        flex: 1,
        backgroundColor: '#fff',
    },
    productsContainer: {
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
});

export default FarmerDetailPage;