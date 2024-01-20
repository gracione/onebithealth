import React from "react";
import { StyleSheet, Text, useColorScheme, View } from "react-native";

function App(): React.JSX.Element {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "black" }}>test</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default App;
