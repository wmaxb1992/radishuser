import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from '../style';
import CartItem from './CartItem';

const DeliveryGroup = ({ zone, onUpdateQuantity, onRemove }) => {
    const groupTotal = useMemo(() => {
        return zone.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }, [zone.items]);

    return (
        <View style={styles.deliveryContainer}>
            <View style={styles.deliveryHeader}>
                <View style={styles.deliveryInfo}>
                    <View style={styles.zoneTitleRow}>
                        <MaterialIcons name="location-on" size={24} color="#4CAF50" />
                        <Text style={styles.zoneName}>{zone.zoneName}</Text>
                    </View>
                    <Text style={styles.deliveryTime}>Next Day Delivery</Text>
                    <View style={styles.timeSlots}>
                        {zone.deliveryWindow.slots.map((slot, index) => (
                            <TouchableOpacity 
                                key={slot.id}
                                style={[
                                    styles.timeSlot,
                                    slot.available && styles.timeSlotAvailable,
                                    !slot.available && styles.timeSlotUnavailable
                                ]}
                            >
                                <Text style={styles.timeSlotText}>{slot.time}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </View>
            
            {zone.items.map((item) => (
                <CartItem
                    key={item.id}
                    item={item}
                    zoneId={zone.zoneId}
                    onUpdateQuantity={onUpdateQuantity}
                    onRemove={onRemove}
                    isInstant={false}
                />
            ))}
            
            <View style={styles.deliveryTotal}>
                <Text style={styles.deliveryTotalText}>
                    Zone Total: ${groupTotal.toFixed(2)}
                </Text>
            </View>
        </View>
    );
};

export default DeliveryGroup;