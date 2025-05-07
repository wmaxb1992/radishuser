import React, { useState, useCallback } from "react";
import { View, FlatList } from "react-native";
import farms from "../../../assets/data/farms.json";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FarmListItems from "../../components/FarmListItems";
import { Header } from "./header";
import { styles } from './style';

const farm = farms[0];

const FarmerDetailPage = () => {
    const [filteredProduce, setFilteredProduce] = useState(farm.produce);
    
    const handleFilterChange = useCallback((category) => {
        if (category === 'All') {
            setFilteredProduce(farm.produce);
        } else {
            const filtered = farm.produce.filter(item => item.category === category);
            setFilteredProduce(filtered);
        }
    }, []);
    
    return (
        <View style={styles.page}>
            <FlatList
                ListHeaderComponent={<Header farm={farm} onFilterChange={handleFilterChange} />}
                data={filteredProduce}
                renderItem={({ item, index }) => (
                    <FarmListItems key={item.id || index} produce={item} />
                )}
                keyExtractor={(item, index) => item.id || index.toString()}
                style={styles.productsSection}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.productsContainer}
            />
            <View style={styles.iconContainer}>
                <MaterialCommunityIcons name="arrow-left-bold-circle" size={44} color="white" />
            </View>
        </View>
    );
}

export default FarmerDetailPage;