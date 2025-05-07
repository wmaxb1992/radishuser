import { View, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styles } from '../style';
import EmptyCart from './EmptyCart';
import DeliveryGroup from './DeliveryGroup';
import CartTotals from './CartTotals';
import InstantGroup from './InstantGroup';

const BasketScreen = () => {
    const [cartItems, setCartItems] = useState({
        instant: [
            {
                marketId: 'SVF01',
                marketName: 'Sonoma Valley Farmers Market',
                location: 'Depot Park',
                items: []
            }
        ],
        delivery: [
            {
                zoneId: 'DZ01',
                zoneName: 'Sonoma Valley',
                deliveryWindow: {
                    nextDay: true,
                    slots: [
                        {
                            id: 'morning',
                            time: "9:00 AM - 12:00 PM",
                            available: true
                        },
                        {
                            id: 'afternoon',
                            time: "1:00 PM - 4:00 PM",
                            available: true
                        },
                        {
                            id: 'evening',
                            time: "4:00 PM - 7:00 PM",
                            available: true
                        }
                    ]
                },
                items: [
                    {
                        id: 'p1',
                        name: 'Pineberry Strawberry',
                        price: 8.99,
                        quantity: 2,
                        unit: 'pint',
                        farmId: '1',
                        farmName: 'Green Valley Family Farms',
                        icon: require('../../../../assets/icons/produce/Pineberry_strawberry.png'),
                        total: 17.98
                    }
                ]
            }
        ]
    });

    const checkFarmersMarketAvailability = () => {
        const now = new Date();
        const day = now.toLocaleDateString('en-US', { weekday: 'long' });
        const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        
        // Update instant availability based on current time and farmers market schedules
    };

    useEffect(() => {
        checkFarmersMarketAvailability();
    }, []);

    const updateDeliveryItemQuantity = (zoneId, itemId, newQuantity) => {
        setCartItems(prev => ({
            ...prev,
            delivery: prev.delivery.map(zone => {
                if (zone.zoneId === zoneId) {
                    return {
                        ...zone,
                        items: zone.items.map(item => {
                            if (item.id === itemId) {
                                return { 
                                    ...item, 
                                    quantity: newQuantity,
                                    total: Number((newQuantity * item.price).toFixed(2))
                            };
                            }
                            return item;
                        })
                    };
                }
                return zone;
            }).filter(zone => zone.items.length > 0)
        }));
    };

    const removeDeliveryItem = (zoneId, itemId) => {
        setCartItems(prev => ({
            ...prev,
            delivery: prev.delivery.map(zone => {
                if (zone.zoneId === zoneId) {
                    return {
                        ...zone,
                        items: zone.items.filter(item => item.id !== itemId)
                    };
                }
                return zone;
            }).filter(zone => zone.items.length > 0)
        }));
    };

    const updateInstantItemQuantity = (marketId, itemId, newQuantity) => {
        setCartItems(prev => ({
            ...prev,
            instant: prev.instant.map(market => {
                if (market.marketId === marketId) {
                    return {
                        ...market,
                        items: market.items.map(item => {
                            if (item.id === itemId) {
                                return { 
                                    ...item, 
                                    quantity: newQuantity,
                                    total: Number((newQuantity * item.price).toFixed(2))
                            };
                            }
                            return item;
                        })
                    };
                }
                return market;
            })
        }));
    };

    const removeInstantItem = (marketId, itemId) => {
        setCartItems(prev => ({
            ...prev,
            instant: prev.instant.map(market => {
                if (market.marketId === marketId) {
                    return {
                        ...market,
                        items: market.items.filter(item => item.id !== itemId)
                    };
                }
                return market;
            }).filter(market => market.items.length > 0)
        }));
    };

    const calculateCartTotal = () => {
        const instantTotal = cartItems.instant.reduce((total, market) => 
            total + market.items.reduce((marketTotal, item) => 
                marketTotal + (item.price * item.quantity), 0
            ), 0);

        const deliveryTotal = cartItems.delivery.reduce((total, zone) => 
            total + zone.items.reduce((zoneTotal, item) => 
                zoneTotal + (item.price * item.quantity), 0
            ), 0);

        return instantTotal + deliveryTotal;
    };

    const handleCheckout = () => {
        // Implement checkout logic
        console.log('Proceeding to checkout...');
    };

    if (cartItems.delivery.length === 0 && cartItems.instant.every(market => market.items.length === 0)) {
        return <EmptyCart />;
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {cartItems.instant.map((market) => (
                    market.items.length > 0 && (
                        <InstantGroup
                            key={market.marketId}
                            market={market}
                            onUpdateQuantity={updateInstantItemQuantity}
                            onRemove={removeInstantItem}
                        />
                    )
                ))}
                
                {cartItems.delivery.map((zone) => (
                    <DeliveryGroup
                        key={zone.zoneId}
                        zone={zone}
                        onUpdateQuantity={updateDeliveryItemQuantity}
                        onRemove={removeDeliveryItem}
                    />
                ))}
            </ScrollView>
            
            <CartTotals
                total={calculateCartTotal()}
                onCheckout={handleCheckout}
            />
        </View>
    );
};

export default BasketScreen;