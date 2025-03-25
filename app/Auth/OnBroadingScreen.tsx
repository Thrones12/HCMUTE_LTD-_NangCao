import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "@/styles/globalStyles";
import Swiper from "react-native-swiper";
import { Colors } from "@/constants/Colors";
import { Info } from "@/constants/Info";

const OnBroadingScreen = ({ navigation }: any) => {
    const [index, setIndex] = useState(0);
    return (
        <View style={[globalStyles.container]}>
            <Swiper
                style={{}}
                loop={false}
                onIndexChanged={(num) => setIndex(num)}
                index={index}
                activeDotColor={Colors.white}
            >
                <Image
                    source={require("../../assets/images/onboarding-1.png")}
                    style={{
                        flex: 1,
                        width: Info.sizes.WIDTH,
                        height: Info.sizes.HEIGHT,
                        resizeMode: "cover",
                    }}
                />
                <Image
                    source={require("../../assets/images/onboarding-2.png")}
                    style={{
                        flex: 1,
                        width: Info.sizes.WIDTH,
                        height: Info.sizes.HEIGHT,
                        resizeMode: "cover",
                    }}
                />
            </Swiper>
            <View
                style={{
                    paddingHorizontal: 16,
                    paddingVertical: 16,
                    position: "absolute",
                    bottom: 20,
                    right: 20,
                    left: 20,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate("LoginScreen")}
                >
                    <Text style={[styles.text]}>Skip</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() =>
                        index < 2
                            ? setIndex(index + 1)
                            : navigation.navigate("LoginScreen")
                    }
                >
                    <Text style={[styles.text]}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default OnBroadingScreen;

const styles = StyleSheet.create({
    text: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: "500",
    },
});
