import { StyleSheet, View, Image, ScrollView } from 'react-native';
import React from 'react';
import { Card,Text, IconButton } from 'react-native-paper'; // Import IconButton from React Native Paper
import WorkoutsScreensAppbar from '../../components/Appbars/WorkoutsScreensAppbar';

export default function Instruction({ navigation }) {
  return (

    <View style={{ flex: 1, paddingTop: "5%", backgroundColor: 'black' }}>
      <WorkoutsScreensAppbar isMain={false} title={"Instructions"} />
      <ScrollView contentContainerStyle={{  }}>

        <View style={{ justifyContent: 'center', alignSelf: 'center' }}>
          <Image
            source={require('../../assets/macroni.png')}
            style={{
              height: 356,
              width: 302,
              resizeMode: 'center',
            }}
          />
        </View>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            textAlign: 'center',
            marginTop: -30,
            fontWeight: '600',
          }}>
          CACIO E PEPE
        </Text>
        <View style={{ padding: "5%" }}>

          <Card style={{
            shadowColor: '#fff',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            padding: "2%", justifyContent: "flex-start"
          }}>
            <Text
              style={{
                color: 'white',
                fontSize: 25,
                textAlign: 'left', // Aligns the text to the left
                fontWeight: '500',
                marginTop: 20,
                marginTop: 10,
                marginLeft: 10, // Keeps some padding from the left edge
              }}>
              Step One:
            </Text>
            <Text
              style={{
                color: '#A7A7A7',
                fontSize: 15,
                textAlign: 'left', // Aligns the text to the left
                fontWeight: '400',
                marginLeft: 10, // Keeps some padding from the left edge
                marginTop: 10,
              }}>
              Heat 3 tablespoons olive oil and about a {'\n'}
              teaspoon of black pepper in a medium{'\n'}
              skillet over medium-low heat until {'\n'}
              ingredients are fragrant and pepper is {'\n'}
              barely starting to sizzle, about 1{'\n'}
              minute. Set aside.
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 25,
                textAlign: 'left', // Aligns the text to the left
                fontWeight: '500',
                marginTop: 20,
                marginTop: 10,
                marginLeft: 10, // Keeps some padding from the left edge
              }}>
              Step Two:
            </Text>
            <Text
              style={{
                color: '#A7A7A7',
                fontSize: 15,
                textAlign: 'left', // Aligns the text to the left
                fontWeight: '400',
                marginLeft: 10, // Keeps some padding from the left edge
                marginTop: 10
              }}>
              Heat 3 tablespoons olive oil and about a {'\n'}
              teaspoon of black pepper in a medium{'\n'}
              skillet over medium-low heat until {'\n'}
              ingredients are fragrant and pepper is {'\n'}
              barely starting to sizzle, about 1{'\n'}
              minute. Set aside.
            </Text>
          </Card>
        </View>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({});
