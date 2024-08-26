import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreenIndex from '../screens/Home/TabScreens/HomeScreenIndex';

import { useTheme } from 'react-native-paper';
import HomeScreenAppbar from '../components/Appbars/HomeScreenAppbar';
import Recipe from '../screens/Home/Recipe';
import Instruction from '../screens/Home/Instruction';
import grocerylist from '../screens/Home/grocerylist';
import profileoveriew from '../screens/Home/TabScreens/profileoveriew';
import Workouts from '../screens/Home/TabScreens/Workouts';
import HistorScreen from '../screens/Home/TabScreens/History';
import ActiveWorkoutScreen from '../screens/Home/TabScreens/ActiveWorkouts';

const Tab = createMaterialBottomTabNavigator();

export default function BottomTabsStack() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#ffffff"
      inactiveColor="#888888"
      shifting={false} // Keep the icons the same size
      barStyle={{
        backgroundColor: '#000000', // Background color of the tab bar
        // borderTopLeftRadius: 20, // Rounded corners on top left and right
        // borderTopRightRadius: 20,
        overflow: 'hidden', // Ensure the background doesn't overflow the corners
        position: 'absolute', // Keep it floating above the screen content
        bottom: 0, // Adjust the positioning at the bottom
        left: 0,
        right: 0,
        height: 70, // Increase height to match your design
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreenIndex}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={28} />
          ),
        }}
      />
       {/* <Tab.Screen
        name="Recipe"
        component={Recipe}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={28} />
          ),
        }}
      /> */}
      {/* <Tab.Screen
        name="Instruction"
        component={Instruction}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={28} />
          ),
        }}
      /> */}
       {/* <Tab.Screen
        name="grocerylist"
        component={grocerylist}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={28} />
          ),
        }}
      /> */}
       {/* <Tab.Screen
        name="profileoveriew"
        component={profileoveriew}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={28} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Workouts"
        component={Workouts}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="weight-lifter" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Nutrition"
        component={HistorScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="food" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Meditation"
        component={ActiveWorkoutScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="meditation" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Running"
        component={HomeScreenIndex}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="run" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
