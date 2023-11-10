import { View, Button, StyleSheet, TextInput,   Dimensions,   useColorScheme, Text} from 'react-native';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserDetails } from '../actions/userActions';
import { Colors } from "react-native/Libraries/NewAppScreen";

const DashboardNavigator = () => {
  const dispatch = useDispatch();
  const { userDetails } = useSelector(state => state.user);
  const { userId } = useSelector(state => state.auth);
  const isDarkMode = useColorScheme() === "dark";
  const setBackgroundColor = isDarkMode ? Colors.darker : Colors.lighter;
  const color = isDarkMode ? Colors.white : Colors.black;
  const width = Dimensions.get("window").width;
console.log(userDetails)
  useEffect(() => {
    if (userId) {
      dispatch(fetchUserDetails(userId));
    }
  }, [userId, dispatch]);

  useEffect(() => {
    console.log('User ID before dispatch:', userId);
    if (userId) {
      dispatch(fetchUserDetails(userId));
    }
  }, [userId, dispatch]);
  
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
    <View  style={styles.container}>
     <Text style={{ fontSize: 40, borderRadius: 20, marginTop: 40, textAlign: 'center', color: color}}>
  Hello
</Text>
     <Text style={{ fontSize: 40, borderRadius: 20, marginTop: 40, textAlign: 'center', color: color}}>
  {
    userDetails
      ? `${userDetails.first_name || ''} ${userDetails.last_name || ''}`.trim()
      : 'Loading...'
  }
</Text>
    </View>
  );
};



export default DashboardNavigator;
