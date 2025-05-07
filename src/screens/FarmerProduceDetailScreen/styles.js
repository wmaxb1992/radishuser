import { StyleSheet, Dimensions, StatusBar } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 20,
    },
    imageCarouselContainer: {
        height: 350,
        position: 'relative',
        marginTop: -StatusBar.currentHeight || 0,
    },
    carouselImage: {
        width,
        height: 350,
    },
    paginationContainer: {
        position: 'absolute',
        bottom: 20,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        margin: 5,
    },
    paginationDotActive: {
        backgroundColor: '#fff',
        width: 12,
        height: 12,
        borderRadius: 6,
    },
    infoContainer: {
        padding: 16,
        backgroundColor: "#f8f8f8",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: -40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
    },
    headerSection: {
        marginBottom: 10,
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 8,
        paddingTop: 15,
    },
    titleContainer: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: "600",
        color: "#333",
        fontFamily: 'RobotoMedium',
    },
    farmSubtitle: {
        fontSize: 13,
        color: "#777",
        marginTop: 4,
        fontFamily: 'RobotoMedium',
    },
    price: {
        fontSize: 22,
        fontWeight: "700",
        color: "#4CAF50",
    },
    socialStatsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    ratingContainer: {
        backgroundColor: '#fff8e1',
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 15,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#ffecb3',
    },
    rating: {
        fontSize: 16,
        color: '#FF8C00',
        fontWeight: '600',
    },
    likesContainer: {
        backgroundColor: '#ffebee',
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 15,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#ffcdd2',
    },
    likesText: {
        fontSize: 16,
        color: '#E91E63',
        fontWeight: '600',
    },
    commentCountContainer: {
        backgroundColor: '#e8f5e9',
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#c8e6c9',
    },
    commentCountText: {
        fontSize: 16,
        color: '#4CAF50',
        fontWeight: '600',
    },
    descriptionContainer: {
        marginBottom: 20,
        paddingBottom: 20,
        borderBottomColor: '#f0f0f0',
        borderBottomWidth: 1,
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: "#555",
    },
    addToCartContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 16,
        marginBottom: 10,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        paddingHorizontal: 8,
        marginRight: 12,
    },
    quantityButton: {
        padding: 8,
    },
    quantityButtonDisabled: {
        opacity: 0.5,
    },
    quantityText: {
        fontSize: 18,
        fontWeight: '600',
        marginHorizontal: 16,
        minWidth: 24,
        textAlign: 'center',
    },
    buyButton: {
        flex: 1,
        backgroundColor: '#4CAF50',
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
    },
    buyButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    scrollContent: {
        flex: 1,
        overflow: 'visible',
    },
    scrollContentContainer: {
        paddingBottom: 220, // Add enough padding to account for the CartStepper
    },
    addToCartButton: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginHorizontal: 16,
        marginBottom: 16,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    addToCartButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },

    // CartStepper styles
    cartStepperContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: -4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        zIndex: 1000,
    },
    cartStepperAddToCartContainer: {
        padding: 16,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    cartStepperQuantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
        backgroundColor: '#f8f8f8',
        borderRadius: 12,
        padding: 8,
    },
    cartStepperQuantityButton: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    cartStepperQuantityButtonDisabled: {
        opacity: 0.5,
        backgroundColor: '#f5f5f5',
    },
    cartStepperQuantityTextContainer: {
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    cartStepperQuantityText: {
        fontSize: 24,
        fontWeight: '600',
        color: '#2E7D32',
    },
    cartStepperUnitText: {
        fontSize: 12,
        color: '#666',
        marginTop: 2,
    },
    cartStepperPriceContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: 16,
    },
    cartStepperPriceLabel: {
        fontSize: 16,
        color: '#666',
        marginRight: 8,
    },
    cartStepperPriceAmount: {
        fontSize: 24,
        fontWeight: '600',
        color: '#2E7D32',
    },
    cartStepperBuyButtonContainer: {
        overflow: 'hidden',
        borderRadius: 12,
    },
    cartStepperBuyButton: {
        backgroundColor: '#4CAF50',
        padding: 16,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    cartStepperCartIcon: {
        marginRight: 8,
    },
    cartStepperBuyButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },

    // CustomerReviews styles
    commentsContainer: {
        marginBottom: 20,
        paddingBottom: 10,
        borderBottomColor: '#f0f0f0',
        borderBottomWidth: 1,
    },
    commentsHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    reviewCount: {
        fontSize: 16,
        color: '#4CAF50',
        fontWeight: '500',
    },
    commentItem: {
        backgroundColor: '#fafafa',
        borderRadius: 8,
        padding: 12,
        marginBottom: 10,
    },
    commentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    commentUsername: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    commentRatingDate: {
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    commentRating: {
        fontSize: 14,
        color: '#FF8C00',
        marginBottom: 2,
    },
    commentDate: {
        fontSize: 12,
        color: '#999',
    },
    commentText: {
        fontSize: 15,
        lineHeight: 22,
        color: '#555',
    },

    // GrowingPracticesAndNutrients styles
    practicesNutrientsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
        paddingHorizontal: 4,
    },
    infoHalfContainer: {
        width: '48%',
        alignItems: 'center',
        backgroundColor: '#fafafa',
        borderRadius: 8,
        padding: 8,
    },
    infoSectionTitle: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 8,
        color: '#333',
        textAlign: 'center',
    },
    tagsContainerCompact: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
    },
    tagItemCompact: {
        backgroundColor: '#f1f8e9',
        borderRadius: 12,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderWidth: 1,
        borderColor: '#dcedc8',
    },
    tagTextCompact: {
        color: '#558B2F',
        fontSize: 12,
        fontWeight: '500',
    },

    // ProductDetails styles
    detailsContainer: {
        marginBottom: 16,
        paddingBottom: 16,
        borderBottomColor: '#f0f0f0',
        borderBottomWidth: 1,
    },
    detailsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    detailItem: {
        width: '50%',
        paddingRight: 10,
        marginBottom: 12,
    },
    detailLabel: {
        fontSize: 14,
        color: "#888",
        marginBottom: 2,
    },
    detailValue: {
        fontSize: 16,
        color: "#333",
        fontWeight: '500',
    },

    // SocialStats styles
    socialStatsRow: {
        flexDirection: 'row',
        marginTop: 8,
        gap: 12,
    },
    statContainer: {
        backgroundColor: '#FFF3E0',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    },
    ratingText: {
        color: '#FF9800',
        fontWeight: '600',
    },
    likesStatContainer: {
        backgroundColor: '#FCE4EC',
    },
    likesText: {
        color: '#E91E63',
        fontWeight: '600',
    },
    commentStatContainer: {
        backgroundColor: '#E8F5E9',
    },
    commentText: {
        color: '#4CAF50',
        fontWeight: '600',
    },
});