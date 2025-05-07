import { StyleSheet } from 'react-native';

export const navigationStyles = StyleSheet.create({
    // Bottom Tab Navigator styles
    tabBar: {
        backgroundColor: "#fff",
        height: 60,
        paddingVertical: 3,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        overflow: 'hidden',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        borderTopWidth: 1,
        borderColor: '#E0E0E0',
    },

    // Stack Navigator styles
    headerStyle: {
        backgroundColor: '#fff',
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
    },
    headerTitleStyle: {
        fontWeight: '600',
        color: '#333',
        fontSize: 18,
    },
    headerBackTitleStyle: {
        color: '#694fad',
    },
    headerTintColor: '#694fad',

    // Screen container styles
    screenContainer: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },

    // Navigation card styles
    cardStyle: {
        backgroundColor: '#fff',
    },
});