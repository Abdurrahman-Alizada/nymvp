import React, { useEffect, useRef, useState } from 'react';
import { View, Alert, PermissionsAndroid, Platform } from 'react-native';
import CustomNavigationBar from '../../components/Appbars/JobsDetailsAppbar';
import { Text, useTheme, Checkbox, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useGenerateSdkTokenMutation } from '../../redux/reducers/user/userThunk';
import { useSelector } from 'react-redux';

export default function FreeflexerTermsAndCondition() {
  const theme = useTheme();
  const [checked, setChecked] = useState(false);
  const navigation = useNavigation();
  const initialized = useRef(false);
  const currentLoginUser = useSelector(state => state.user.currentLoginUser);
  const [generateSdkToken, { isLoading }] = useGenerateSdkTokenMutation();

  useEffect(() => {
    if (Platform.OS === 'android') {
      requestCameraPermission();
    }
  }, []);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Camera Permission",
          message: "App needs camera permission to verify your identity",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert("Camera Permission Denied", "Camera permission is required to proceed with the verification.");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const generateSdkTokenHandler = () => {
    console.log("generateSdkTokenHandler call");
  };

  return (
    <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
      <CustomNavigationBar />
      <View style={{ padding: 20 }}>
        <Text style={{ fontWeight: 'bold', marginTop: 15, fontSize: 22 }}>Welcome!</Text>
        <Text style={{
          marginTop: 20,
          fontSize: 15,
          textAlign: 'justify',
          letterSpacing: 0.5,
          lineHeight: 19
        }}>
          Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </Text>
      </View>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.lightgrey,
        padding: 10,
        marginTop: 110,
        width: '100%'
      }}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => setChecked(!checked)}
          color={theme.colors.primary}
        />
        {/* <CheckBox
          center
          containerStyle={{ backgroundColor: theme.colors.lightgrey }}
          onPress={() => setChecked(!checked)}
          checked={checked ? true : false}
        /> */}
        <View style={{ flex: 1 }}>
          <Text style={{
            color: '#696969',
            fontSize: 15,
            marginLeft: 8
          }}>
            I will take these responsibilities and would
          </Text>
          <Text style={{
            color: '#696969',
            fontSize: 15,
            marginLeft: 8
          }}>
            like to become a FreeFlexer
          </Text>
        </View>
      </View>
      <View style={{ alignItems: 'center', marginTop: 35, width: '100%' }}>
        <Button
          mode="contained"
          onPress={generateSdkTokenHandler}
          style={{
            width: '90%',
            borderRadius: 6,
            backgroundColor: theme.colors.primary,
            opacity: checked ? 1 : 0.5
          }}
          contentStyle={{ height: 48 }}
          labelStyle={{ color: 'white', fontSize: 16 }}
          disabled={!checked}
        >
          Let's do this!
        </Button>
        <Button
          mode="text"
          onPress={() => { }}
          labelStyle={{ color: theme.colors.blue, fontSize: 16 }}
          style={{ marginTop: 10 }}
          // disabled={!checked}
        >
          I have some questions
        </Button>
      </View>
    </View>
  );
}
