import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    listContainer: {
        height: height * 0.6, // 60% of screen height
        backgroundColor: '#fff'
    },
    headerContainer: {
        padding: 16,
        backgroundColor: '#f8f8f8'
    },
    orderIdContainer: {
        marginBottom: 16,
    },
    orderId: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    farmCount: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
    headerRow: {
        flexDirection: 'row',
        marginBottom: 8
    },
    headerLabel: {
        width: 100,
        fontSize: 14,
        color: '#666'
    },
    headerValue: {
        flex: 1,
        fontSize: 14,
        color: '#000'
    },
    divider: {
        height: 1,
        backgroundColor: '#e0e0e0',
        marginVertical: 8
    },
    itemRow: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
        alignItems: 'center'
    },
    produceIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 12
    },
    itemInfo: {
        flex: 1
    },
    itemName: {
        fontSize: 16,
        fontWeight: '500'
    },
    farmName: {
        fontSize: 14,
        color: '#666',
        marginTop: 2
    },
    itemQuantity: {
        fontSize: 14,
        color: '#666',
        marginTop: 2
    },
    itemTotal: {
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 16
    },
    footer: {
        padding: 16,
        backgroundColor: '#f8f8f8',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0'
    },
    footerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8
    },
    footerLabel: {
        fontSize: 14,
        color: '#666'
    },
    footerValue: {
        fontSize: 14
    },
    totalLabel: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    totalValue: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});