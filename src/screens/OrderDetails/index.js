import { View, FlatList, SafeAreaView } from "react-native";
import React from "react";
import orders from "../../../assets/data/orders.json";
import styles from "./styles";
import OrderHeader from "./components/OrderHeader";
import OrderItem from "./components/OrderItem";
import OrderFooter from "./components/OrderFooter";

const order = orders[0]; // Example order, replace with actual order data

const OrderDetails = () => {
    const flattenedItems = order.farms.flatMap(farm => 
        farm.items.map(item => ({
            ...item,
            farmName: farm.name,
            farmId: farm.farmId
        }))
    );

    const totalDeliveryFees = order.farms.reduce((total, farm) => 
        total + (farm.deliveryFee || 0) + (farm.instantDeliveryFee || 0), 
    0);

    const subtotal = order.total - totalDeliveryFees;

    return (
        <SafeAreaView style={styles.container}>
            <OrderHeader order={order} />
            <View style={styles.listContainer}>
                <FlatList
                    data={flattenedItems}
                    renderItem={({ item }) => (
                        <OrderItem item={item} farmName={item.farmName} />
                    )}
                    keyExtractor={(item, index) => `${item.farmId}-${item.id || index}`}
                />
            </View>
            <OrderFooter 
                subtotal={subtotal}
                deliveryFees={totalDeliveryFees}
                total={order.total}
            />
        </SafeAreaView>
    );
};

export default OrderDetails;
