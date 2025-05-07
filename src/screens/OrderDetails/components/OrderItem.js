import { View, Text, Image } from "react-native";
import React from "react";
import styles from "../styles";

const produceIcons = {
    'Pineberry Strawberry': require('../../../../assets/icons/produce/Pineberry_strawberry.png'),
    'Cherokee Tomato': require('../../../../assets/icons/produce/Cherokee_tomato.png'),
};

const OrderItem = ({ item, farmName }) => {
    const iconSource = produceIcons[item.name] || require('../../../../assets/icons/produce/Pineberry_strawberry.png');
    
    return (
        <View style={styles.itemRow}>
            <Image 
                source={iconSource}
                style={styles.produceIcon}
            />
            <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.farmName}>{farmName}</Text>
                <Text style={styles.itemQuantity}>
                    {item.quantity} {item.unit} @ ${item.price.toFixed(2)}/{item.unit}
                </Text>
            </View>
            <Text style={styles.itemTotal}>${(item.quantity * item.price).toFixed(2)}</Text>
        </View>
    );
};

export default OrderItem;