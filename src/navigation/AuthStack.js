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
  SignUpwithEmail

} from '../screens/auth/Index';
import ForgotPassword from '../screens/auth/ForgotPassword/ForgotPasswordScreen';
import GeneralAppbar from '../components/Appbars/GeneralAppbar';
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
