import React from "react";
import { SafeAreaView, TouchableOpacity } from "react-native-web";
import { View, Image, StyleSheet, Button } from "react-native";
import logoLogin from "../images/logoLogin.jpg";
import Icon from "react-native-vector-icons/FontAwesome";

export const MusicHeader = () => {
  return (
    <SafeAreaView
      style={{
        padding: "10px",
        width: "100%",
        backgroundColor: "white",
      }}
    >
      {/* header */}

      <View style={styles.header}>
        <Image source={logoLogin} style={styles.img} />
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <View>
            <TouchableOpacity
              style={styles.buttonSpotify}
              onPress={console.log("clicked")}
            >
              <Icon name="question" size={50} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  header: {
    flexDirection: "row",
  },
  card: {
    marginTop: "20px",
    justifyContent: "center",
    textAlign: "center",
  },
  buttonSpotify: {
    height: 60,
    borderRadius: 15,
    backgroundColor: "transparent",
    justifyContent: "center",
    textAlign: "center",
  },
});
