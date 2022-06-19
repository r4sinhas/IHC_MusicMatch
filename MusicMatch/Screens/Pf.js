import React, { useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import Modal from "react-native-modal";

function ProfileScreen() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1 }}>
      <Button title="Show modal" onPress={toggleModal} />

      <Modal isVisible={isModalVisible} style={styles.modal}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={toggleModal} style={styles.closeButt}>
            <Icon name={"close"} size={BUTTON_SIZE / 2}></Icon>
            <Text></Text>
          </TouchableOpacity>

          <DataTable>
            <DataTable.Header style={{ height: 50 }}>
              <DataTable.Title>
                <Text
                  style={{
                    fontSize: 22,
                    width: "100%",
                    fontWeight: "bold",
                  }}
                >
                  Favourite Bands
                </Text>
              </DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
              <DataTable.Title>My Chemical Romance</DataTable.Title>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Title>Nirvana</DataTable.Title>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Title>Linkin Park</DataTable.Title>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Title>
                <TouchableOpacity onPress={toggleModal}>
                  <Icon
                    name="plus"
                    onPress={toggleModal}
                    style={{ fontSize: 18, fontWeight: "bold" }}
                  >
                    {" "}
                    <Text style={{ marginLeft: 5 }}>Add Band</Text>
                  </Icon>
                </TouchableOpacity>
              </DataTable.Title>
            </DataTable.Row>
          </DataTable>
        </View>
      </Modal>

      {/*  */}

      {/* Modal MOSTRAR FAV SONGS */}

      <Modal isVisible={modalVisibSongs} style={styles.modal}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => navigation.goBack(null)}
            style={styles.closeButt}
          >
            <Icon name={"close"} size={BUTTON_SIZE / 2} />
          </TouchableOpacity>

          <DataTable>
            <DataTable.Header>
              <DataTable.Title>
                <Text style={styles.headerTable}>Favourite Songs</Text>
              </DataTable.Title>
              <DataTable.Title style={{ textAlign: "center" }}>
                Author
              </DataTable.Title>
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
          </DataTable>

          <DataTable>
            <DataTable.Header style={{ height: 50 }}>
              <DataTable.Title>
                <Text
                  style={{
                    fontSize: 20,
                    width: "100%",
                    fontWeight: "bold",
                  }}
                >
                  Favourite Songs
                </Text>
              </DataTable.Title>
              <DataTable.Title style={{ textAlign: "center" }}>
                Author
              </DataTable.Title>
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
              <DataTable.Title>
                <TouchableOpacity onPress={toggleModalSongs}>
                  <Icon
                    name="plus"
                    onPress={toggleModalSongs}
                    style={{ fontSize: 18, fontWeight: "bold" }}
                  >
                    {" "}
                    <Text style={{ marginLeft: 5 }}>Add Songs</Text>
                  </Icon>
                </TouchableOpacity>
              </DataTable.Title>
            </DataTable.Row>
          </DataTable>
        </View>
      </Modal>

      <TouchableOpacity
        onPress={() => navigation.navigate(null)}
        style={styles.buttons}
      >
        <Text style={styles.buttonText}>Show Favourite Songs</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00BFFF",
    height: 150,
  },
  headerTable: {
    fontSize: 17,
  },
  container: {
    padding: 25,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "6b6b6b",
    height: "100%",
  },
  button: {
    display: "flex",
    height: 60,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#2AC062",
    shadowColor: "#2AC062",
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 10,
      width: 0,
    },
    shadowRadius: 25,
  },
  closeButton: {
    display: "flex",
    height: 60,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF3974",
    shadowColor: "#2AC062",
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 10,
      width: 0,
    },
    shadowRadius: 25,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 22,
  },
  image: {
    marginTop: 150,
    marginBottom: 10,
    width: "100%",
    height: 350,
  },
  text: {
    fontSize: 24,
    marginBottom: 30,
    padding: 40,
  },
  closeText: {
    fontSize: 24,
    color: "#00479e",
    textAlign: "center",
  },
});

export default ProfileScreen;
