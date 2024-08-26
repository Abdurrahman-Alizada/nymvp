import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FreeflexerTermsAndCondition from '../screens/TermsAndConditions/FreeflexerTermsAndConditions';
import {
  CheckEmail,
  ContractorSignupWithEmail,
  FreeflexerSignUpwithEmail,
  LoginScreen,
  OTPScreen,
  ResetPasswordScreen,
  FreeflexerCreatePassword,
  CreatePhoneNumber,
  Address,
  SearchAddress,
  SignUpwithEmail,
} from '../screens/auth/Index';
import SignupWithEmail2 from '../screens/auth/Registration/SignupWithEmail2';
import SignupWithEmail3 from '../screens/auth/Registration/SignupWithEmail3';
import SignupWithEmail4 from '../screens/auth/Registration/SignupWithEmail4';
import SignupWithEmail5 from '../screens/auth/Registration/SignupWithEmail5';
import SignupWithEmail6 from '../screens/auth/Registration/SignupWithEmail6';

import ForgotPassword from '../screens/auth/ForgotPassword/ForgotPasswordScreen';
import GeneralAppbar from '../components/Appbars/GeneralAppbar';
// import Recipe from '../screens/Home/Recipe';
// import HomeStack from './HomeStack';
const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">

      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
          presentation: 'modal',
        }}
      />

      <Stack.Screen
        name="SignUpwithEmail"
        options={{
          presentation: 'modal',
          headerShown: false,
          title: 'Sign up with email',
        }}
        component={SignUpwithEmail}
      />
      <Stack.Screen
        name="SignUpwithEmail2"
        options={{
          presentation: 'modal',
          headerShown: false,
          title: 'Sign up with email',
        }}
        component={SignupWithEmail2}
      />
      <Stack.Screen
      name="SignUpwithEmail3"
      options={{
        presentation: 'modal',
        headerShown: false,
        title: 'Sign up with email',
      }}
      component={SignupWithEmail3}
    />
    <Stack.Screen
      name="SignupWithEmail4"
      options={{
        presentation: 'modal',
        headerShown: false,
        title: 'Sign up with email',
      }}
      component={SignupWithEmail4}
    />
 <Stack.Screen
      name="SignupWithEmail5"
      options={{
        presentation: 'modal',
        headerShown: false,
        title: 'Sign up with email',
      }}
      component={SignupWithEmail5}
    />
    <Stack.Screen
      name="SignupWithEmail6"
      options={{
        presentation: 'modal',
        headerShown: false,
        title: 'Sign up with email',
      }}
      component={SignupWithEmail6}
    />
    {/* <Stack.Screen
      name="Recipe"
      options={{
        presentation: 'modal',
        headerShown: false,
        title: 'Sign up with email',
      }}
      component={Recipe}
    /> */}
     
      <Stack.Screen
        name="FreeflexerCreatePassword"
        options={{
          presentation: 'modal',
          headerShown: false,
        }}
        component={FreeflexerCreatePassword}
      />

      <Stack.Screen
        name="CreatePhoneNumber"
        options={{
          presentation: 'modal',
          headerShown: false,
        }}
        component={CreatePhoneNumber}
      />

      <Stack.Screen
        name="FreeflexerTermsAndCondition"
        options={{
          presentation: 'modal',
          headerShown: false,
        }}
        component={FreeflexerTermsAndCondition}
      />



      <Stack.Screen
        name="SearchAddress"
        options={{
          presentation: 'modal',
          headerShown: false,
        }}
        component={SearchAddress}
      />

      <Stack.Screen
        name="ContractorSignUpwithEmail"
        options={{
          presentation: 'modal',
          headerShown: false,
        }}
        component={ContractorSignupWithEmail}
      />
      <Stack.Screen
        name="ForgotPassword"
        options={{
          header: props => (
            <GeneralAppbar title={'Forgot password'} {...props} />
          ),
        }}
        component={ForgotPassword}
      />
      <Stack.Screen name="CheckEmail" component={CheckEmail} />
      <Stack.Screen
        name="OTPScreen"
        component={OTPScreen}
        options={{
          title: 'Verify email',
        }}
      />
      <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
        options={{
          title: 'Reset password',
        }}
      />
     
    </Stack.Navigator>
  );
};

export default AuthStack;
