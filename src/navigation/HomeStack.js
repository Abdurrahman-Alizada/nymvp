import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Recipe from '../screens/Home/Recipe';
import { LoginScreen } from '../screens/auth/Index';
import StartWorkouts from '../screens/Home/StartWorkouts';
import Meditation from '../screens/Home/Meditation';
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
      <Stack.Screen
        name="Cardio"
        component={StartWorkouts}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Meditatoin"
        component={Meditation}
        options={{
          headerShown: false,
        }}
      />

    </Stack.Navigator>
  );
};

export default HomeStack;
