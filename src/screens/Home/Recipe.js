import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { Card, Text, IconButton, useTheme } from 'react-native-paper'; // Import IconButton from React Native Paper
import { useNavigation } from '@react-navigation/native'; // Import useNavigation for navigation
import WorkoutsScreensAppbar from '../../components/Appbars/WorkoutsScreensAppbar';
import GradientButton from '../../components/GradientButton';
import ScreenGradientBackground from '../../components/ScreenGradientBackground';

const Recipe = () => {
  const navigation = useNavigation(); // Hook for navigation
  const theme = useTheme()
  const ingredients = [
    '4 tablespoons (60ml) extra-virgin olive oil, divided',
    '1 teaspoon coarsely ground black pepper, to taste',
    'Kosher salt, to taste',
    '1/2 pound (225g) spaghetti',
    '2 tablespoons (30g) unsalted butter',
    '2 ounces Pecorino Romano cheese'
  ];

  return (
    <ScreenGradientBackground>
      <View style={{ flex: 1 }}>

        <ScrollView contentContainerStyle={{}}>
          <WorkoutsScreensAppbar isMain={false} title={"RECIPE OVERVIEW"} />

          <Text
            style={{
              color: '#767676',
              fontSize: 22,
              textAlign: 'center',
              marginTop: 20,
              fontWeight: '400',
              letterSpacing: 3
            }}>
            Tuesday
          </Text>


          <View
            style={{
              flexDirection: 'row', // Align items horizontally
              justifyContent: 'space-between', // Space out the icons and image
              alignItems: 'center', // Center the items vertically
              // margin: 40,
              marginTop: 10,
              // width: '100%',
            }}
          >
            <IconButton
              icon="chevron-left"
              iconColor="#838383"
              size={30}
              onPress={() => navigation.navigate('HomeScreenIndex')}
              style={{ marginHorizontal: 10 }}
            />

            <Image
              source={require('../../assets/macroni.png')}
              style={{
                height: 200,
                width: 250,
                resizeMode: 'center',
              }}
            />

            <IconButton
              icon="chevron-right" // Right arrow icon
              iconColor="#838383"
              size={30}
              onPress={() => {
              }}
              style={{ marginHorizontal: 10 }}
            />
          </View>
          <View>
            <Text style={{ fontSize: 22, fontWeight: "500", alignSelf: "center", color: "white", marginTop: 20 }}>CACIO E PEPE</Text>
            <Text style={{ fontSize: 14, alignSelf: "center", color: "white", marginTop: 0 }}>370 calories</Text>

          </View>
          <View style={{ paddingHorizontal: "5%", flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate({ name: "HomeStack", params: { screen: "Grocerylist" } })}
              style={{ width: "48%", alignItems: 'center', }}
            >
              <GradientButton
                textStyle={{ color: '#fff', fontSize: 20, textAlign: "center" }}
                style={{
                  borderRadius: 10,
                  width: '100%',
                  height: 50,
                  justifyContent: 'center',
                }}
                text={'Grocery List'}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate({ name: "HomeStack", params: { screen: "Instruction" } })}
              style={{ width: "48%", alignItems: 'center', }}
            >
              <GradientButton
                textStyle={{ color: '#fff', fontSize: 20, textAlign: "center" }}
                style={{
                  borderRadius: 10,
                  width: '100%',
                  height: 50,
                  justifyContent: 'center',
                }}
                text={'Instructions'}
              />
            </TouchableOpacity>

          </View>
          <View style={{padding:25}}>
          <Text style={{ color: 'white', fontWeight: "500", fontSize: 30, letterSpacing:3 }}>Recipe:</Text>

            {ingredients.map((item, index) => (
              <View key={index} style={{flexDirection:"row"}}>
              <Text  style={{fontSize:16,marginRight:5, letterSpacing:2}}>
              {'\u2022'} 
              </Text>
              <Text key={index} style={{fontSize:16, letterSpacing:2}}>
             {item}
              </Text>
              </View>
            ))}
          </View>
         
          <View style={{padding:25}}>
          <Text style={{ color: 'white', fontWeight: "500", fontSize: 30, letterSpacing:3 }}>Nutrition:</Text>

            {["Kolhydrater 31.29 g", "Kostfiber 19 g", "Socker 1.14 g", "Fett 6.81 g", "Mättat fett 2.71 g"].map((item, index) => (
              <View key={index} style={{flexDirection:"row"}}>
              <Text  style={{fontSize:16,marginRight:5, letterSpacing:2}}>
              {'\u2022'} 
              </Text>
              <Text key={index} style={{fontSize:16, letterSpacing:2}}>
             {item}
              </Text>
              </View>
            ))}
          </View>
       

        </ScrollView>
      </View>
    </ScreenGradientBackground>
  );
};

export default Recipe;