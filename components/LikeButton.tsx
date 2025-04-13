import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const FavoriteButton = () => {
    const [isLiked, setIsLiked] = useState(false);

    const toggleLike = () => {
        setIsLiked((prev) => !prev);
    };

    return (
        <View style={styles.wrapper}>
            <TouchableOpacity style={styles.fab} onPress={toggleLike}>
                <Ionicons
                    name={"heart"}
                    size={24}
                    color={isLiked ? "#E53935" : "#fff"}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        position: "absolute",
        top: 0,
        right: 20,
        alignItems: "center",
        zIndex: 999,
    },
    fab: {
        backgroundColor: "#BCAAA4",
        width: 30,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
    },
});

export default FavoriteButton;
