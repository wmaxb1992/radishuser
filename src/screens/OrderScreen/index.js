import { View, Text, FlatList, StyleSheet } from "react-native";
import { useState } from 'react';
import OrderListItem from "../../components/OrderListItem";
import orders from "../../../assets/data/orders.json";

const OrderScreen = () => {
    return (
      <View style={styles.container}>
          <FlatList
              data={orders}
              renderItem={({ item }) => <OrderListItem order={item} />}
              keyExtractor={(item) => item.id}
              ListEmptyComponent={() => (
                  <Text style={styles.emptyText}>No orders found</Text>
              )}
          />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20,
    },
    headerContainer: {
        padding: 15,
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15
    },
    filterContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10
    },
    filterItem: {
        padding: 8,
        borderRadius: 20,
        backgroundColor: '#f0f0f0',
        overflow: 'hidden'
    },
    selectedFilter: {
        backgroundColor: '#2b9348',
        color: '#fff'
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 50,
        color: '#666'
    }
});

export default OrderScreen;
