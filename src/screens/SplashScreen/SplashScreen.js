import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { Animated, Image, ImageBackground, StatusBar, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme, Text } from 'react-native-paper';
import { version } from '../../../package.json';
import { useDispatch } from 'react-redux';
import { handleCurrentLoaginUser } from '../../redux/reducers/user/userReducer';

const SplashScreen = ({ navigation }) => {
  const isAppFirstLaunched = useRef(true);
  const userRole = useRef(null);
  const dispatch = useDispatch()
 

  useEffect(() => {
    const firstLaunch = async () => {
      const appData = await AsyncStorage.getItem('isAppFirstLaunched1');
      if (appData) {
        isAppFirstLaunched.current = false;
      } else {
        isAppFirstLaunched.current = true;
        await AsyncStorage.setItem('isAppFirstLaunched1', '1');
      }
    };
    firstLaunch();
  }, []);

  useEffect(() => {
    const userRoleHandler = async () => {
      const role = await AsyncStorage.getItem('role');
      userRole.current = role;
    };
    userRoleHandler();
  }, []);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
        let screenTo = "Onboarding";

        if (!isAppFirstLaunched.current) {
          screenTo = { name: "Onboarding" };
        } else if (!isLoggedIn) {
          screenTo = { name: "WelcomeScreen" };
        }
        //  else if (isLoggedIn && userRole.current === "freeflexer") {
        //   screenTo = { name: "Main", params: { screen: "FreeflexerStack", params: { screen: "FreeflexerHomeScreen" } } };
        // }

        navigation.replace(screenTo.name, screenTo.params);
      } catch (err) {
        console.log(err);
      }
    };

    setTimeout(() => {
      checkLoginStatus();
    }, 2000);
  
  }, []);

  useLayoutEffect(() => {
    const getUserInfo = async () => {
      const email = await AsyncStorage.getItem('email');
      const token = await AsyncStorage.getItem('token');
      const userId = await AsyncStorage.getItem('userId');
      const role = await AsyncStorage.getItem('role');
      dispatch(handleCurrentLoaginUser({ email: email, token: token, id: userId, role: role }))
    }
    getUserInfo()
  })
  const theme = useTheme();

  const rotateValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const rotateAnimation = () => {
      rotateValue.setValue(0);
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 2000, // Adjust duration for speed
        useNativeDriver: true,
      }).start(() => rotateAnimation());
    };

    rotateAnimation();
  }, [rotateValue]);

  const rotateInterpolate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <ImageBackground
      source={require("../../assets/bakgrund.png")}
      style={{
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <StatusBar translucent backgroundColor="transparent" />

      <View
        style={{
          flex: 1,
          // backgroundColor: 'rgba(0, 0, 0, 0.5)',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 18, color: '#fff', fontFamily: 'AnekBangla-Regular', letterSpacing:2 }}>
          WELCOME TO
        </Text>
        <Text style={{ fontSize: 30, color: '#fff', fontFamily: 'Modak' }}>
          PREFORMLY
        </Text>
        <Animated.Image
          source={require("../../assets/loader.png")}
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            marginTop: 66,
            transform: [{ rotate: rotateInterpolate }],
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default SplashScreen;
