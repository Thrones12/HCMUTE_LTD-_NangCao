import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, textAlign: "center" }}>Home page</Text>
            <Button
                title='Logout'
                onPress={async () => {
                    await AsyncStorage.clear();
                    navigation.navigate("LoginScreen");
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    },
});
export default Home;
