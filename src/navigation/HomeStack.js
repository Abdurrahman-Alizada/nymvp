import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import GeneralAppbar from '../components/Appbars/GeneralAppbar';
import ContractorHomeScreen from '../screens/home/Contractor/index';
import FreeflexerTermsAndCondition from '../screens/TermsAndConditions/FreeflexerTermsAndConditions';

const AppStack = () => {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="ContractorHomeScreen"
        component={FreeflexerTermsAndCondition}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateShift"
        component={FreeflexerTermsAndCondition}
        options={{
          header: props => (
            <ContractorDashboardGeneralAppbar greetingText={'Create shift'} {...props} />
          )
        }}
      />
      <Stack.Screen
        name="CreateBusiness"
        component={FreeflexerTermsAndCondition}
        options={{
          header: props => (
            <GeneralAppbar title={'Add business'} {...props} />
          )
        }}
      />

    </Stack.Navigator>
  );
};

export default AppStack;
