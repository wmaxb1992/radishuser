import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';

const GrowingPracticesAndNutrients = ({ produce }) => {
    if (!produce) {
        return null;
    }

    const growingPractices = produce?.growingPractices || [];
    const nutrients = produce?.nutrients || [];

    if (growingPractices.length === 0 && nutrients.length === 0) {
        return null;
    }

    return (
        <View style={styles.practicesNutrientsContainer}>
            {/* Growing Practices */}
            {growingPractices.length > 0 && (
                <View style={styles.infoHalfContainer}>
                    <Text style={styles.infoSectionTitle}>Growing Practices</Text>
                    <View style={styles.tagsContainerCompact}>
                        {growingPractices.map((practice, index) => (
                            <View key={index} style={styles.tagItemCompact}>
                                <Text style={styles.tagTextCompact}>{practice}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            )}

            {/* Nutrients */}
            {nutrients.length > 0 && (
                <View style={styles.infoHalfContainer}>
                    <Text style={styles.infoSectionTitle}>Nutrients</Text>
                    <View style={styles.tagsContainerCompact}>
                        {nutrients.map((nutrient, index) => (
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