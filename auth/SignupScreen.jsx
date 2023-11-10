import React, { useState } from "react";
import {
  Alert,
  Button,
  View,
  useColorScheme,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from 'react-redux';
import { Colors } from "react-native/Libraries/NewAppScreen";
import { signup } from '../actions/authActions'; // Make sure to create this action

const SignupScreen = ({navigation}) => {
    const width = Dimensions.get("window").width;
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isDarkMode = useColorScheme() === "dark";
  const setBackgroundColor = isDarkMode ? Colors.darker : Colors.lighter;
  const color = isDarkMode ? Colors.white : Colors.black;

  const handleSignup = () => {
    dispatch(signup(email, password, navigation)); // Dispatch the signup action
  };

  return (
    <SafeAreaView  style={[styles.container, { backgroundColor: setBackgroundColor }]}>
              <View style={[styles.imagesection, { alignItems: "center" }]}>
        <Image
          style={[
            styles.image,
            {
              width: width - 70,
              // top:85,
              position: "absolute",
            },
          ]}
          source={require("../assets/fastamoning.png")}
        />
      </View>
      <View style={{ alignItems: "center",  }}>
        <View>
        <Text
            style={{
              color: "#7b47cc",
              textAlign: "center",
              fontSize: 40,
              fontWeight: "bold",
            }}
          >
            SIgn Up
          </Text>
      <TextInput
        placeholder="Username"
        value={username}
        style={[styles.input, { width: width - 90, borderRadius: 10 }]}
        placeholderTextColor={color}
        color={color}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Email"
        value={email}
        style={[styles.input, { width: width - 90, borderRadius: 10 }]}
        placeholderTextColor={color}
        color={color}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        value={password}
        style={[styles.input, { width: width - 90, borderRadius: 10 }]}
        placeholderTextColor={color}
        color={color}
        onChangeText={setPassword}
        secureTextEntry
      />
        </View>
        <View style={{ width: width - 180, paddingTop: 10, marginTop: 10, }}>

      <Button title="Sign Up" onPress={handleSignup} color={'#daa520'} style={{ borderRadius: 20 }}  />
        </View>
        <TouchableOpacity onPress={()=> navigation.navigate('Login')} style={{ width: width - 180, paddingTop: 10, marginTop: 10, }}>

<Text style={{ borderRadius: 20, marginTop: 40, textAlign: 'center', color: color }}> Click Here To Login!</Text>
</TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#383838",
      alignItems: "center",
      justifyContent: "center",
    },
    button: {
      backgroundColor: "goldenrod",
      padding: 14,
      margin: 8,
    },
    imagesection: {
      width: 400,
      height: 100,
      padding: 15,
      margin: 15,
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      borderColor: "#daa520",
      padding: 10,
    },
    image: {
      resizeMode: "contain",
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
export default SignupScreen;
