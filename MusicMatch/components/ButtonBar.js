import React from "react";
import { SafeAreaView, TouchableOpacity } from "react-native-web";
import { useNavigation } from "@react-navigation/core";
import { View, Text, Image, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

export const ButtonBar = () => {
  const navigation = useNavigation();
  const route = useRoute();
  //console.log(route.name);

  return (
    <SafeAreaView
      style={{
        padding: "10px",
        position: "fixed",
        width: "100%",
        bottom: "0",
        left: "0",
        backgroundColor: "white",
        height: "fixed",
      }}
    >
      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
            }}
            style={[
              styles.img,
              {
                backgroundColor: route.name == "Profile" ? "#74B72E" : "white",
                opacity: 0.9,
              },
            ]}
          />
        </TouchableOpacity>

        {/* 2nd icon */}

        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image
            source={{
              uri: "https://cdn0.iconfinder.com/data/icons/uiux-001-line/32/UI_UX_UIUX_Home-512.png",
            }}
            style={[
              styles.img,
              {
                backgroundColor: route.name == "Home" ? "#74B72E" : "white",
                opacity: 0.9,
              },
            ]}
          />
        </TouchableOpacity>
        {/* 3rd icon */}

        <TouchableOpacity onPress={() => navigation.navigate("Matches")}>
          <Image
            source={{
              uri: "https://cdn.iconscout.com/icon/premium/png-256-thumb/social-community-1413541-1197410.png",
            }}
            style={[
              styles.img,
              {
                backgroundColor: route.name == "Matches" ? "#74B72E" : "white",
                opacity: 0.9,
              },
            ]}
          />
        </TouchableOpacity>
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
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  card: {
    marginTop: "20px",
    justifyContent: "center",
    textAlign: "center",
  },
});
