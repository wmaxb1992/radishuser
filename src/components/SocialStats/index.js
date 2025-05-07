import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SocialStats = ({ rating, likes, commentCount, onCommentsPress }) => {
    return (
        <View style={styles.socialStatsContainer}>
            {rating && (
                <View style={styles.ratingContainer}>
                    <Text style={styles.rating}>★ {rating}</Text>
                </View>
            )}
            
            {likes && (
                <View style={styles.likesContainer}>
                    <Text style={styles.likesText}>♥ {likes}</Text>
                </View>
            )}
            
            {commentCount && (
                <TouchableOpacity 
                    style={styles.commentCountContainer}
                    onPress={onCommentsPress}
                >
                    <Text style={styles.commentCountText}>💬 {commentCount}</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    socialStatsContainer: {
        flexDirection: 'row',
        marginTop: 8,
        gap: 12,
    },
    ratingContainer: {
        backgroundColor: '#FFF3E0',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    },
    rating: {
        color: '#FF9800',
        fontWeight: '600',
    },
    likesContainer: {
        backgroundColor: '#FCE4EC',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    },
    likesText: {
        color: '#E91E63',
        fontWeight: '600',
    },
    commentCountContainer: {
        backgroundColor: '#E8F5E9',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    },
    commentCountText: {
        color: '#4CAF50',
        fontWeight: '600',
    },
});

export default SocialStats;