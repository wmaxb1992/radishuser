import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from '../style';

const EmptyCart = () => {
    return (
        <View style={styles.emptyContainer}>
            <MaterialIcons name="shopping-cart" size={64} color="#ccc" />
            <Text style={styles.emptyText}>Your cart is empty</Text>
        </View>
    );
};

export default EmptyCart;