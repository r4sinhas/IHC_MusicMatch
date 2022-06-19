import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-web";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/core";

const BUTTON_SIZE = 30;
const BORDER_WIDTH = 1;

function addBands() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.header}>Adicionar banda favorita</Text>
        <View style={{ flexDirection: "row" }}>
          <TextInput style={styles.tinput} placeholder="  add band" />
          <TouchableOpacity
            style={styles.butt}
            onPress={() => {
              navigation.navigate("Prof2");
            }}
          >
            <Icon name={"check"} size={BUTTON_SIZE / 2}></Icon>
          </TouchableOpacity>
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

export default addBands;
