import React from "react";
import { ButtonBar } from "../components/ButtonBar";
import { MusicHeader } from "../components/MusicHeader";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Animated,
  Button,
  TouchableOpacity,
} from "react-native";
import TinderCard from "react-tinder-card";
import styled from "styled-components/native";
import { useState, useMemo, Alert } from "react";
import logoLogin from "../images/logoLogin.jpg";
import Icon from "react-native-vector-icons/FontAwesome";

const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 100px;
`;

const Header = styled.Text`
  color: #000;
  font-size: 30px;
  margin-bottom: 30px;
`;

const CardContainer = styled.View`
  width: 90%;
  max-width: 260px;
  height: 300px;
`;

const Card = styled.View`
  position: absolute;
  background-color: #fff;
  width: 100%;
  max-width: 260px;
  height: 400px;
  shadow-color: black;
  shadow-opacity: 0.2;
  shadow-radius: 20px;
  border-radius: 20px;
  resize-mode: cover;
`;

const CardImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 20px;
`;

const CardInfo = styled.Text`
  position: absolute;
  bottom: 0;
  color: #fff;
  font-weight: bold;
  font-size: 18;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  flexdirection: column;
  height: 140px;
`;

const InfoText = styled.Text`
  height: 28px;
  justify-content: center;
  display: flex;
  z-index: -100;
`;

const db = [
  {
    name: "Richard Hendricks",
    estilo: "Pop",
    favArtist: "Dua Lipa",
    favConcert: "NOS Primavera Sound",
    img: "https://img3.stockfresh.com/files/s/stockyimages/m/23/1908011_stock-photo-trendy-muscular-guy-posing-in-style.jpg",
  },
  {
    name: "Carlota Rodrigues",
    estilo: "Rock",
    favArtist: "Ghost",
    favConcert: "EDP Cooljazz",
    img: "https://content.presspage.com/uploads/1369/nehacrop2.jpg?10000",
  },
  {
    name: "Carlos Silva",
    estilo: "Jazz",
    favArtist: "Lionel Richie",
    favConcert: "RFM Somnii",
    img: "https://st.depositphotos.com/1144472/2003/i/950/depositphotos_20030237-stock-photo-cheerful-young-man-over-white.jpg",
  },
  {
    name: "Miguel Araújo",
    estilo: "Classical",
    favArtist: "Mozart",
    favConcert: "NOS Alive",
    img: "https://img3.stockfresh.com/files/n/nyul/m/72/623484_stock-photo-smiling-old-man-having-coffee.jpg",
  },
  {
    name: "Joaquim Oliveira",
    estilo: "Rap",
    favArtist: "Eminem",
    favConcert: "MEO Sudoeste",
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];
const alreadyRemoved = [];
let charactersState = db; // This fixes issues with updating characters state forcing it to use the current state and not the state that was active when the card was created.

const HomeScreen = () => {
  const [characters, setCharacters] = useState(db);
  const [lastDirection, setLastDirection] = useState();

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete + " to the " + direction);

    setLastDirection(direction);
    alreadyRemoved.push(nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
    charactersState = charactersState.filter(
      (character) => character.name !== name
    );
    setCharacters(charactersState);
  };

  const callit = () => {
    console.log("hey");
  };

  const swipe = (dir) => {
    const cardsLeft = characters.filter(
      (person) => !alreadyRemoved.includes(person.name)
    );
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name; // Find the card object to be removed
      const index = db.map((person) => person.name).indexOf(toBeRemoved); // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved); // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir); // Swipe the card!
    }
    // CHAMAR UMA MODAL PARA DIZER WHERRE DID YOU SWIPE TO
  };
  return (
    <View>
      <View style={styles.header}>
        <View style={{ justifyContent: "center" }}>
          <Image source={logoLogin} style={styles.img} />
        </View>
      </View>

      <Container>
        <CardContainer>
          {characters.map((character, index) => (
            <TinderCard
              ref={childRefs[index]}
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name)}
              onCardLeftScreen={() => [outOfFrame(character.name)]}
            >
              <Card >
                <CardImage source={character.img}>
                  <CardInfo style ={styles.cardinf}>
                    <Text style={styles.text1}>
                      {character.name}
                      {"\n"}
                      {"\n"}
                      {"\n"}
                      {"\n"}
                      {"\n"}
                      {"\n"}
                      {"\n"}
                      
                   
                      
                    </Text>
                    <Text style={styles.text3}>
                      
                      {"Favourite Style"}
                      {"\n"}
                      
                    </Text>
                    <Text style={styles.text2}>
                      
                      {character.estilo}
                      {"\n"}
                      
                    </Text>
                    <Text style={styles.text3}>
                      
                      
                      {"Favourite Artist"}
                      {"\n"}
                      
                    </Text>
                    <Text style={styles.text2}>
                      
                      {character.favArtist}
                      {"\n"}
                      
                    </Text>
                    <Text style={styles.text3}>
                      
                      
                      {"Favourite Concert"}
                      {"\n"}
                      
                    </Text>
                    <Text style={styles.text2}>
                      
                      {character.favConcert}
                      
                    </Text>
                  </CardInfo>
                </CardImage>
              </Card>
            </TinderCard>
          ))}
        </CardContainer>
        <View style={styles.separator}>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => swipe("left")}
          >
            <Text style={styles.buttonText}>Swipe Left!</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttons}
            onPress={() => swipe("right")}
          >
            <Text style={styles.buttonText}>Swipe Right!</Text>
          </TouchableOpacity>
        </View>

        {lastDirection ? (
          <InfoText style={styles.info} key={lastDirection}>
            You swiped {lastDirection}!
          </InfoText>
        ) : (
          <InfoText style={styles.infoT}>
            Swipe left to pass or right to request to match!
          </InfoText>
        )}
      </Container>

      {/* 
      <View
        style={{
          height: "100px",
          width: "100%",
          backgroundColor: "green",
          flex: 1,
          alignItems: "flex-end",
        }}
      >
        <TouchableOpacity onPress={callit()}>
          <Icon name="question" size={50} />
        </TouchableOpacity>
      </View> */}

      <ButtonBar />
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  header: {
    justifyContent: "center",
    padding: "10px",
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
  },
  card: {
    marginTop: "20px",
    justifyContent: "center",
    textAlign: "center",
  },
  buttonSpotify: {
    flex: 1,
    height: 60,
    borderRadius: 15,
    backgroundColor: "transparent",
    justifyContent: "center",
    textAlign: "center",
    marginRight: 40,
    marginTop: 25,
  },
  info: {
    paddingHorizontal: 10,
    fontSize: 23,
    justifyContent: "center",
  },

  infoT: {
    paddingHorizontal: 10,
    fontSize: 25,
    justifyContent: "center",
    textAlign: "center",
  },
  separator: {
    marginTop: "120px",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 50,
  },
  buttons: {
    height: 60,
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
    padding: 15,
    color: "white", 
  },
  infoUser: {
    position: "absolute",
    bottom: 0,
    margin: "10px",
    color: "#fff",
    background: "green",
    fontSize: "bold",
  },
  text1: {
    fontSize : 22,
    paddingTop: "0px",
   
  },
  text2: {
    fontSize : 16,
    padding: "30px",

  },
  text3: {
    fontSize : 18,
    textweight: "bold",
    padding: "30px",
    color: "white",
    
    paddingLeft: "10"
  },
  cardinf: {
    color: "#00FF00",
    textAlign: "center",
    width: "100%",
    height: "100%",
    paddingTop: "20px",
    opacity : 0.9,
  }
});

export default HomeScreen;
