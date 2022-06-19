import React, { Component } from "react";
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
import { ButtonBar } from "../components/ButtonBar"

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
        },
        {
          id: 2,
          color: "#87CEEB",
          icon: "https://www.latin-wife.com/images/colombian-woman-young.jpg",
          name: "Manuela Alvaréz",
        },

        {
          id: 3,
          color: "#4682B4",
          icon: "https://i.imgur.com/ybq7Q2d.jpg",
          name: "Daniela Ruah",
        },
        {
          id: 4,
          color: "#green",
          icon: "https://i.imgur.com/49fzqXr.jpg",
          name: "Cristiano Ronaldo",
        },
      ],
    };
  }

  cardClickEventListener = (item) => {
    Alert.alert(item.name);
  };

  tagClickEventListener = (tagName) => {
    Alert.alert(tagName);
  };

  renderTags = (item) => {
    return item.tags.map((tag, key) => {
      return (
        <TouchableOpacity
          key={key}
          style={styles.btnColor}
          onPress={() => {
            this.tagClickEventListener(tag);
          }}
        >
          <Text>{tag}</Text>
        </TouchableOpacity>
      );
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.notificationList}
          data={this.state.data}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={({ item }) => {
            return (
              <View
                style={[styles.card, { borderColor: item.color }]}
                onPress={() => {
                  this.cardClickEventListener(item);
                }}
              >
                <View style={styles.cardContent}>
                  <Image
                    style={[styles.image, styles.imageContent]}
                    source={{ uri: item.icon }}
                  />
                  <Text style={styles.name}>{item.name}</Text>
                </View>
                <View style={styles.cardContent}>
                  <View
                    style={{
                      flexDirection: "row",
                      width: "100%",
                      padding: 20,
                    }}
                  >
                    <TouchableOpacity>
                      <Icon name="instagram" size={30} style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Icon name="facebook" size={30} style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Icon name="whatsapp" size={30} style={styles.icon} />
                    </TouchableOpacity>
                  </View>
                </View>
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
  icon: {
    marginHorizontal: 10,
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
    height: null,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 5,
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
    borderTopWidth: 40,
    marginBottom: 20,
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
});
