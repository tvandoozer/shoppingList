import React from "react";
import { StyleSheet, View, SafeAreaView, FlatList } from "react-native";
import ListItem from "./ListItem";

import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ItemList({ itemList, handleCheck, handleDelete }) {
  return (
    <SafeAreaView>
      <FlatList
        style={styles.screen}
        data={itemList}
        keyExtractor={(itemList) => itemList.id}
        renderItem={({ item }) => (
          <ListItem
            item={item}
            handleCheck={handleCheck}
            // onPress={() => console.log("Item Selected", item.item)}
            renderRightActions={() => (
              <View style={styles.deleteContainer}>
                <TouchableWithoutFeedback onPress={() => handleDelete(item.id)}>
                  <MaterialCommunityIcons
                    name="trash-can"
                    size={35}
                    color="black"
                  />
                </TouchableWithoutFeedback>
              </View>
            )}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 20,
    paddingHorizontal: 20,
    height: "70%",
  },
  deleteContainer: {
    backgroundColor: "#dc143c",
    width: 70,
    height: 53,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
