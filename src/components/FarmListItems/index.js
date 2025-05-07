import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const FarmListItems = ({ produce }) => {
    if (!produce) {
        return null;
    }

    const navigation = useNavigation();

    return (
        <Pressable onPress={() => navigation.navigate('FarmerProduceDetail', { id: produce.id })} style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{produce.name}</Text>
                    <Text style={styles.description} numberOfLines={2}>{produce.description}</Text>
                    <Text style={styles.price}>${produce.price}/{produce.unit}</Text>
                </View>
                {produce.icon && (
                    <View style={styles.iconContainer}>
                        <Image 
                            source={produce.icon}
                            style={styles.icon}
                            resizeMode="contain"
                        />
                    </View>
                )}
            </View>
            <View style={styles.imageContainer}>
                <Image 
                    source={{ uri: produce.image }} 
                    style={styles.image}
                />
            </View>
        </Pressable>
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
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
        marginRight: 8,
    },
    iconContainer: {
        marginHorizontal: 8,
        justifyContent: 'center',
    },
    icon: {
        width: 24,
        height: 24,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 75,
        height: 50,
        borderRadius: 8,
        marginLeft: 16,
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
