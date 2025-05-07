import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../style';

const CartTotals = ({ total, onCheckout }) => {
    return (
        <View style={styles.checkoutContainer}>
            <View style={styles.totalContainer}>
                <Text style={styles.totalLabel}>Total:</Text>
                <Text style={styles.totalAmount}>${total.toFixed(2)}</Text>
            </View>
            <TouchableOpacity style={styles.checkoutButton} onPress={onCheckout}>
                <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CartTotals;