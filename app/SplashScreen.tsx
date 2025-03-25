import { ActivityIndicator, Image, ImageBackground } from "react-native";
import React from "react";
import { Info } from "../constants/Info";
import { Colors } from "../constants/Colors";
import { SpaceComponent } from "../components";

const SplashScreen = () => {
    return (
        <ImageBackground
            source={require("../assets/images/splash-img.png")}
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
            imageStyle={{ flex: 1 }}
        >
            <Image
                source={require("../assets/images/logo.png")}
                style={{
                    width: Info.sizes.WIDTH * 0.7,
                    resizeMode: "contain",
                }}
            />
            <SpaceComponent height={16} />
            <ActivityIndicator color={Colors.gray} size={22} />
        </ImageBackground>
    );
};

export default SplashScreen;
