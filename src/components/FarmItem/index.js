import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { CertificationBadges } from './certifications';

const FarmItem = ({ farm }) => {
  return (
    <View style={styles.farmContainer}>
      <Image
        source={{
          uri: farm.image,
        }}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {farm.name}
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingText}>{farm.rating}</Text>
            </View>
          </Text>
        </View>
        
        <Text style={styles.location}>{farm.location}</Text>
        
        <Text style={styles.subtitle}>
          ${farm.deliveryFee} delivery fee &#8226; {farm.minDeliveryTime}-{farm.maxDeliveryTime } min
        </Text>
         <CertificationBadges certifications={farm.certifications} />
      </View>
    </View>
  );
};

export default FarmItem;

const styles = StyleSheet.create({
  farmContainer: {
    width: '100%',
    marginVertical: 10,
    backgroundColor: '#f8f8f8',
    marginBottom: 20,
    borderRadius: 2,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    borderTopColor: 'bla',
    borderTopWidth: 1,
  },
  image: {
    width: '100%',
    aspectRatio: 4 / 2,
    borderRadius: 0,
    marginBottom: 5,
  },
  infoContainer: {
    padding: 10,
  },
  titleContainer: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'RobotoMedium',
    flex: 1,
  },
  ratingContainer: {
    position: 'relative',
    top: -1,
    paddingBottom: 3,
    paddingLeft: 5,
    left: 4,
  },
  ratingText: {
    fontSize: 12,
    color: '#006400',
  },
  location: {
    fontSize: 14,
    fontWeight: 'normal',
    marginVertical: 2,
    color: '#666666',
  },
  subtitle: {
    color: 'gray',
    fontSize: 16,
    marginTop: 5,
  },
});
