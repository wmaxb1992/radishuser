import { View, ScrollView } from 'react-native';
import React from 'react';
import { styles } from './style';
import EmptyCart from './components/EmptyCart';

const BasketScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <EmptyCart />
            </ScrollView>
        </View>
    );
};

export default BasketScreen;