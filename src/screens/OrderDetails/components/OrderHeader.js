import { View, Text } from "react-native";
import React from "react";
import styles from "../styles";

const OrderHeader = ({ order }) => (
    <View style={styles.headerContainer}>
        <View style={styles.orderIdContainer}>
            <Text style={styles.orderId}>Order {order.id}</Text>
            <Text style={styles.farmCount}>
                Picked from {order.numberOfFarms} {order.numberOfFarms === 1 ? 'farm' : 'farms'}
            </Text>
        </View>
        <View style={styles.headerRow}>
            <Text style={styles.headerLabel}>Status:</Text>
            <Text style={styles.headerValue}>{order.status}</Text>
        </View>
        <View style={styles.headerRow}>
            <Text style={styles.headerLabel}>Delivery Type:</Text>
            <Text style={styles.headerValue}>{order.deliveryType}</Text>
        </View>
        <View style={styles.headerRow}>
            <Text style={styles.headerLabel}>Delivery To:</Text>
            <Text style={styles.headerValue}>
                {order.deliveryAddress.street}, {order.deliveryAddress.unit || ''}\n
                {order.deliveryAddress.city}, {order.deliveryAddress.state} {order.deliveryAddress.zipCode}
            </Text>
        </View>
        <View style={styles.headerRow}>
            <Text style={styles.headerLabel}>Instructions:</Text>
            <Text style={styles.headerValue}>{order.deliveryAddress.instructions}</Text>
        </View>
        <View style={styles.headerRow}>
            <Text style={styles.headerLabel}>Payment:</Text>
            <Text style={styles.headerValue}>
                {order.payment.method} {order.payment.last4 ? `(*${order.payment.last4})` : ''}
            </Text>
        </View>
        <View style={styles.divider} />
    </View>
);

export default OrderHeader;