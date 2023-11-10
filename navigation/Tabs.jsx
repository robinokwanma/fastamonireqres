import React from "react";
import { useSelector } from 'react-redux';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import DashboardNavigator from "./DashboardNavigator";
import Profile from "../screens/Profile";
import LoginScreen from "../auth/LoginScreen";
import SignupScreen from "../auth/SignupScreen";
import { Colors } from "react-native/Libraries/NewAppScreen";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    useColorScheme,
  } from "react-native";

  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

const Tabs = ({navigation}) => {
    // const isAuthenticated = useSelector(state => !!state.auth.user);
        // set themes
        const isDarkMode = useColorScheme() === "dark";
        const backgroundColor = isDarkMode ? Colors.darker : Colors.lighter;

        // if (!isAuthenticated) {
        //     // User is not authenticated, navigate to the LoginScreen
        //     return (
        //       <Stack.Navigator screenOptions={{ headerShown: false }}>
        //         <Stack.Screen name="Login" component={LoginScreen} />
        //         <Stack.Screen name="Register" component={SignupScreen} />
        //       </Stack.Navigator>
        //     );
        //   }
        
  return (
    <Tab.Navigator
    screenOptions={() => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          flex: 1.1 / 10,
          justifyContent: "center",
          alignItems: "center",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: backgroundColor,
          borderRadius: 0,
          borderTopRightRadius: 0,
          borderTopLeftRadius: 0,
          ...styles.Shadow,
        },
      })}>
        <Stack.Group>
        <Stack.Screen
          name="Dashboard"
          component={DashboardNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/dashboard.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#7b47cc" : "#748c94",
                  }}
                />
                <Text
                  style={{
                    color: focused ? "#7b47cc" : "#748c94",
                    fontSize: 12,
                  }}
                >
                  Home
                </Text>
              </View>
            ),
            headerStyle: {
              backgroundColor: "#7b47cc",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontSize: 24,
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/user.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: focused ? "#7b47cc" : "#748c94",
                  }}
                />
                <Text
                  style={{
                    color: focused ? "#7b47cc" : "#748c94",
                    fontSize: 12,
                  }}
                >
                  Profile
                </Text>
              </View>
            ),
            headerStyle: {
              backgroundColor: "#7b47cc",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontSize: 24,
              fontWeight: "bold",
            },
          }}
        />
        </Stack.Group>
    </Tab.Navigator>
  )
}


const styles = StyleSheet.create({
    Shadow: {
      shadowColor: "#7F5Df0",
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5,
    },
  });
  
export default Tabs