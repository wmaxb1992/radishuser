import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles';

const SocialStats = ({ rating, likes, commentCount, onCommentsPress }) => {
    return (
        <View style={styles.socialStatsRow}>
            {rating && (
                <View style={styles.statContainer}>
                    <Text style={styles.ratingText}>★ {rating}</Text>
                </View>
            )}
            
            {likes && (
                <View style={[styles.statContainer, styles.likesStatContainer]}>
                    <Text style={styles.likesText}>♥ {likes}</Text>
                </View>
            )}
            
            {commentCount && (
                <TouchableOpacity 
                    style={[styles.statContainer, styles.commentStatContainer]}
                    onPress={onCommentsPress}
                >
                    <Text style={styles.commentText}>💬 {commentCount}</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default SocialStats;