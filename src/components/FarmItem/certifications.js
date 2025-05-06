import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export const CERTIFICATION_BADGES = {
  'USDA Organic': {
    icon: 'leaf',
    type: MaterialIcons,
    color: '#6aa84f',
    label: 'USDA'
  },
  'California Certified Organic Farmers': {
    icon: 'nature',
    type: MaterialIcons,
    color: '#93c47d',
    label: 'CCOF'
  },
  'Food Alliance Certified': {
    icon: 'food-apple',
    type: MaterialCommunityIcons,
    color: '#e06666',
    label: 'FA'
  },
  'Biodynamic Certified': {
    icon: 'sprout',
    type: MaterialCommunityIcons,
    color: '#6fa8dc',
    label: 'BIO'
  },
  'Regenerative Organic Certified': {
    icon: 'repeat',
    type: MaterialIcons,
    color: '#8e7cc3',
    label: 'REG'
  },
  'Sustainable Agriculture Certified': {
    icon: 'eco',
    type: MaterialIcons,
    color: '#4a9c5e',
    label: 'SUS'
  },
  'Herbal Quality Certified': {
    icon: 'grass',
    type: MaterialIcons,
    color: '#76a5af',
    label: 'HRB'
  }
};

// Maximum number of badges to display
export const MAX_BADGES_DISPLAY = 3;

export const CertificationBadges = ({ certifications }) => {
  if (!certifications) return null;

  return (
    <View style={styles.certificationsWrapper}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
      >
        {certifications.slice(0, MAX_BADGES_DISPLAY).map((cert, index) => {
          const badge = CERTIFICATION_BADGES[cert];
          if (!badge) return null;
          
          const IconComponent = badge.type;
          return (
            <View key={index} style={styles.badgeContainer}>
              <View style={[styles.certificationBadge, { backgroundColor: badge.color }]}>
                <IconComponent name={badge.icon} size={12} color="white" />
                <Text style={styles.certificationLabel}>{badge.label}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  certificationsWrapper: {
    marginVertical: 4,
    height: 24,
  },
  badgeContainer: {
    marginRight: 6,
  },
  certificationBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
    width: 45,
    height: 20,
    justifyContent: 'center',
  },
  certificationLabel: {
    color: 'white',
    fontSize: 8,
    fontWeight: '600',
    marginLeft: 3,
  },
});