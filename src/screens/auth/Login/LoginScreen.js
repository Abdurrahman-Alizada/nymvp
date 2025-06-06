import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  TextInput,
  Text,
  Button,
  Dialog,
  Avatar,
  Paragraph,
  Banner,
  Portal,
  useTheme,
} from 'react-native-paper';
import { useLoginUserMutation } from '../../../redux/reducers/user/userThunk';
import { handleCurrentLoaginUser, handleRole } from '../../../redux/reducers/user/userReducer';
import AuthAppbar from '../../../components/Appbars/AuthAbbar';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GradientButton from '../../../components/GradientButton';
import SocialLogin from './SocialLogin';
import ScreenGradientBackground from '../../../components/ScreenGradientBackground';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Type your valid email address')
    .required('*required')
    .label('Email'),
  password: Yup.string()
    .min(6, ({ min }) => `Password must be at least ${min} characters`)
    .required('*required')
    .label('Password'),
});

const LoginScreen = ({ navigation }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Something went wrong');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const passwordResetSuccessflly = useSelector(
    state => state?.user?.passwordResetSuccessflly,
  );

  const [loginUser, { isLoading, isError, error }] = useLoginUserMutation();

  const submitHandler = async (values, actions) => {
    setLoading(true)
    try {
      const response = await loginUser({
        email: values.email,
        password: values.password,
      });
      console.log("res is", response)
      if (response.data?.success) {
        if (response?.data?.user) {
          dispatch(handleRole(response.data?.user?.role));
          dispatch(handleCurrentLoaginUser(response.data?.user));
          await AsyncStorage.setItem('role', response.data?.user.role);
          await AsyncStorage.setItem('token', response.data?.user.token);
          await AsyncStorage.setItem('userId', response.data?.user.id);
          await AsyncStorage.setItem('email', response.data?.user.email);
          await AsyncStorage.setItem('isLoggedIn', 'login');
          actions.resetForm();

          let screenTo = null;

          if (response.data?.user?.role === "freeflexer") {
            screenTo = { name: "Main", params: { screen: "FreeflexerStack", params: { screen: "FreeflexerHomeScreen" } } };
          } else if (response.data?.user?.role === "contractor") {
            screenTo = { name: "Main", params: { screen: "ContractorStack", params: { screen: "ContractorHomeScreen" } } };
          }
          navigation.replace(screenTo.name, screenTo.params);

          // navigation.navigate( response.data?.user?.role === "freeflexer" ? "FreeflexerHomeScreen" : "ContractorHomeScreen");
        }
        if (response?.data?.message) {
          setErrorMessage(response?.data?.message);
          setVisible(true);
        }
      } else {
        setErrorMessage(response?.error?.data?.message);
        setVisible(true);
      }
    } catch (err) {
      setErrorMessage('An unexpected error occurred');
      setVisible(true);
    } finally {
      setLoading(false)
    }
  };

  return (
    <ScreenGradientBackground>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flex: 1,
        }}>
        <AuthAppbar title={'Sign in'} />
        <Text style={{ textAlign: "center", fontSize: 18, letterSpacing: 3 }}>Log In</Text>

        <Portal>
          <Dialog visible={visible} onDismiss={() => setVisible(false)}>
            <Dialog.Title>Sign in</Dialog.Title>
            <Dialog.Content>
              <Paragraph>
                {errorMessage} {isError && error?.error}
              </Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => setVisible(false)}>Ok</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>

        <Banner
          visible={passwordResetSuccessflly}
          actions={[
            {
              label: 'Ok',
            },
          ]}
          icon={({ size }) => <Avatar.Icon size={size} icon="check-bold" />}>
          Your password has been reset successfully. You can sign in now with
          the updated password.
        </Banner>

        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={validationSchema}
          onSubmit={submitHandler}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View
              style={{
                flex: 1,
                justifyContent: 'space-between',
                marginTop: 73,
                paddingHorizontal: '5%',
              }}>
              <View>
                <TextInput
                  placeholder={'Email address'}
                  mode="outlined"
                  value={values.email}
                  theme={{ roundness: 20 }}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  activeOutlineColor={theme.colors.secondary}
                  left={
                    <TextInput.Icon
                      icon={({ size, color }) => (
                        <Image
                          source={require('../../../assets/email.png')}
                          style={{ width: size, height: size, }}
                        />
                      )}
                      onPress={() => setShowPassword(!showPassword)}
                    />
                  } />
                {errors.email && touched.email ? (
                  <Text style={{ color: theme.colors.error }}>
                    {errors.email}
                  </Text>
                ) : null}
                <TextInput
                  placeholder={'Password'}
                  theme={{ roundness: 20 }}
                  secureTextEntry={!showPassword}
                  left={
                    <TextInput.Icon
                      icon={({ size, color }) => (
                        <Image
                          source={require('../../../assets/lock.png')}
                          style={{ width: size, height: size, }}
                        />
                      )} />
                  }
                  mode="outlined"
                  style={{ marginTop: '3%' }}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  activeOutlineColor={theme.colors.secondary}
                />
                {errors.password && touched.password ? (
                  <Text style={{ color: theme.colors.error }}>
                    {errors.password}
                  </Text>
                ) : null}

                <TouchableOpacity
                  style={{ alignSelf: "flex-end", marginTop: "5%" }}
                  onPress={() => navigation.navigate('ForgotPassword')}>
                  <Text
                    style={{ fontFamily: "AnekBangla-Regular", textDecorationLine: "underline", color: theme.colors.onBackground }}>
                    {'Forgot password'}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity style={{marginTop:60}} onPress={() => navigation.replace("BottomTabs")}>
                  <GradientButton
                    textStyle={{ color: "#fff", letterSpacing: 3,fontSize:20 }}
                    style={{
                      fontFamily: "AnekBangla-Regular",justifyContent:"center",
                      height:55,alignItems: "center", marginTop: 30, borderRadius: 20
                    }}
                    text={"LOGIN"}
                  />
                </TouchableOpacity>
                {/* <Button
                  loading={isLoading || loading}
                  disabled={isLoading || loading}
                  style={{
                    marginTop: '10%',
                  }}
                  contentStyle={{ padding: '3%' }}
                  theme={{ roundness: 10 }}
                  mode="contained"
                  onPress={handleSubmit}
                  buttonColor={"transparent"}>
                  {'Log in'}
                </Button> */}

                {/* <View style={{ marginVertical: '5%', alignItems: 'center' }}>
                  <Button
                    mode="text"
                    onPress={() => navigation.navigate("WelcomeScreen")}
                    labelStyle={{ color: '#3F51B5', fontWeight: 'bold' }}
                  >
                    New to Lanza job? Sign up
                  </Button>
                </View> */}


              </View>
              <SocialLogin />

            </View>
          )}
        </Formik>
      </ScrollView>
    </ScreenGradientBackground>
  );
};

export default LoginScreen;
