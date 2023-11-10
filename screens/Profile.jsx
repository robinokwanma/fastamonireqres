import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, TextInput, Dimensions, useColorScheme, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserDetails } from '../actions/userActions';
import { logout } from '../actions/authActions';
import { Colors } from "react-native/Libraries/NewAppScreen";

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const width = Dimensions.get("window").width;
  const userDetails = useSelector(state => state.user.userDetails);
  const isDarkMode = useColorScheme() === "dark";
  const setBackgroundColor = isDarkMode ? Colors.darker : Colors.lighter;
  const color = isDarkMode ? Colors.white : Colors.black;

  // Use state hooks for first name, last name, and email
  const [firstName, setFirstName] = useState(userDetails.first_name);
  const [lastName, setLastName] = useState(userDetails.last_name);
  const [email, setEmail] = useState(userDetails.email);

  useEffect(() => {
    // Update local state if user details in Redux store update
    setFirstName(userDetails.first_name);
    setLastName(userDetails.last_name);
    setEmail(userDetails.email);
  }, [userDetails]);

  const handleLogout = () => {
    dispatch(logout(navigation)); 
  };

  const handleSubmit = () => {
    // Dispatch action to update user details
    const updatedDetails = { first_name: firstName, last_name: lastName, email }; // Adjust the fields as needed
    dispatch(updateUserDetails(updatedDetails));
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
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

  return (
    <View style={[styles.container, { backgroundColor: setBackgroundColor }]}>
<Text
            style={{
              color: "#7b47cc",
              textAlign: "center",
              fontSize: 40,
              fontWeight: "bold",
            }}
          >
            Edit Profile
          </Text>
      <TextInput
        value={firstName}
        onChangeText={setFirstName}
        placeholder="First Name"
        placeholderTextColor={color}
        color={color}
        style={[styles.input, { width: width - 90, borderRadius: 10 }]}
      />
      <TextInput
        value={lastName}
        onChangeText={setLastName}
        placeholder="Last Name"
        placeholderTextColor={color}
        color={color}
        style={[styles.input, { width: width - 90, borderRadius: 10 }]}
      />
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        placeholderTextColor={color}
        color={color}
        style={[styles.input, { width: width - 90, borderRadius: 10 }]}
      />
      <Button title="Save Changes" onPress={handleSubmit} color={'#daa520'} />
      <Button title="Logout" onPress={handleLogout} color={'red'} />
    </View>
  );
};


export default Profile;
