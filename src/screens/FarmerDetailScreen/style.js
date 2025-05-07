import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    // Styles from index.js
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
        paddingHorizontal: 0,
        paddingBottom: 16,
    },
    // New styles
    filterContainer: {
        marginVertical: 0,
    },
    filterScrollView: {
        paddingVertical: 5,
    },
    filterButton: {
        paddingHorizontal: 10,
        paddingVertical: 3,
        marginRight: 10,
        borderRadius: 20,
        backgroundColor: '#f5f5f5',
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    filterButtonActive: {
        backgroundColor: '#4CAF50',
        borderColor: '#4CAF50',
    },
    filterText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#666',
    },
    filterTextActive: {
        color: 'white',
        fontWeight: '600',
    },
});