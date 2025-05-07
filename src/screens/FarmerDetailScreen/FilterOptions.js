import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './style';

const FilterOptions = ({ categories, onFilterChange }) => {
    const [activeFilter, setActiveFilter] = useState('All');
    
    // Get unique categories from the produce items
    const handleFilter = (category) => {
        setActiveFilter(category);
        onFilterChange(category);
    };
    
    return (
        <View style={styles.filterContainer}>
            <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.filterScrollView}
            >
                <TouchableOpacity 
                    style={[
                        styles.filterButton, 
                        activeFilter === 'All' && styles.filterButtonActive
                    ]}
                    onPress={() => handleFilter('All')}
                >
                    <Text style={[
                        styles.filterText,
                        activeFilter === 'All' && styles.filterTextActive
                    ]}>All</Text>
                </TouchableOpacity>
                
                {categories.map((category, index) => (
                    <TouchableOpacity 
                        key={index}
                        style={[
                            styles.filterButton,
                            activeFilter === category && styles.filterButtonActive
                        ]}
                        onPress={() => handleFilter(category)}
                    >
                        <Text style={[
                            styles.filterText,
                            activeFilter === category && styles.filterTextActive
                        ]}>{category}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

export default FilterOptions;