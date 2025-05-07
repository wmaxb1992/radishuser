import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';

const ProductDetails = ({ produce }) => {
    if (!produce) {
        return null;
    }

    const details = [
        {
            label: 'Available',
            value: produce?.quantityAvailable,
            show: !!produce?.quantityAvailable
        },
        {
            label: 'Harvested',
            value: produce?.harvestDate,
            show: !!produce?.harvestDate
        },
        {
            label: 'Picked On',
            value: produce?.datePicked,
            show: !!produce?.datePicked
        },
        {
            label: 'Category',
            value: produce?.category,
            show: !!produce?.category
        },
        {
            label: 'Type',
            value: produce?.type,
            show: !!produce?.type
        },
        {
            label: 'Season',
            value: produce?.seasonalWindow,
            show: !!produce?.seasonalWindow
        },
        {
            label: 'Storage',
            value: produce?.storageInstructions,
            show: !!produce?.storageInstructions
        },
        {
            label: 'Farmer Notes',
            value: produce?.farmerNotes,
            show: !!produce?.farmerNotes
        }
    ];

    const visibleDetails = details.filter(detail => detail.show);

    if (visibleDetails.length === 0) {
        return null;
    }

    return (
        <View style={styles.detailsContainer}>
            <Text style={styles.sectionTitle}>Product Details</Text>
            <View style={styles.detailsGrid}>
                {visibleDetails.map((detail, index) => (
                    <View key={index} style={styles.detailItem}>
                        <Text style={styles.detailLabel}>{detail.label}</Text>
                        <Text style={styles.detailValue}>{detail.value}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

export default ProductDetails;