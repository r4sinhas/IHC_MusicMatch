import React, { Component } from "react";

import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Alert,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default class list extends Component {
  constructor(props) {
    super(props);

    (this.array = [
      {
        id: 0,
        title: "My Chemical Romance",
      },
      {
        id: 1,
        title: "Nirvana",
      },
      {
        id: 2,
        title: "Radiohead",
      },
    ]),
      (this.state = {
        arrayHolder: [],

        textInput_Holder: "",
      });
  }

  componentDidMount() {
    this.setState({ arrayHolder: [...this.array] });
  }

  removeTodo(item) {
    console.log(item.id);
    const array = this.state.array.filter((i) => i.id !== item.id);
  }

  joinData = () => {
    this.array.push({ title: this.state.textInput_Holder });

    this.setState({ arrayHolder: [...this.array] });
  };

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
  };

  GetItem(item) {
    Alert.alert(item);
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <TextInput
          placeholder="add Band.."
          onChangeText={(data) => this.setState({ textInput_Holder: data })}
          style={styles.textInputStyle}
          underlineColorAndroid="transparent"
        />

        <TouchableOpacity
          onPress={this.joinData}
          activeOpacity={0.7}
          style={styles.button}
        >
          <Text style={styles.buttonText}> Add bands to Favourite bands </Text>
        </TouchableOpacity>

        <FlatList
          data={this.state.arrayHolder}
          width="100%"
          extraData={this.state.arrayHolder}
          keyExtractor={(index) => index.toString()}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={({ item }) => (
            <View>
              <Text
                style={styles.item}
                onPress={this.GetItem.bind(this, item.title)}
              >
                {" "}
                {item.title}{" "}
                <TouchableOpacity
                  style={{ right: 0 }}
                  onPress={() => this.removeTodo(item)}
                >
                  <FontAwesomeIcon
                    icon={faTrash}
                    size={20}
                    style={{ color: "black" }}
                  />
                </TouchableOpacity>
              </Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    margin: 2,
  },

  item: {
    padding: 20,
    fontSize: 18,
    height: 44,
  },

  textInputStyle: {
    textAlign: "center",
    height: 40,
    width: "70%",
    borderWidth: 1,
    borderColor: "#4CAF50",
    borderRadius: 7,
    marginTop: 12,
  },

  button: {
    width: "90%",
    height: 40,
    padding: 10,
    backgroundColor: "#4CAF50",
    borderRadius: 8,
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});
