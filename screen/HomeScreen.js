import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text
                style={{
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: "20%"
                }}
            >Home Screen</Text>
            <TouchableOpacity
            onPress={() =>navigation.navigate("Stack")}
                style={{
                    marginTop: "20%",
                    width: "50%",
                    backgroundColor: "blue",
                    padding: 10,
                    borderRadius: 10,
                    alignSelf: "center"
                }}>
                <Text
                    style={{
                        fontSize: 30,
                        textAlign: "center",
                        color: "white"
                    }}
                >Stack Screen</Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomeScreen;