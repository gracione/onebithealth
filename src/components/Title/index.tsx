import React from "react";
import { View, Text } from "react-native";

export default function Title() {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "black" }}>Onebithealth</Text>
    </View>
  );
}