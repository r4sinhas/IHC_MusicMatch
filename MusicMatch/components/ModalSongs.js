import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/FontAwesome";
import ListSongs from "../components/ListSongs";

const BUTTON_SIZE = 30;
const BORDER_WIDTH = 1;

function ProfileScreen() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <Modal isVisible={isModalVisible} style={styles.modal}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={toggleModal} style={styles.closeButt}>
            <Icon name={"close"} size={BUTTON_SIZE / 2}></Icon>
            <Text></Text>
          </TouchableOpacity>
          <Text style={{ marginTop: 20 }}></Text>
          <ListSongs />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00BFFF",
    height: 150,
  },
  Title: {
    fontSize: 30,
  },
  tinput: {
    height: 40,
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
    position: "absolute",
    zIndex: 999,
  },

  modal: {
    flex: 1,
    marginVertical: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: "white",
    opacity: 50,
    borderRadius: 4,
  },
  buttons: {
    height: 70,
    width: "45%",
    borderRadius: 15,
    backgroundColor: "white",
  },
  buttonText: {
    fontSize: 18,
    textAlign: "center",
    padding: 15,
  },
  closeButt: {
    justifyContent: "center",
    alignItems: "center",
    width: BUTTON_SIZE + BORDER_WIDTH,
    height: BUTTON_SIZE + BORDER_WIDTH,
    borderWidth: BORDER_WIDTH,
    borderRadius: BUTTON_SIZE / 2,
    backgroundColor: "white",
    position: "absolute",
    right: 5,
    top: 5,
  },
});

export default ProfileScreen;
