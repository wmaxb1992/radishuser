import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';

const GrowingPracticesAndNutrients = ({ produce }) => {
    if ((!produce.growingPractices || !produce.growingPractices.length) && 
        (!produce.nutrients || !produce.nutrients.length)) {
        return null;
    }

    return (
        <View style={styles.practicesNutrientsContainer}>
            {/* Growing Practices */}
            {produce.growingPractices && produce.growingPractices.length > 0 && (
                <View style={styles.infoHalfContainer}>
                    <Text style={styles.infoSectionTitle}>Growing Practices</Text>
                    <View style={styles.tagsContainerCompact}>
                        {produce.growingPractices.map((practice, index) => (
                            <View key={index} style={styles.tagItemCompact}>
                                <Text style={styles.tagTextCompact}>{practice}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            )}

            {/* Nutrients */}
            {produce.nutrients && produce.nutrients.length > 0 && (
                <View style={styles.infoHalfContainer}>
                    <Text style={styles.infoSectionTitle}>Nutrients</Text>
                    <View style={styles.tagsContainerCompact}>
                        {produce.nutrients.map((nutrient, index) => (
                            <View key={index} style={styles.tagItemCompact}>
                                <Text style={styles.tagTextCompact}>{nutrient}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            )}
        </View>
    );
};

export default GrowingPracticesAndNutrients;