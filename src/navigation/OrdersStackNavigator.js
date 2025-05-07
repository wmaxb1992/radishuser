import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OrderScreen from "../screens/OrderScreen";
import OrderDetails from "../screens/OrderDetails";
import { navigationStyles } from "./styles";

const OrdersStack = createNativeStackNavigator();

export const OrdersStackNavigator = () => {
  return (
    <OrdersStack.Navigator
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
      <OrdersStack.Screen name="Orders" component={OrderScreen} />
      <OrdersStack.Screen name="OrderDetails" component={OrderDetails} />
    </OrdersStack.Navigator>
  );
};