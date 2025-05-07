import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';

const ProductDetails = ({ produce }) => {
    return (
        <View style={styles.detailsContainer}>
            <Text style={styles.sectionTitle}>Product Details</Text>
            <View style={styles.detailsGrid}>
                {produce.quantityAvailable && (
                    <View style={styles.detailItem}>
                        <Text style={styles.detailLabel}>Available</Text>
                        <Text style={styles.detailValue}>{produce.quantityAvailable}</Text>
                    </View>
                )}
                
                {produce.harvestDate && (
                    <View style={styles.detailItem}>
                        <Text style={styles.detailLabel}>Harvested</Text>
                        <Text style={styles.detailValue}>{produce.harvestDate}</Text>
                    </View>
                )}
                
                {produce.datePicked && (
                    <View style={styles.detailItem}>
                        <Text style={styles.detailLabel}>Picked On</Text>
                        <Text style={styles.detailValue}>{produce.datePicked}</Text>
                    </View>
                )}
                
                {produce.category && (
                    <View style={styles.detailItem}>
                        <Text style={styles.detailLabel}>Category</Text>
                        <Text style={styles.detailValue}>{produce.category}</Text>
                    </View>
                )}
                
                {produce.type && (
                    <View style={styles.detailItem}>
                        <Text style={styles.detailLabel}>Type</Text>
                        <Text style={styles.detailValue}>{produce.type}</Text>
                    </View>
                )}
                
                {produce.seasonalWindow && (
                    <View style={styles.detailItem}>
                        <Text style={styles.detailLabel}>Season</Text>
                        <Text style={styles.detailValue}>{produce.seasonalWindow}</Text>
                    </View>
                )}
                
                {produce.storageInstructions && (
                    <View style={styles.detailItem}>
                        <Text style={styles.detailLabel}>Storage</Text>
                        <Text style={styles.detailValue}>{produce.storageInstructions}</Text>
                    </View>
                )}
                
                {produce.farmerNotes && (
                    <View style={styles.detailItem}>
                        <Text style={styles.detailLabel}>Farmer Notes</Text>
                        <Text style={styles.detailValue}>{produce.farmerNotes}</Text>
                    </View>
                )}
            </View>
        </View>
    );
};

export default ProductDetails;