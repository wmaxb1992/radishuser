import { View, Text, StyleSheet, Image } from 'react-native';

const FarmListItems = ({ produce }) => {
    if (!produce) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.name}>{produce.name}</Text>
                <Text style={styles.description} numberOfLines={2}>{produce.description}</Text>
                <Text style={styles.price}>${produce.price}/{produce.unit}</Text>
            </View>
            <Image 
                source={{ uri: produce.image }} 
                style={styles.image}
                resizeMode="cover"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'white',
        marginVertical: 4,
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
        marginLeft: 16,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    name: {
        fontSize: 16,
        fontFamily: 'RobotoMedium',
        color: '#333',
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
