import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Shopping List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: "100%",
    height: 85,
    backgroundColor: "#008b8b",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    position: "absolute",
    bottom: 8,
    fontSize: 25,
    fontWeight: "bold",
    color: "#ffffff",
  },
});

export default Header;
