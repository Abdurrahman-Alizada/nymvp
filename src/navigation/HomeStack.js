
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { LoginScreen } from '../screens/auth/Index';
import StartWorkouts from '../screens/Home/Cardio';
import Recipe from '../screens/Home/Recipe';
import Meditation from '../screens/Home/Meditation';
import Instruction from '../screens/Home/Instruction';
import GroceryList from '../screens/Home/grocerylist';
import termscondition from '../screens/Home/TermsAndConditions';
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName='Recipi' >

      <Stack.Screen
        name="Recipe"
        component={Recipe}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Instruction"
        component={Instruction}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Grocerylist"
        component={GroceryList}
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
        name="TermsAndConditions"
        component={termscondition}
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
