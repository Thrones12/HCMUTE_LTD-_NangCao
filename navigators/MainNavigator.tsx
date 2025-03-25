import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import LoginScreen from "../app/Auth/LoginScreen";

const MainNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Main' component={TabNavigator} />
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
        </Stack.Navigator>
    );
};

export default MainNavigator;
