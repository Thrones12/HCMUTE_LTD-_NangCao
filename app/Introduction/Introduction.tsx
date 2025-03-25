import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

const Introduction = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Home");
        }, 10000);
    }, []);
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 24 }}>Phạm Hùng Phong</Text>
            <Text style={{ fontSize: 16 }}>MSSV: 21110273</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
});
export default Introduction;
