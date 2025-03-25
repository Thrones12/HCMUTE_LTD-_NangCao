import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { fontFamilies } from "@/constants/Fonts";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    text: {
        fontFamily: fontFamilies.regular,
        fontSize: 14,
        color: Colors.text,
    },
    button: {
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.white,
        paddingHorizontal: 16,
        paddingVertical: 16,
        flexDirection: "row",
    },
    shadow: {
        shadowColor: "rgba(0,0,0,0.5)",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 6,
    },
});
