import React from "react";
import { View, Text } from "react-native";
import Form from "../Form";

export default function Main() {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form />
    </View>
  );
}