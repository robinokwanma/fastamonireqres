import React, { useState, useEffect } from 'react';
import SplashScreen from './launchers/SplashScreen';
import {name as appName} from './app.json';
import {AppRegistry} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/Tabs";
import { Provider } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import store from './store/configureStore'
import AuthStack from './navigation/AuthStack';

export default function App() {
  const [isAppOpening, setIsAppOpening] = useState(true);
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    // Check the AsyncStorage for a user token on app start
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem('userToken');
        setUserToken(userToken); // Set the token state
      } catch (e) {
        // Restoring token failed
      }
      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      setUserToken(userToken);
      setIsAppOpening(true);
    };

    bootstrapAsync();
  }, []);

  //show splash screen only when app loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAppOpening(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
<Provider store={store}>

        <NavigationContainer>
        {isAppOpening ? (
        <SplashScreen />
      ) :userToken ? (
          <Tabs />
        ) : (
          <AuthStack />
        )}
    </NavigationContainer>
</Provider>

  );
}
AppRegistry.registerComponent(appName, () => App);