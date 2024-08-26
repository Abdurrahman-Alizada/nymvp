// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';

// import { LoginScreen } from '../screens/auth/Index';
// import Recipe from '../screens/Home/Recipe';
// const Stack = createStackNavigator();

// const HomeStack = () => {
//   return (
//     <Stack.Navigator initialRouteName='Recipe' >
     
//       <Stack.Screen
//         name="Recipe"
//         component={Recipe}
//         options={{
//           headerShown: false,
//         }}
//       />


//     </Stack.Navigator>
//   );
// };

// export default HomeStack;


import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { LoginScreen } from '../screens/auth/Index';
import Recipe from '../screens/Home/Recipe';
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator >
     
      <Stack.Screen
        name="Recipe"
        component={Recipe}
        
      />


    </Stack.Navigator>
  );
};

export default HomeStack;
