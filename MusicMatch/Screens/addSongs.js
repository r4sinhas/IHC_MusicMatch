import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-web";
import { KeyboardAvoidingView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
const BUTTON_SIZE = 30;
const BORDER_WIDTH = 1;

function addSongs(props) {
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.header}>Adicionar musicas favoritas</Text>
        <View style={{ flexDirection: "row" }}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
          >
            <TextInput
              style={styles.inputField}
              value={task}
              onChangeText={(text) => setTask(text)}
              placeholder={"Write a task"}
              placeholderTextColor={"#fff"}
            />
            <TouchableOpacity onPress={() => handleAddTask(task)}>
              <View style={styles.button}>
                <MaterialIcons
                  name="keyboard-arrow-up"
                  size={24}
                  color="black"
                />
              </View>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 25,
  },
  header: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    justifyContent: "center",
  },
  tinput: {
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 20,
    height: 40,
    width: 200,
    borderColor: "#7a42f4",
    borderWidth: 1,
    flexDirection: "row",
  },
  butt: {
    justifyContent: "center",
    alignItems: "center",
    width: BUTTON_SIZE + BORDER_WIDTH,
    height: BUTTON_SIZE + BORDER_WIDTH,
    borderWidth: BORDER_WIDTH,
    borderRadius: BUTTON_SIZE / 2,
    backgroundColor: "white",
    marginTop: 25,
    marginLeft: 100,
  },
});

export default addSongs;
