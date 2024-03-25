import { useState } from "react";
import { View, StyleSheet } from "react-native";
// import ItemData from "./components/ItemData";
import ShoppingList from "./components/ShoppingList";
import Header from "./components/Header";
// import ItemList from "./components/ItemList";
// import ListItem from "./components/ListItem";
// import AddItem from "./components/AddItem";

export default function App() {
  const [itemList, setItemList] = useState([]);
  const [newItem, setNewItem] = useState("");

  const addItem = (item) => {
    const id = itemList.length ? itemList[itemList.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...itemList, myNewItem];
    setItemList(listItems);
  };

  const handleCheck = (id) => {
    const listItems = itemList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItemList(listItems);
  };

  const handleDelete = (id) => {
    const listItems = itemList.filter((item) => item.id !== id);
    setItemList(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <View style={styles.container}>
      <Header />
      <ShoppingList
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
        itemList={itemList}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      {/* <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      /> */}
      {/* <ItemList
        itemList={itemList}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      /> */}
      {/* <ListItem
        item={itemList[0]}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E4E2",
  },
});
