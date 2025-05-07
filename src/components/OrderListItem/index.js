import { View, Text, Image, Pressable } from "react-native";
import styles from './styles';
import { useNavigation } from "@react-navigation/native";

const OrderListItem = ({ order }) => {
    const navigation = useNavigation();

    const getStatusColor = (status) => {
        switch (status) {
            case 'NEW':
                return '#2b9348';
            case 'PREPARING':
                return '#ffd60a';
            case 'OUT_FOR_DELIVERY':
                return '#3a86ff';
            case 'DELIVERED':
                return '#666';
            default:
                return '#666';
        }
    };

    const getDeliveryInfo = (farm) => {
        if (order.deliveryType === 'INSTANT') {
            return {
                label: 'Instant Delivery',
                time: new Date(order.estimatedDeliveryTime).toLocaleTimeString([], 
                    { hour: 'numeric', minute: '2-digit' })
            };
        }
        return {
            label: farm.deliveryZone?.name,
            time: `${farm.deliveryZone?.deliveryWindow?.day}, ${farm.deliveryZone?.deliveryWindow?.time}`
        };
    }; 

    return (
        <Pressable onPress={() => navigation.navigate('OrderDetails', { id: order.id })} style={styles.container}>
            <View style={styles.header}>
                <View style={styles.statusBar}>
                    <Text style={styles.deliveryType}>
                        {order.deliveryType === 'INSTANT' ? '🚚 INSTANT' : '📅 SCHEDULED'}
                    </Text>
                    <Text style={[styles.status, { color: getStatusColor(order.status) }]}>
                        {order.status}
                    </Text>
                </View>
                <Text style={styles.orderDate}>
                    Ordered: {new Date(order.createdAt).toLocaleDateString()}
                </Text>
            </View>

            {order.farms.map((farm, index) => {
                const deliveryInfo = getDeliveryInfo(farm);
                return (
                    <View key={farm.farmId} style={[
                        styles.farmSection,
                        index < order.farms.length - 1 && styles.farmDivider
                    ]}>
                        <View style={styles.farmHeader}>
                            <Image 
                                source={{ uri: farm.image }} 
                                style={styles.farmImage}
                            />
                            <View style={styles.farmInfo}>
                                <Text style={styles.farmName}>{farm.name}</Text>
                                <Text style={styles.itemCount}>
                                    {farm.items.length} items · ${farm.subtotal.toFixed(2)}
                                </Text>
                            </View>
                        </View>

                        <View style={styles.deliveryDetails}>
                            <View style={styles.deliveryZone}>
                                <Text style={styles.zoneLabel}>
                                    {order.deliveryType === 'INSTANT' ? '📍' : '🚚'} {deliveryInfo.label}
                                </Text>
                                <Text style={styles.deliveryTime}>
                                    {deliveryInfo.time}
                                </Text>
                            </View>
                            <Text style={styles.deliveryFee}>
                                Delivery: ${(farm.deliveryFee + (farm.instantDeliveryFee || 0)).toFixed(2)}
                            </Text>
                        </View>
                    </View>
                );
            })}

            <View style={styles.footer}>
                <Text style={styles.total}>Total: ${order.total.toFixed(2)}</Text>
                <Text style={styles.orderNumber}>Order #{order.id}</Text>
            </View>
        </Pressable>
    );
};

export default OrderListItem;
