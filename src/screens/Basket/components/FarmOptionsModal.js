import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { styles } from '../style';

const FarmOptionsModal = ({ 
    visible, 
    onClose, 
    item, 
    otherFarms, 
    onSelectFarm 
}) => {
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="none"
            onRequestClose={onClose}
        >
            <TouchableOpacity 
                style={styles.modalOverlay}
                activeOpacity={1}
                onPress={onClose}
            >
                <View style={[styles.farmOptionsContainer, {
                    position: 'absolute',
                    top: 100,
                    left: 20,
                }]}>
                    <Text style={styles.farmOptionsTitle}>Other farms with {item.name}</Text>
                    {otherFarms.map(farm => (
                        <TouchableOpacity 
                            key={farm.id} 
                            style={styles.farmOption}
                            onPress={() => {
                                onSelectFarm(farm);
                                onClose();
                            }}
                        >
                            <View style={styles.farmOptionInfo}>
                                <Text style={styles.farmOptionName}>{farm.name}</Text>
                                <View style={styles.farmOptionDetails}>
                                    <Text style={styles.farmOptionDelivery}>
                                        ${farm.deliveryFee.toFixed(2)} delivery
                                    </Text>
                                    <Text style={styles.farmOptionRating}>
                                        ★ {farm.rating}
                                    </Text>
                                </View>
                            </View>
                            <Text style={[
                                styles.farmOptionPrice,
                                farm.price < item.price && styles.farmOptionPriceLower
                            ]}>
                                ${farm.price}/{item.unit}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </TouchableOpacity>
        </Modal>
    );
};

export default FarmOptionsModal;