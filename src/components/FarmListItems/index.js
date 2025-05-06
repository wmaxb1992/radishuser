import { View, Text, StyleSheet, Image } from 'react-native';
import farms from '../../../assets/data/farms.json';

// Add console.log to debug data flow
console.log('Farms data:', farms);

const FarmListItems = ({ produce }) => {
    // Debug the incoming produce prop
    console.log('Produce prop:', produce);

    if (!produce) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: produce.image }} 
                style={styles.image}
            />
            <View style={styles.contentContainer}>
                <Text style={styles.name}>{produce.name}</Text>
                <Text style={styles.type}>{produce.category} • {produce.type}</Text>
                <Text style={styles.description} numberOfLines={2}>{produce.description}</Text>
                <Text style={styles.price}>${produce.price}/{produce.unit}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        backgroundColor: 'white',
        marginVertical: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    image: {
        width: 75,
        height: 75,
        borderRadius: 8,
        marginRight: 16,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    name: {
        fontSize: 16,
        fontFamily: 'RobotoMedium',
        color: '#333',
        marginBottom: 4,
    },
    type: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
    },
    description: {
        color: '#666',
        fontSize: 14,
        marginBottom: 8,
    },
    price: {
        fontSize: 16,
        fontFamily: 'RobotoMedium',
        color: '#2e7d32',
    },
});

export default FarmListItems;
