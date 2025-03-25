import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../app/Auth/LoginScreen";
import OnBroadingScreen from "../app/Auth/OnBroadingScreen";

const AuthNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
            <Stack.Screen
                name='OnBroadingScreen'
                component={OnBroadingScreen}
            />
        </Stack.Navigator>
    );
};

export default AuthNavigator;
