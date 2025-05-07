import React, { useRef, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Animated } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from '../styles';

const CustomerReviews = ({ produce, showComments, toggleComments }) => {
    const animatedHeight = useRef(new Animated.Value(0)).current;
    const animatedOpacity = useRef(new Animated.Value(0)).current;
    const animatedRotate = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(animatedHeight, {
                toValue: showComments ? 1 : 0,
                duration: 300,
                useNativeDriver: false,
            }),
            Animated.timing(animatedOpacity, {
                toValue: showComments ? 1 : 0,
                duration: 300,
                useNativeDriver: false,
            }),
            Animated.timing(animatedRotate, {
                toValue: showComments ? 1 : 0,
                duration: 300,
                useNativeDriver: false,
            })
        ]).start();
    }, [showComments]);

    if (!produce?.comments || !Array.isArray(produce.comments) || produce.comments.length === 0) {
        return null;
    }

    const spin = animatedRotate.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg']
    });

    return (
        <View style={styles.commentsContainer}>
            <TouchableOpacity 
                style={styles.commentsHeaderContainer} 
                onPress={toggleComments}
                activeOpacity={0.7}
            >
                <View style={styles.headerLeft}>
                    <Text style={styles.sectionTitle}>Customer Reviews</Text>
                    <Text style={styles.reviewCount}>({produce.comments.length})</Text>
                </View>
                <Animated.View style={{ transform: [{ rotate: spin }] }}>
                    <MaterialIcons 
                        name="keyboard-arrow-down" 
                        size={24} 
                        color="#4CAF50" 
                    />
                </Animated.View>
            </TouchableOpacity>
            
            <Animated.View style={{
                opacity: animatedOpacity,
                maxHeight: animatedHeight.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1000]
                }),
                overflow: 'hidden'
            }}>
                <FlatList
                    data={produce.comments}
                    keyExtractor={(item, index) => `comment-${index}`}
                    scrollEnabled={false}
                    renderItem={({ item }) => (
                        <View style={styles.commentItem}>
                            <View style={styles.commentHeader}>
                                <Text style={styles.commentUsername}>{item?.username || 'Anonymous'}</Text>
                                <View style={styles.commentRatingDate}>
                                    <Text style={styles.commentRating}>{'★'.repeat(item?.rating || 0)}</Text>
                                    <Text style={styles.commentDate}>{item?.date || 'Unknown date'}</Text>
                                </View>
                            </View>
                            <Text style={styles.commentText}>{item?.comment || 'No comment provided'}</Text>
                        </View>
                    )}
                />
            </Animated.View>
        </View>
    );
};

export default CustomerReviews;