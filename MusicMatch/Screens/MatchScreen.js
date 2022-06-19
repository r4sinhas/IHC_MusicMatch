import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { ButtonBar } from "../components/ButtonBar";
import Modal from "react-native-modal";
global.counter = 1;
export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          color: "#FF4500",
          icon: "https://content.presspage.com/uploads/1369/nehacrop2.jpg?10000",
          name: "Joana Furtado",
          genres: ["Pop"],
          artists: ["Harry Styles"],
          album: ["Random Access Memories"],
          song: ["Todos os patinhos"],
        },
        {
          id: 2,
          color: "#87CEEB",
          icon: "https://www.latin-wife.com/images/colombian-woman-young.jpg",
          name: "Manuela Alvaréz",
          genres: ["Classical"],
          artists: ["Chopin"],
          album: ["Cigarettes After Sex"],
          song: ["Jingle Bells"],
        },

        {
          id: 3,
          color: "#4682B4",
          icon: "https://i.imgur.com/ybq7Q2d.jpg",
          name: "Daniela Ruah",
          genres: ["Jazz"],
          artists: ["Michael  bublé"],
          album: ["Crazy Love"],
          song: ["Sway"],
        },
        {
          id: 4,
          color: "#green",
          icon: "https://i.imgur.com/49fzqXr.jpg",
          name: "CR7",
          genres: ["Hip-hop"],
          artists: ["Tupac Shakur"],
          album: ["All Eyez On Me"],
          song: ["Hit 'Em Up"],
        },
      ],
      disable: false,
      disableButt: false,
      isModalVisible: false,
    };
  }

  removeTodo(counter) {
    console.log("Removing ->" + counter);
    const data = this.state.data.filter((i) => i.id !== counter);
    global.counter = counter + 1;
    console.log("new counter ->" + counter);
    this.setState({ data });
    this.setModalVisible();
  }

  toggleCancel() {
    console.log("hwy");
    var counter = 0;
    if (counter === 0) {
      this.setState({
        disable: !this.state.disable,
      });
    }
    counter++;
  }

  setModalVisible(id) {
    console.log("modal c");
    console.log(id);
    this.setState({
      isModalVisible: !this.state.isModalVisible,
    });
  }

  disableButt() {
    console.log("disabling bott");
    this.setState({
      disableButt: !this.state.disableButt,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formContent}>
          <View style={styles.inputContainer}>
            <Image
              style={[styles.icon, styles.inputIcon]}
              source={{
                uri: "https://png.icons8.com/search/androidL/100/000000",
              }}
            />
            <TextInput
              style={styles.inputs}
              ref={"txtSearch"}
              placeholder="Search"
              underlineColorAndroid="transparent"
              onChangeText={(name_address) => this.setState({ name_address })}
            />
          </View>
        </View>

        <FlatList
          style={styles.notificationList}
          data={this.state.data}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={({ item }) => {
            return (
              <View style={[styles.card, { borderColor: item.color }]}>
                <View style={styles.cardContent}>
                  <Image
                    style={[styles.image, styles.imageContent]}
                    source={{ uri: item.icon }}
                  />
                  <Text style={styles.name}>{item.name}</Text>
                  <TouchableOpacity
                    activeOpacity={this.state.disableButt ? 1 : 0}
                    onPress={() => {
                      this.disableButt(); // NOT WORKING
                      this.toggleCancel();
                    }}
                  >
                    <Icon
                      name="check"
                      size={30}
                      color={"green"}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      this.setModalVisible(item.id);
                    }}
                  >
                    <Icon
                      name="close"
                      color={"red"}
                      size={30}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.cardContent}>
                  <View
                    style={{
                      flexDirection: "row",
                      width: "100%",
                      padding: 20,
                      justifyContent: "left",
                    }}
                  >
                    <View
                      style={{
                        maxWidth: "220px",
                      }}
                    >
                      <View>
                        <Text style={styles.atributes}>Favourite Genres: </Text>
                        <Text style={styles.atributes2}>{item.genres}</Text>
                      </View>
                      <View>
                        <Text style={styles.atributes}>Favourite Artist: </Text>
                        <Text style={styles.atributes2}>{item.artists}</Text>
                      </View>
                      <View>
                        <Text style={styles.atributes}>Favourite Song: </Text>
                        <Text style={styles.atributes2}>{item.song}</Text>
                      </View>
                      <View>
                        <Text style={styles.atributes}>Favourite Album: </Text>
                        <Text style={styles.atributes2}>{item.album}</Text>
                      </View>
                      <View>
                        {this.state.disable ? (
                          <View>
                            <Text style={styles.atributes}>Socials </Text>
                            <Text style={styles.atributes2}>
                              <TouchableOpacity>
                                <Icon
                                  name="instagram"
                                  size={30}
                                  style={styles.icon}
                                />
                              </TouchableOpacity>
                              <TouchableOpacity>
                                <Icon
                                  name="facebook"
                                  size={30}
                                  style={styles.icon}
                                />
                              </TouchableOpacity>
                              <TouchableOpacity>
                                <Icon
                                  name="whatsapp"
                                  size={30}
                                  style={styles.icon}
                                />
                              </TouchableOpacity>
                            </Text>
                          </View>
                        ) : (
                          <View></View>
                        )}
                      </View>
                    </View>
                  </View>
                </View>

                <Modal
                  isVisible={this.state.isModalVisible}
                  style={styles.modal}
                  backdropOpacity={0.25}
                >
                  <View>
                    <Text style={styles.nameModal}>
                      Are you sure you want to delete?
                    </Text>
                    <View style={styles.separator}>
                      <TouchableOpacity
                        onPress={() => this.setModalVisible(item.id)}
                        style={styles.buttons}
                      >
                        <Text style={styles.buttonText}>CANCEL</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => this.removeTodo(counter)}
                        style={styles.buttons}
                      >
                        <Text style={styles.buttonText}>DELETE</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
                {/* FIX QUANDO ACABAM OS CARDS */}
                {global.counter === 656 ? (
                  <View></View>
                ) : global.counter === 4 ? (
                  <View></View>
                ) : null}
              </View>
            );
          }}
        />
        <ButtonBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
  },
  formContent: {
    flexDirection: "row",
    marginTop: 30,
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    margin: 10,
  },
  separator: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  modal: {
    flex: 1,
    marginVertical: "85%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 4,
  },
  icon: {
    marginHorizontal: 10,
    marginTop: 0,
    marginLeft: 10,
  },
  iconBtnSearch: {
    alignSelf: "center",
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  inputIcon: {
    marginLeft: 15,
    justifyContent: "center",
  },
  notificationList: {
    marginTop: 20,
    padding: 10,
  },
  card: {
    minheight: "400px",
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 5,
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
    borderTopWidth: 40,
    marginBottom: 20,
    justifyContent: "bottom",
  },
  cardContent: {
    flexDirection: "row",
    marginLeft: 10,
  },
  imageContent: {
    marginTop: -40,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    alignSelf: "center",
    textAlign: "center",
    paddingRight: 15,
  },
  nameModal: {
    fontSize: 20,
    marginLeft: 10,
    alignSelf: "center",
    textAlign: "center",
    paddingRight: 15,
    color: "red",
  },
  btnColor: {
    padding: 10,
    borderRadius: 40,
    marginHorizontal: 3,
    backgroundColor: "#eee",
    marginTop: 5,
  },
  socials: {
    height: 40,
    width: 40,
  },
  atributes: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 10,
    //alignSelf: "center",
    padding: 10,
  },
  atributes2: {
    fontSize: 20,

    marginLeft: 25,
    //alignSelf: "center",
    padding: 10,
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30,
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
    backgroundColor: "gray",
  },
  buttonText: {
    fontSize: 18,
    justifyContent: "center", //Centered horizontally
    textAlign: "center", //Centered vertically
    marginVertical: "15%",
  },
  closeButt: {
    justifyContent: "center",
    alignItems: "center",
    width: 30 + 3,
    height: 30 + 3,
    borderWidth: 3,
    borderRadius: 30 / 2,
    backgroundColor: "white",
    position: "absolute",
    right: 5,
    top: 5,
  },
});
