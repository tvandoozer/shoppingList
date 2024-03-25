import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

export default function AddItem({ newItem, setNewItem, handleSubmit }) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.addItemWrapper}
    >
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder={"Add Item"}
          value={newItem}
          onChangeText={(text) => setNewItem(text)}
        />
      </View>

      <TouchableOpacity onPress={handleSubmit}>
        <View style={styles.addBtn}>
          <AntDesign name="plussquare" size={57} color="black" />
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  addItemWrapper: {
    position: "absolute",
    bottom: 90,
    paddingLeft: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  inputWrapper: {},
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 5,
    borderColor: "#C0C0C0",
    borderWidth: 3,
    width: 240,
  },
  addBtn: {
    paddingLeft: 10,
  },
});
