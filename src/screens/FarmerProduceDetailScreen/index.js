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


const FarmerProduceDetailScreen = () => {
    const [quantity, setQuantity] = useState(1);
    const [showCartControls, setShowCartControls] = useState(false);
    
    const produce = farms[0].produce[0];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showComments, setShowComments] = useState(false);
    
    const images = produce.images || [];
    const scrollRef = useRef();
    
    const incrementQuantity = () => {
        if (quantity < produce.quantityAvailable) {
            setQuantity(prev => prev + 1);
        }
    };
    
    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
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
                            source={{ uri: image.uri }} 
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
                                <Text style={styles.title}>{produce.name}</Text>
                                <Text style={styles.farmSubtitle}>
                                    {produce.farmerName || farms[0].name} • {produce.location || farms[0].location}
                                </Text>
                            </View>
                            <Text style={styles.price}>${produce.price}/{produce.unit}</Text>
                        </View>
                        
                        <SocialStats 
                            rating={produce.rating}
                            likes={produce.likes}
                            commentCount={produce.commentCount}
                            onCommentsPress={toggleComments}
                        />
                    </View>
                    
                    {/* Description Section */}
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.description}>{produce.description}</Text>
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
                    maxQuantity={produce.quantityAvailable}
                    price={produce.price}
                />
            )}
        </View>
    );
};

export default FarmerProduceDetailScreen;
