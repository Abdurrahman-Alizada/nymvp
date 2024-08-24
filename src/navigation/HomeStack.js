import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Recipe from '../screens/Home/Recipe';
import { LoginScreen } from '../screens/auth/Index';
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName='Recipi' >
     
      <Stack.Screen
        name="Recipi"
        component={Recipe}
        options={{
          headerShown: false,
        }}
      />


    </Stack.Navigator>
  );
};

export default HomeStack;
