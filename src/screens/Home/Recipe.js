import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { Card, Text, IconButton, useTheme } from 'react-native-paper'; // Import IconButton from React Native Paper
import { useNavigation } from '@react-navigation/native'; // Import useNavigation for navigation
import WorkoutsScreensAppbar from '../../components/Appbars/WorkoutsScreensAppbar';
import GradientButton from '../../components/GradientButton';

const Recipe = () => {
  const navigation = useNavigation(); // Hook for navigation
  const theme = useTheme()
  return (

    <View style={{ flex: 1, paddingTop: "7%", backgroundColor: theme.colors.background }}>
      <WorkoutsScreensAppbar isMain={false} title={"RECIPE OVERVIEW"} />
      {/* <WorkoutsScreensAppbar isMain={false} title={"CREATE PROFILE"} /> */}

      <ScrollView>

        <Text
          style={{
            color: '#767676',
            fontSize: 22,
            textAlign: 'center',
            marginTop: 20,
            fontWeight: '400',
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
            color="white"
            size={30}
            onPress={() => navigation.navigate('HomeScreenIndex')}
            style={{ marginHorizontal: 20 }}
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
            color="white"
            size={30}
            onPress={() => {
            }}
            style={{ marginHorizontal: 20 }}
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
        <Card style={{
          shadowColor: '#fff',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          padding: "5%", justifyContent: "flex-start", margin: 20
        }}>
          <Text style={{ color: 'white', fontWeight: "500", fontSize: 30 }}>Recipe:</Text>
          <Text style={{ marginTop: "3%", color: 'white', fontWeight: "400", fontSize: 15 }}>
            • 4 tablespoons (60ml) extra-virgin olive oil, divided
          </Text>
          <Text style={{ marginTop: "3%", color: 'white', fontWeight: "400", fontSize: 15 }}>
            • 1 teaspoon coarsely ground black pepper, to taste
          </Text>
          <Text style={{ marginTop: "3%", color: 'white', fontWeight: "400", fontSize: 15 }}>
            • Kosher salt, to taste
          </Text>
          <Text style={{ marginTop: "3%", color: 'white', fontWeight: "400", fontSize: 15 }}>
            • 1/2 pound (225g) spaghetti
          </Text>
          <Text style={{ marginTop: "3%", color: 'white', fontWeight: "400", fontSize: 15 }}>
            • 2 tablespoons (30g) unsalted butter
          </Text>

        </Card>

        <Card style={{
          shadowColor: '#fff',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          padding: "5%", justifyContent: "flex-start", margin: 20
        }}>
          <Text style={{ color: 'white', fontWeight: "500", fontSize: 30 }}>Nutrition:</Text>
          {
            ["Kolhydrater 31.29 g", "Kostfiber 19 g", "Socker 1.14 g", "Fett 6.81 g", "Mättat fett 2.71 g"].map((item, index) =>
              <Text key={index} style={{ marginTop: "3%", color: 'white', fontWeight: "400", fontSize: 15 }}>
                • {item}
              </Text>
            )
          }


        </Card>

      </ScrollView>

    </View>
  );
};

export default Recipe;