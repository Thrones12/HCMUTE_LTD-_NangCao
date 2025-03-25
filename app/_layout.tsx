import React, { useState, useEffect } from "react";
import SplashCreen from "./SplashScreen";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "@/navigators/AuthNavigator";
import MainNavigator from "@/navigators/MainNavigator";
import { StatusBar } from "react-native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

export default function RootLayout() {
    const [isShowSplash, setIsShowSplash] = useState(true);
    const [accessToken, setAccessToken] = useState("");
    const { getItem, setItem } = useAsyncStorage("assetToken");

    useEffect(() => {
        setTimeout(() => {
            setIsShowSplash(false);
        }, 1500);
    });
    useEffect(() => {
        checkLogin();
    }, []);

    const checkLogin = async () => {
        const token = await getItem();
        console.log(token);

        token && setAccessToken(token);
    };

    return (
        <>
            <StatusBar
                barStyle={"dark-content"}
                translucent
                backgroundColor={"transparent"}
            />
            {isShowSplash ? (
                <SplashCreen />
            ) : accessToken ? (
                <MainNavigator />
            ) : (
                <AuthNavigator />
            )}
        </>
    );
}
