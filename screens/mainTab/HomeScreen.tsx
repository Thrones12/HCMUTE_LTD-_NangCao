import {
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    ActivityIndicator,
    Pressable,
} from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { Colors, Info } from "@/constants";
import { ButtonComponent } from "@/components";

const PAGE_SIZE = 10;
const HomeScreen = ({ navigation }: any) => {
    const { logout } = useContext(AuthContext);

    return (
        <View
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
            }}
        >
            <Text>Home</Text>
            <ButtonComponent
                text='Logout'
                onPress={logout}
                type='primary'
                styles={styles.button}
                bgColor={Colors.Sky}
                bgColorPress={Colors.SkyPress}
                textStyles={styles.text}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        padding: 10,
    },
    text: {
        color: Colors.white,
    },
});

export default HomeScreen;
