import React from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from '../styles';

const CartStepper = ({ quantity, onIncrement, onDecrement, maxQuantity, price }) => {
    const totalPrice = (price * quantity).toFixed(2);
    const buttonScale = new Animated.Value(1);

    const animateButton = () => {
        Animated.sequence([
            Animated.timing(buttonScale, {
                toValue: 0.97,
                duration: 50,
                useNativeDriver: true,
            }),
            Animated.timing(buttonScale, {
                toValue: 1,
                duration: 50,
                useNativeDriver: true,
            }),
        ]).start();
    };

    const handleIncrement = () => {
        if (quantity < maxQuantity) {
            animateButton();
            onIncrement();
        }
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            animateButton();
            onDecrement();
        }
    };

    return (
        <View style={styles.cartStepperContainer}>
            <View style={styles.cartStepperAddToCartContainer}>
                <View style={styles.cartStepperQuantityContainer}>
                    <TouchableOpacity 
                        onPress={handleDecrement}
                        activeOpacity={0.8}
                        style={[
                            styles.cartStepperQuantityButton,
                            quantity <= 1 && styles.cartStepperQuantityButtonDisabled,
                        ]}
                    >
                        <MaterialIcons 
                            name="remove" 
                            size={24} 
                            color={quantity <= 1 ? "#ccc" : "#4CAF50"} 
                        />
                    </TouchableOpacity>
                    
                    <View style={styles.cartStepperQuantityTextContainer}>
                        <Text style={styles.cartStepperQuantityText}>{quantity}</Text>
                        <Text style={styles.cartStepperUnitText}>units</Text>
                    </View>

                    <TouchableOpacity 
                        onPress={handleIncrement}
                        activeOpacity={0.8}
                        style={[
                            styles.cartStepperQuantityButton,
                            quantity >= maxQuantity && styles.cartStepperQuantityButtonDisabled,
                        ]}
                    >
                        <MaterialIcons 
                            name="add" 
                            size={24} 
                            color={quantity >= maxQuantity ? "#ccc" : "#4CAF50"} 
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.cartStepperPriceContainer}>
                    <Text style={styles.cartStepperPriceLabel}>Total:</Text>
                    <Text style={styles.cartStepperPriceAmount}>${totalPrice}</Text>
                </View>
                
                <Animated.View style={[
                    styles.cartStepperBuyButtonContainer,
                    { transform: [{ scale: buttonScale }] }
                ]}>
                    <TouchableOpacity 
                        style={styles.cartStepperBuyButton}
                        activeOpacity={0.8}
                        onPress={() => animateButton()}
                    >
                        <MaterialIcons name="shopping-cart" size={24} color="#fff" style={styles.cartStepperCartIcon} />
                        <Text style={styles.cartStepperBuyButtonText}>Add to Cart</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </View>
    );
};

export default CartStepper;