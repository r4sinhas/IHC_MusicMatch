import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { ButtonBar } from "../components/ButtonBar";
import { useNavigation } from "@react-navigation/core";
import { DataTable } from "react-native-paper";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/FontAwesome";
import Listx from "../components/ListBands2";
import ListSongs from "../components/ListSongs2";
import AddConcerts from "../components/AddConcerts2";

const BUTTON_SIZE = 30;
const BORDER_WIDTH = 1;

function ProfileScreen() {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  const [actionTriggered, setActionTriggered] = useState(""); // here we go

  return (
    <View style={styles.container}>
      {/*<View style={styles.header}></View>*/}
      <Image
        style={styles.header}
        source={{
            uri: "https://whiplash.net/imagens_promo/nirvana_logo.jpg?nocache",
          }}
      />
      <Image
        style={styles.avatar}
        source={{
          uri: "https://media.istockphoto.com/photos/portrait-teenager-picture-id846730696?b=1&k=20&m=846730696&s=170667a&w=0&h=a8z_Ro8s8y5cAzj91XsI4yneNW98V1vNthdX8s1L_-Q=",
        }}
      />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>
            Juliana Pais <Text style={{ fontSize: 24, opacity: "80%" }}>21</Text>
          </Text>
          <Text style={styles.info}>Indie and Alternative Rock / Metal</Text>
          <View style={styles.separator}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(true);
                setActionTriggered("ACTION_1"); // HERE
              }}
              style={styles.buttons}
            >
              <Text style={styles.buttonText}>Edit Favourite Bands</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setModalVisible(true);
                setActionTriggered("ACTION_2");
              }}
              style={styles.buttons}
            >
              <Text style={styles.buttonText}>Edit Favourite Songs</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.separator}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(true);
                setActionTriggered("ACTION_3");
              }}
              style={styles.buttons}
            >
              <Text style={styles.buttonText}>Edit Concerts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSpotify}>
              <Icon
                name="spotify"
                size={50}
                style={{ color: "#006400", alignItems: "center", alignItems: "vertically" }}
                
              />
              <Text style={{ fontSize: 16 }}>
                Linked with Spotify!
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.description}>
            I love trains! 
          </Text>
          <Text style={styles.description2}>
            I am a CP worker and I love to travel around the country, especially around Castelo Branco! 
          </Text>
          <Text style={styles.description2}>
            I also love chess, therefore one of my biggest dreams is to create a big chess themed station in Castelo Branco!
          </Text>
        </View>
      </View>

      {/*  */}

      <Modal isVisible={isModalVisible} style={styles.modal}>
        <View style={{ flex: 1 }}>
          {actionTriggered === "ACTION_1" ? (
            <View>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                }}
                style={styles.closeButt}
              >
                <Icon name={"close"} size={BUTTON_SIZE / 2}></Icon>
                <Text></Text>
              </TouchableOpacity>
              <Text style={{ marginTop: 30 }}></Text>
              <Listx></Listx>
            </View>
          ) : actionTriggered === "ACTION_2" ? (
            <View>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                }}
                style={styles.closeButt}
              >
                <Icon name={"close"} size={BUTTON_SIZE / 2}></Icon>
                <Text></Text>
              </TouchableOpacity>
              <Text style={{ marginTop: 20 }}></Text>
              <ListSongs />
            </View>
          ) : actionTriggered === "ACTION_3" ? (
            <View>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                }}
                style={styles.closeButt}
              >
                <Icon name={"close"} size={BUTTON_SIZE / 2}></Icon>
                <Text></Text>
              </TouchableOpacity>
              <Text style={{ marginTop: 20 }}></Text>
              <AddConcerts />
            </View>
          ) : null}
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
  buttonMod2: {
    justifyContent: "center",
    marginTop: 10,
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
    color: "green",
    marginTop: 15,
  },
  description: {
    fontSize: 19,
    color: "#000000",
    marginTop: 40,
    
  },
  description2: {
    fontSize: 19,
    color: "#000000",
    marginTop: 20,
    textAlign: "center",
  },
  buttons: {
    height: 70,
    width: "45%",
    borderRadius: 15,
    backgroundColor: "#363636",
    shadowColor: 'green',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  buttonSpotify: {
    height: 70,
    width: "45%",
    borderRadius: 15,
    backgroundColor: "transparent",
    justifyContent: "center",
    textAlign: "center",
  },
  buttonText: {
    
    fontSize: 18,
    textAlign: "center",
    paddingTop: 12,
    color: "white", 
    
    
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
