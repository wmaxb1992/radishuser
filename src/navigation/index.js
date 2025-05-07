import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeTabs } from "./HomeTabNavigator";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}
    >
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
    </Stack.Navigator>
  );
};

export default RootNavigator;