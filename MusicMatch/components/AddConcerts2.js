import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { FlatList } from "react-native-web";

const ListBands2 = () => {
  const [textInput, setTextInput] = React.useState("");
  const [list, setList] = React.useState([
    {
      id: 0,
      title: "NOS Primavera Sound",
    },
    {
      id: 1,
      title: "MEO Sudoeste",
    },
  ]);

  const removeBand = (bandId) => {
    const newList = list.filter((item) => item.id != bandId);
    setList(newList);
  };

  const ListItem = ({ band }) => {
    return (
      <View style={styles.listItem}>
        <View styles={{ flex: 1, fontSize: 50 }}>
          <Text styles={{ fontWeight: "bold", color: "black" }}>
            {band.title}
          </Text>
        </View>
        <View style={{ flex: 1, alignItems: "end" }}>
          <TouchableOpacity
            style={styles.actionIcon}
            onPress={() => removeBand(band.id)}
          >
            <Icon name="trash" size={30} color={"red"}></Icon>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const addBand = () => {
    console.log(textInput);
    if (textInput == "") {
      console.log("h");
      Alert("Empty band!", "Pleast input an Event/!");
    } else {
      const newBand = {
        id: Math.random(),
        title: textInput,
      };
      setList([...list, newBand]);
      setTextInput("");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          {" "}
          Edit Events/Concerts!
        </Text>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 20, paddingBottom: 100 }}
        data={list}
        renderItem={({ item }) => <ListItem band={item} />}
      />

      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="add event..."
            value={textInput}
            onChangeText={(text) => setTextInput(text)}
          />
        </View>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <TouchableOpacity onPress={addBand}>
            <View style={styles.iconContainer}>
              <Icon name="plus-circle" color={"green"} size={30} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  footer: {
    height: 60,
    flex: 1,
    position: "absolute",
    bottom: 0,
    color: "black",
    width: "97.5%",
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: 20,
    marginRight: 20,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    color: "black",
    elevation: 40,
    marginVertical: 20,
    marginRight: 20,
    borderRadius: 30,
    paddingHorizontal: 20,
  },
  iconContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    elevation: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 36,
  },
  listItem: {
    fontSize: 22,
    padding: 20,
    flexDirection: "row",
    elevation: 12,
    borderRadius: 7,
    marginVertical: 10,
  },
  actionIcon: {
    height: 25,
    width: 25,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
    borderRadius: 3,
  },
  input: {
    borderColor: "gray",
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
  },
});

export default ListBands2;
