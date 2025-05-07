import { View, Text } from "react-native";
import React from "react";
import styles from "../styles";

const OrderFooter = ({ subtotal, deliveryFees, total }) => (
    <View style={styles.footer}>
        <View style={styles.footerRow}>
            <Text style={styles.footerLabel}>Subtotal:</Text>
            <Text style={styles.footerValue}>${subtotal.toFixed(2)}</Text>
        </View>
        <View style={styles.footerRow}>
            <Text style={styles.footerLabel}>Delivery Fees:</Text>
            <Text style={styles.footerValue}>${deliveryFees.toFixed(2)}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.footerRow}>
            <Text style={styles.totalLabel}>Total:</Text>
            <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
        </View>
    </View>
);

export default OrderFooter;