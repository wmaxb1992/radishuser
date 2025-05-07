import { View, Text, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import React, { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import farms from '../../../assets/data/farms.json';
import { styles } from './styles';
import ProductDetails from './components/ProductDetails';
import CustomerReviews from './components/CustomerReviews';
import GrowingPracticesAndNutrients from './components/GrowingPracticesAndNutrients';
import CartStepper from './components/CartStepper';
import SocialStats from './components/SocialStats';

const { width } = Dimensions.get('window');

// Using absolute import paths for icons
const PineberryIcon = require('../../../assets/icons/produce/Pineberry_strawberry.png');
const CherokeeTomatoIcon = require('../../../assets/icons/produce/Cherokee_tomato.png');

const FarmerProduceDetailScreen = () => {
    const [quantity, setQuantity] = useState(1);
    const [showCartControls, setShowCartControls] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    
    // Add null checks and default values
    const farm = farms?.[0] || {};
    const produce = farm?.produce?.[0] || {
        name: 'Unknown Produce',
        price: 0,
        unit: 'unit',
        quantityAvailable: 0,
        description: '',
        rating: 0,
        likes: 0,
        commentCount: 0,
        images: [],
        growingPractices: [],
        nutrients: [],
        comments: []
    };
    
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showComments, setShowComments] = useState(false);
    
    const images = produce?.images || [];
    const scrollRef = useRef();
    
    const incrementQuantity = () => {
        if (quantity < (produce?.quantityAvailable || 0)) {
            setQuantity(prev => prev + 1);
            setTotalPrice(produce?.price * (quantity + 1));
        }
    };
    
    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
            setTotalPrice(produce?.price * (quantity - 1));
        }
    };

    const changePage = (event) => {
        const { contentOffset } = event.nativeEvent;
        const viewSize = event.nativeEvent.layoutMeasurement;
        const pageNum = Math.floor(contentOffset.x / viewSize.width);
        setCurrentImageIndex(pageNum);
    };

    const toggleComments = () => {
        setShowComments(!showComments);
    };

    const handleUpdatePrice = (newPrice) => {
        setTotalPrice(newPrice);
    };

    // Early return if no produce data
    if (!produce) {
        return (
            <View style={styles.container}>
                <Text>No produce data available</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <StatusBar style="light" backgroundColor="transparent" translucent />
            
            {/* Image Carousel */}
            <View style={styles.imageCarouselContainer}>
                <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={changePage}
                    ref={scrollRef}
                >
                    {images.map((image, index) => (
                        <Image 
                            key={index} 
                            source={{ uri: image?.uri }} 
                            style={styles.carouselImage} 
                            resizeMode="cover" 
                        />
                    ))}
                </ScrollView>
                
                <View style={styles.paginationContainer}>
                    {images.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.paginationDot,
                                currentImageIndex === index && styles.paginationDotActive,
                            ]}
                        />
                    ))}
                </View>
            </View>
            
            <ScrollView 
                style={styles.scrollContent}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContentContainer}
            >
                <View style={styles.infoContainer}>
                    <View style={styles.headerSection}>
                        <View style={styles.titleRow}>
                            <View style={styles.titleContainer}>
                                <View style={styles.titleWithIcon}>
                                    <Image 
                                        source={PineberryIcon}
                                        style={styles.produceIcon}
                                        resizeMode="contain"
                                    />
                                    <Text style={styles.title}>{produce?.name || 'Unknown Produce'}</Text>
                                </View>
                                <Text style={styles.farmSubtitle}>
                                    {produce?.farmerName || farm?.name || 'Unknown Farm'} • {produce?.location || farm?.location || 'Unknown Location'}
                                </Text>
                            </View>
                            <Text style={styles.price}>${produce?.price || 0}/{produce?.unit || 'unit'}</Text>
                        </View>
                        
                        <SocialStats 
                            rating={produce?.rating || 0}
                            likes={produce?.likes || 0}
                            commentCount={produce?.commentCount || 0}
                            onCommentsPress={toggleComments}
                        />
                    </View>
                    
                    {/* Description Section */}
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.description}>{produce?.description || 'No description available'}</Text>
                    </View>
                    
                    {/* Growing Practices and Nutrients */}
                    <GrowingPracticesAndNutrients produce={produce} />
                    
                    {/* Product Details */}
                    <ProductDetails produce={produce} />
                    
                    {/* Customer Reviews */}
                    <CustomerReviews 
                        produce={produce}
                        showComments={showComments}
                        toggleComments={toggleComments}
                    />
                </View>
            </ScrollView>

            {!showCartControls ? (
                <TouchableOpacity 
                    style={styles.addToCartButton}
                    onPress={() => setShowCartControls(true)}
                >
                    <Text style={styles.addToCartButtonText}>Add to Cart</Text>
                </TouchableOpacity>
            ) : (
                <CartStepper
                    quantity={quantity}
                    onIncrement={incrementQuantity}
                    onDecrement={decrementQuantity}
                    maxQuantity={produce?.quantityAvailable || 0}
                    price={produce?.price || 0}
                    produce={produce}
                    onUpdatePrice={handleUpdatePrice}
                />
            )}
        </View>
    );
};

export default FarmerProduceDetailScreen;
