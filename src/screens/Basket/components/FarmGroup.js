import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../style';
import CartItem from './CartItem';

const FarmGroup = ({ farm, onUpdateQuantity, onRemove }) => {
    const calculateFarmTotal = (items) => {
        return items.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    return (
        <View style={styles.farmContainer}>
            <View style={styles.farmHeader}>
                <View style={styles.farmInfo}>
                    <Text style={styles.farmName}>{farm.farmName}</Text>
                    <Text style={styles.farmLocation}>Sonoma Valley, CA</Text>
                </View>
                <Image 
                    source={require('../../../../assets/icons/produce/Pineberry_strawberry.png')}
                    style={styles.farmIcon}
                    resizeMode="contain"
                />
            </View>
            
            {farm.items.map((item) => (
                <CartItem
                    key={item.id}
                    item={item}
                    farmId={farm.farmId}
                    farmName={farm.farmName}
                    onUpdateQuantity={onUpdateQuantity}
                    onRemove={onRemove}
                />
            ))}
            
            <View style={styles.farmTotal}>
                <Text style={styles.farmTotalText}>
                    Farm Total: ${calculateFarmTotal(farm.items).toFixed(2)}
                </Text>
            </View>
        </View>
    );
};

export default FarmGroup;