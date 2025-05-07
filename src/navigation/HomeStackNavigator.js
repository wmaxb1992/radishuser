import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import FarmerDetailPage from "../screens/FarmerDetailScreen";
import FarmerProduceDetailScreen from "../screens/FarmerProduceDetailScreen";
import BasketScreen from "../screens/Basket";
import { navigationStyles } from "./styles";

const HomeStack = createNativeStackNavigator();

export const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
        headerStyle: navigationStyles.headerStyle,
        headerTitleStyle: navigationStyles.headerTitleStyle,
        headerBackTitleStyle: navigationStyles.headerBackTitleStyle,
        headerTintColor: navigationStyles.headerTintColor,
        cardStyle: navigationStyles.cardStyle,
      }}
    >
      <HomeStack.Screen name="Farm" component={HomeScreen} />
      <HomeStack.Screen name="FarmerDetail" component={FarmerDetailPage} />
      <HomeStack.Screen name="FarmerProduceDetail" component={FarmerProduceDetailScreen} />
      <HomeStack.Screen name="Basket" component={BasketScreen} />
    </HomeStack.Navigator>
  );
};