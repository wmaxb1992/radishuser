import React, { useMemo } from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from '../style';
import CartItem from './CartItem';

const InstantGroup = ({ market, onUpdateQuantity, onRemove }) => {
    const groupTotal = useMemo(() => {
        return market.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }, [market.items]);

    return (
        <View style={styles.instantContainer}>
            <View style={styles.instantHeader}>
                <View style={styles.instantInfo}>
                    <View style={styles.instantTitleRow}>
                        <MaterialIcons name="flash-on" size={24} color="#FF9800" />
                        <Text style={styles.instantTitle}>Available Now</Text>
                    </View>
                    <Text style={styles.marketName}>{market.marketName}</Text>
                    <Text style={styles.marketLocation}>{market.location}</Text>
                </View>
            </View>
            
            {market.items.map((item) => (
                <CartItem
                    key={item.id}
                    item={item}
                    marketId={market.marketId}
                    onUpdateQuantity={onUpdateQuantity}
                    onRemove={onRemove}
                    isInstant={true}
                />
            ))}
            
            <View style={styles.instantTotal}>
                <Text style={styles.instantTotalText}>
                    Market Total: ${groupTotal.toFixed(2)}
                </Text>
            </View>
        </View>
    );
};

export default InstantGroup;