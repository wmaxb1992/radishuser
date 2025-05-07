import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../screens/HomeScreen';
import FarmerDetailPage from '../screens/FarmerDetailScreen';
import FarmerProduceDetailScreen from '../screens/FarmerProduceDetailScreen';
import BasketScreen from '../screens/Basket';
import OrderScreen from '../screens/OrderScreen';
import OrderDetails from '../screens/OrderDetails';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
        >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FarmerDetail" component={FarmerDetailPage} />
        <Stack.Screen name="FarmerProduceDetail" component={FarmerProduceDetailScreen} />
        <Stack.Screen name="Basket" component={BasketScreen} />
        <Stack.Screen name="Order" component={OrderScreen} />
        <Stack.Screen name="OrderDetails" component={OrderDetails} />
        </Stack.Navigator>
    );
    };

    export default RootNavigator;