import { View, Text, Button } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({ navigation }: any) => {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text>LoginScreen</Text>
            <Button
                title='Login'
                onPress={async () => {
                    await AsyncStorage.setItem("assetToken", "Phong");
                    navigation.navigate("Main");
                }}
            />
        </View>
    );
};

export default LoginScreen;
