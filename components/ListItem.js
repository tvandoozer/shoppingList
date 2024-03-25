import React from "react";
import { Text, StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import Checkbox from "expo-checkbox";
import {
  Swipeable,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ListItem({
  item,
  handleCheck,
  onPress,
  renderRightActions,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableWithoutFeedback onPress={onPress}>
          <View style={styles.item}>
            <View style={styles.itemLeft}>
              <View style={styles.checkboxContainer}>
                <Checkbox
                  value={item.checked}
                  onValueChange={() => handleCheck(item.id)}
                  style={styles.checkbox}
                />
              </View>
              <Text
                style={item.checked ? styles.textCompleted : styles.itemText}
              >
                {item.item}
                <Text style={styles.completeStatus}>
                  {item.checked ? "👍" : ""}
                </Text>
              </Text>
            </View>
            <View>
              <MaterialCommunityIcons
                name="chevron-right"
                size={20}
                color="black"
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  checkboxContainer: {
    marginRight: 15,
  },
  checkbox: {
    width: 24,
    height: 24,
  },
  itemText: {
    maxWidth: "80%",
    opacity: 1.0,
  },
  textCompleted: {
    maxWidth: "80%",
    opacity: 0.5,
  },
  completeStatus: {
    position: "relative",
    left: 10,
    bottom: 3,
    opacity: 1.0,
  },
  more: {
    width: 20,
    height: 20,
  },
});
