import { View, Text } from "react-native";
import React from "react";
import orders from "../../../assets/data/orders.json";

const order = orders[0]; // Example order, replace with actual order data


const OrderDetails = () => {
    return (
        <View style={styles.container}>
            <Text
            <Text style={styles.title}>Order ID: {order.id}</Text>
            <Text style={styles.text}>Total: ${order.total.toFixed(2)}</Text>
            <Text style={styles.text}>Status: {order.status}</Text>
            <Text style={styles.text}>Delivery Type: {order.deliveryType}</Text>
            <Text style={styles.text}>Created At: {new Date(order.createdAt).toLocaleDateString()}</Text>
            <Text style={styles.text}>Order Details</Text>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18
    }
};

export default OrderDetails;
