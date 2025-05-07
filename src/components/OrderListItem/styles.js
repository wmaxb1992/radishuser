import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 12,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    header: {
        marginBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
        paddingBottom: 12,
    },
    statusBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    deliveryType: {
        fontSize: 12,
        fontWeight: '600',
        color: '#666',
    },
    status: {
        fontSize: 14,
        fontWeight: '600',
    },
    orderDate: {
        fontSize: 12,
        color: '#666',
    },
    farmSection: {
        paddingVertical: 12,
    },
    farmDivider: {
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    farmHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    farmImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 12,
    },
    farmInfo: {
        flex: 1,
    },
    farmName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1a1a1a',
        marginBottom: 4,
    },
    itemCount: {
        fontSize: 14,
        color: '#666',
    },
    deliveryDetails: {
        backgroundColor: '#f8f9fa',
        borderRadius: 8,
        padding: 12,
    },
    deliveryZone: {
        marginBottom: 8,
    },
    zoneLabel: {
        fontSize: 14,
        fontWeight: '500',
        color: '#1a1a1a',
        marginBottom: 2,
    },
    deliveryTime: {
        fontSize: 13,
        color: '#666',
    },
    deliveryFee: {
        fontSize: 13,
        color: '#666',
    },
    footer: {
        marginTop: 12,
        paddingTop: 12,
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    total: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1a1a1a',
    },
    orderNumber: {
        fontSize: 12,
        color: '#666',
    },
});