import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import { VertifyScreen } from "@/screens";
import LessonTabNavigator from "./LessonTabNavigator";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName='Main'
        >
            {/* Tab navigator */}
            <Stack.Screen name='Main' component={TabNavigator} />
            <Stack.Screen name='LessonTab' component={LessonTabNavigator} />
            <Stack.Screen name='Vertify' component={VertifyScreen} />
        </Stack.Navigator>
    );
};

export default MainNavigator;
