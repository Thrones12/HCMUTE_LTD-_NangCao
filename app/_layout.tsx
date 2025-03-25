import React from "react";
import Home from "./Home/Home";
import Introduction from "./Introduction/Introduction";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function RootLayout() {
    return (
        <Stack.Navigator
            initialRouteName='Introduction'
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Introduction' component={Introduction} />
        </Stack.Navigator>
    );
}
