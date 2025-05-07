import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { HomeStackNavigator } from "./HomeStackNavigator";
import { OrdersStackNavigator } from "./OrdersStackNavigator";
import BasketScreen from "../screens/Basket";
import OrderScreen from "../screens/OrderScreen";
import { navigationStyles } from "./styles";

const Tab = createMaterialBottomTabNavigator();

export const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#694fad"
      inactiveColor="#757575"
      barStyle={navigationStyles.tabBar}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Basket"
        component={BasketScreen}
        options={{
          tabBarLabel: "Basket",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="basket" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersStackNavigator}
        options={{
          tabBarLabel: "Orders",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="clipboard-list" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={OrderScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};