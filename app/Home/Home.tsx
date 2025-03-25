import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20 }}>Home page</Text>
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
export default Home;
