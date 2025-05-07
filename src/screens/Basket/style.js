import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    // Main Container Styles
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    scrollView: {
        flex: 1,
        paddingTop: 16,
    },

    // EmptyCart Component Styles
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    emptyText: {
        fontSize: 18,
        color: '#666',
        marginTop: 16,
    },

    // InstantGroup Component Styles
    instantContainer: {
        backgroundColor: '#fff',
        marginHorizontal: 16,
        marginBottom: 16,
        borderRadius: 12,
        padding: 12,
        borderWidth: 1,
        borderColor: '#FF9800',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    instantHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#FFE0B2',
        marginBottom: 4,
    },
    instantInfo: {
        flex: 1,
    },
    instantTitleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    instantTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FF9800',
        marginLeft: 8,
        fontFamily: 'RobotoMedium',
    },
    marketName: {
        fontSize: 16,
        color: '#333',
        marginBottom: 2,
    },
    marketLocation: {
        fontSize: 14,
        color: '#666',
    },
    instantTotal: {
        marginTop: 12,
        paddingTop: 12,
        borderTopWidth: 1,
        borderTopColor: '#FFE0B2',
    },
    instantTotalText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FF9800',
        textAlign: 'right',
    },

    // DeliveryGroup Component Styles
    deliveryContainer: {
        backgroundColor: '#fff',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        overflow: 'hidden',
    },
    deliveryHeader: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    deliveryInfo: {
        gap: 8,
    },
    zoneTitleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    zoneName: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
    },
    deliveryTime: {
        fontSize: 16,
        color: '#4CAF50',
        fontWeight: '500',
        marginTop: 4,
    },
    timeSlots: {
        flexDirection: 'row',
        gap: 8,
        marginTop: 8,
    },
    timeSlot: {
        flex: 1,
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
    },
    timeSlotAvailable: {
        backgroundColor: '#E8F5E9',
        borderColor: '#4CAF50',
    },
    timeSlotUnavailable: {
        backgroundColor: '#f5f5f5',
        borderColor: '#e0e0e0',
    },
    timeSlotText: {
        textAlign: 'center',
        fontSize: 14,
        color: '#333',
    },
    deliveryTotal: {
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
        backgroundColor: '#f8f8f8',
    },
    deliveryTotalText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        textAlign: 'right',
    },

    // CartItem Component Styles
    itemContainer: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    itemInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemIcon: {
        width: 40,
        height: 40,
        marginRight: 12,
    },
    itemDetails: {
        flex: 1,
        marginRight: 12,
    },
    itemName: {
        fontSize: 16,
        color: '#333',
        fontFamily: 'RobotoMedium',
    },
    farmName: {
        fontSize: 13,
        color: '#666',
        marginTop: 2,
    },
    farmZone: {
        fontSize: 13,
        color: '#666',
        marginTop: 2,
        fontStyle: 'italic',
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
        gap: 8,
    },
    itemPrice: {
        fontSize: 14,
        color: '#666',
    },
    totalPrice: {
        fontSize: 14,
        fontWeight: '600',
        textAlign: 'center',
    },
    instantItemPrice: {
        color: '#FF9800',
    },
    deliveryItemPrice: {
        color: '#4CAF50',
    },

    // Quantity Controls
    quantityControls: {
        alignItems: 'center',
        minWidth: 90,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 4,
    },
    quantityButton: {
        padding: 4,
        borderRadius: 16,
        backgroundColor: '#f8f8f8',
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    quantityButtonDisabled: {
        opacity: 0.5,
    },
    quantityText: {
        fontSize: 14,
        fontWeight: '600',
        marginHorizontal: 4,
        minWidth: 20,
        textAlign: 'center',
    },

    // CartTotals Component Styles
    checkoutContainer: {
        backgroundColor: '#fff',
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    totalLabel: {
        fontSize: 18,
        color: '#333',
        fontWeight: '600',
        fontFamily: 'RobotoMedium',
    },
    totalAmount: {
        fontSize: 24,
        color: '#4CAF50',
        fontWeight: '700',
    },
    checkoutButton: {
        backgroundColor: 'black',
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
    },
    checkoutButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'RobotoMedium',
    },

    // Farm Dropdown and Modal Styles
    farmNameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2,
    },
    farmDropdownButton: {
        padding: 4,
        marginLeft: 4,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    farmOptionsContainer: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 16,
        width: 400,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    farmOptionsTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 6,
        fontFamily: 'RobotoMedium',
    },
    farmOption: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    farmOptionInfo: {
        flex: 1,
        marginRight: 12,
    },
    farmOptionName: {
        fontSize: 14,
        color: '#333',
        marginBottom: 4,
        fontFamily: 'RobotoMedium',
    },
    farmOptionDetails: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    farmOptionDelivery: {
        fontSize: 12,
        color: '#666',
        marginRight: 8,
    },
    farmOptionRating: {
        fontSize: 12,
        color: '#FF9800',
        fontWeight: '500',
    },
    farmOptionPrice: {
        fontSize: 14,
        color: '#4CAF50',
        fontWeight: '600',
    },
    farmOptionPriceLower: {
        color: '#4CAF50',
        fontWeight: '700',
    },
});