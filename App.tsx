import React from "react";
import { StyleSheet, Text, useColorScheme, View } from "react-native";
import Title from "./src/components/Title";
import Main from "./src/components/Main";
import globalStyles from './styles'; 

function App(): React.JSX.Element {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>2</Text>
      <Main></Main>
    </View>
  );
}

const styles = StyleSheet.create({});

export default App;
