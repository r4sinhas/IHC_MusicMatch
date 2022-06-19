import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity } from "react-native";

const image = {
  uri: "https://i.pinimg.com/736x/12/d7/fd/12d7fd04b90c096a2dff2f2c50b1f175.jpg",
};

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground resizeMode="cover" style={{ flex: 1 }} source={image}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 48,
            color: "green",
            textAlign: "center",
            marginTop: "130px",
          }}
        >
          Music Match
        </Text>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            textAlign: "center",
            marginTop: "480px",
            padding: 12,
            borderRadius: 30,
            backgroundColor: "green",
            marginHorizontal: "25%", // 25 each side means center
          }}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={{ fontWeight: "bold", fontSize: 24, color: "white" }}>
            Log In
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            justifyContent: "center",
            textAlign: "center",
            marginTop: "20px",
            padding: 12,
            borderRadius: 30,
            backgroundColor: "white",
            marginHorizontal: "25%", // 25 each side means center
          }}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={{ fontWeight: "bold", fontSize: 24, color: "green" }}>
            Register
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 300,
    borderRadius: 30,
    backgroundColor: "transparent",
  },
  loginButton: {
    backgroundColor: "#00b5ec",

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
  loginText: {
    color: "white",
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});

export default LoginScreen;
