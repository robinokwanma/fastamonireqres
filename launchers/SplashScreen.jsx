import React from "react";
import { Text, View, Image, Dimensions } from "react-native";
import { StyleSheet } from "react-native";

export default SplashScreen = () => {
  const width = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <View style={[styles.imagesection, { alignItems: "center" }]}>
        <Image
          style={[styles.image, { width: width - 70 }]}
          source={require("../assets/fastamoning.png")}
        />
      </View>
      <View style={{ width: width - 30 }}>
        <Text style={styles.textHeadine}>Take Home Test </Text>
        <Text style={styles.text}>
        My Name is Felix Okwanma and I build Things!!!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#383838",
      alignItems: "center",
      justifyContent: "center",
  
    },

    imagesection: {
      width: 400,
      height: 100,
      padding: 15,
      margin: 15,
    },
    image: {
      resizeMode: "cover",
      width: "100%",
      height: "100%",
    },
    textHeadine: {
      color: "#fff",
      fontSize: 28,
      fontWeight: "700",
      textAlign: "center",
    },
    text: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "600",
      textAlign: "center",
      marginTop: 60,
      lineHeight: 30,
    },
  });
  
  