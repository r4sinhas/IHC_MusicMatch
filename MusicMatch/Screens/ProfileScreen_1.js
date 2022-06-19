import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { ButtonBar } from "../components/ButtonBar";
import { useNavigation } from "@react-navigation/core";
import { DataTable } from "react-native-paper";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/FontAwesome";

const BUTTON_SIZE = 30;
const BORDER_WIDTH = 1;

function ProfileScreen_1() {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Image
        style={styles.avatar}
        source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }}
      />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>
            Mike Tyson <Text style={{ fontSize: 24, opacity: "80%" }}>19</Text>
          </Text>
          <Text style={styles.info}>Indie and Alternative Rock / Hip-hop</Text>
          <View style={styles.separator}>
            <TouchableOpacity onPress={toggleModal} style={styles.buttons}>
              <Text style={styles.buttonText}>Show Favourite Bands</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={toggleModal} style={styles.buttons}>
              <Text style={styles.buttonText}>Show Favourite Songs</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum
            electram expetendis, omittam deseruisse consequuntur ius an,
          </Text>
        </View>
      </View>
      {/*  */}
      {/* Modal MOSTRAR FAV SONGS */}

      <Modal isVisible={isModalVisible} style={styles.modal}>
        <View style={{ flex: 1 }}>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>
                <Text style={styles.headerTable}>Favourite Songs</Text>
              </DataTable.Title>
              <DataTable.Title style={{ textAlign: "center" }}>
                Author
              </DataTable.Title>
              <TouchableOpacity onPress={toggleModal} style={styles.closeButt}>
                <Icon name={"close"} size={BUTTON_SIZE / 2} />
              </TouchableOpacity>
            </DataTable.Header>

            <DataTable.Row>
              <DataTable.Title>Teenagers</DataTable.Title>
              <DataTable.Title>My Chemical Romance</DataTable.Title>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Title>Lithium</DataTable.Title>
              <DataTable.Title>Nirvana</DataTable.Title>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Title>Numb</DataTable.Title>
              <DataTable.Title>Linkin Park</DataTable.Title>
            </DataTable.Row>
            <DataTable.Row>
              <TouchableOpacity onPress={toggleModal}>
                <Icon
                  name="plus"
                  onPress={() => {
                    navigation.navigate("addBands");
                    toggleModal();
                  }}
                  style={{ fontSize: 18, fontWeight: "bold" }}
                >
                  <Text style={{ marginLeft: 5 }}>Add Band</Text>
                </Icon>
              </TouchableOpacity>
            </DataTable.Row>
          </DataTable>
        </View>
      </Modal>
      <ButtonBar />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00BFFF",
    height: 150,
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
  separator: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  container: { backgroundColor: "6b6b6b", height: "100%" },
  headerTable: {
    fontSize: 17,
  },
  buttonMod: {
    justifyContent: "center",
    textAlign: "center",
    padding: 12,
    borderRadius: 30,
    backgroundColor: "white",
    marginHorizontal: "25%", // 25 each side means center
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 90,
  },
  name: {
    fontSize: 26,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600",
  },
  info: {
    fontSize: 20,
    color: "#00BFFF",
    marginTop: 15,
  },
  description: {
    fontSize: 19,
    color: "#696969",
    marginTop: 40,
    textAlign: "justify",
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

export default ProfileScreen_1;
