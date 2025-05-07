import React, { useRef, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Animated, PanResponder } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from '../style';
import farms from '../../../../assets/data/farms.json';
import FarmOptionsModal from './FarmOptionsModal';

const CartItem = ({ item, zoneId, marketId, onUpdateQuantity, onRemove, isInstant }) => {
    const [showFarmOptions, setShowFarmOptions] = useState(false);
    const pan = useRef(new Animated.ValueXY()).current;
    const total = (item.price * item.quantity).toFixed(2);
    const groupId = isInstant ? marketId : zoneId;

    // Find all farms that carry this product
    const otherFarms = farms
        .filter(farm => farm.produce.some(p => p.name === item.name && farm.name !== item.farmName))
        .map(farm => ({
            id: farm.id,
            name: farm.name,
            price: farm.produce.find(p => p.name === item.name).price,
            deliveryFee: farm.deliveryFee,
            rating: farm.rating
        }))
        .sort((a, b) => a.price - b.price); // Sort by price ascending

    const handleSelectFarm = (farm) => {
        // Here you would implement the logic to switch farms
        console.log('Switching to farm:', farm.name);
    };

    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: (_, gestureState) => {
            return Math.abs(gestureState.dx) > 5;
        },
        onPanResponderMove: (_, gestureState) => {
            if (gestureState.dx < 0) { // Only allow left swipe
                pan.x.setValue(gestureState.dx);
            }
        },
        onPanResponderRelease: (_, gestureState) => {
            if (gestureState.dx < -100) { // Threshold for delete
                Animated.timing(pan.x, {
                    toValue: -1000,
                    duration: 250,
                    useNativeDriver: true,
                }).start(() => {
                    onRemove(groupId, item.id);
                });
            } else {
                Animated.spring(pan.x, {
                    toValue: 0,
                    useNativeDriver: true,
                }).start();
            }
        },
    });

    return (
        <Animated.View
            style={[
                styles.itemContainer,
                {
                    transform: [{ translateX: pan.x }],
                    backgroundColor: '#fff',
                }
            ]}
            {...panResponder.panHandlers}
        >
            <View style={[styles.itemInfo]}>
                {item.icon && (
                    <Image 
                        source={item.icon}
                        style={styles.itemIcon}
                        resizeMode="contain"
                    />
                )}
                <View style={styles.itemDetails}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <View style={styles.farmNameContainer}>
                        <Text style={styles.farmName}>{item.farmName}</Text>
                        {otherFarms.length > 0 && (
                            <TouchableOpacity 
                                onPress={() => setShowFarmOptions(!showFarmOptions)}
                                style={styles.farmDropdownButton}
                            >
                                <MaterialIcons 
                                    name={showFarmOptions ? "keyboard-arrow-up" : "keyboard-arrow-down"} 
                                    size={18} 
                                    color="#666" 
                                />
                            </TouchableOpacity>
                        )}
                    </View>
                    <Text style={styles.itemPrice}>${item.price}/{item.unit}</Text>
                </View>
                <View style={styles.quantityControls}>
                    <View style={styles.quantityContainer}>
                        <TouchableOpacity 
                            onPress={() => onUpdateQuantity(groupId, item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            style={[styles.quantityButton, item.quantity <= 1 && styles.quantityButtonDisabled]}
                        >
                            <MaterialIcons 
                                name="remove" 
                                size={16} 
                                color={item.quantity <= 1 ? "#ccc" : isInstant ? "#FF9800" : "#4CAF50"} 
                            />
                        </TouchableOpacity>
                        
                        <Text style={styles.quantityText}>{item.quantity}</Text>
                        
                        <TouchableOpacity 
                            onPress={() => onUpdateQuantity(groupId, item.id, item.quantity + 1)}
                            style={styles.quantityButton}
                        >
                            <MaterialIcons 
                                name="add" 
                                size={16} 
                                color={isInstant ? "#FF9800" : "#4CAF50"} 
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={[
                        styles.totalPrice,
                        isInstant ? styles.instantItemPrice : styles.deliveryItemPrice
                    ]}>
                        ${total}
                    </Text>
                </View>
            </View>

            <FarmOptionsModal
                visible={showFarmOptions}
                onClose={() => setShowFarmOptions(false)}
                item={item}
                otherFarms={otherFarms}
                onSelectFarm={handleSelectFarm}
            />
        </Animated.View>
    );
};

export default CartItem;