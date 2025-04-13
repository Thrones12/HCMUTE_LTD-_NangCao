// navigators/BottomTabNavigator.tsx
import React, { useState } from "react";
import { View, Pressable } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, ProfileScreen } from "@/screens";
import Ionicons from "react-native-vector-icons/Ionicons";
import LessonListScreen from "@/screens/mainTab/LessonListScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            backBehavior='history'
            screenOptions={({ route }: any) => ({
                headerShown: false,
                animation: "shift",
                tabBarItemStyle: {
                    backgroundColor: "#fff",
                },
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === "Home") {
                        iconName = "home-outline";
                    } else {
                        iconName = "person-outline";
                    }

                    return (
                        <Ionicons name={iconName} size={size} color={color} />
                    );
                },
            })}
        >
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Lesson' component={LessonListScreen} />
            <Tab.Screen name='Profile' component={ProfileScreen} />
        </Tab.Navigator>
    );
};
export default TabNavigator;
