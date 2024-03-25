import { StyleSheet, Text } from "react-native";

import ItemList from "./ItemList";
import AddItem from "./AddItem";

export default function ShoppingList({
  itemList,
  newItem,
  setNewItem,
  handleSubmit,
  handleCheck,
  handleDelete,
}) {
  return (
    <>
      {itemList.length ? (
        <ItemList
          itemList={itemList}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <Text style={styles.emptyList}>Your list is empty</Text>
      )}
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

const styles = StyleSheet.create({
  emptyList: {
    marginTop: 70,
    textAlign: "center",
    fontSize: 20,
  },
});
