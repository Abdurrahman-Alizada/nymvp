import { StyleSheet, View, Image, ScrollView } from 'react-native';
import React from 'react';
import { Card, Text, IconButton } from 'react-native-paper'; // Import IconButton from React Native Paper
import WorkoutsScreensAppbar from '../../components/Appbars/WorkoutsScreensAppbar';
import ScreenGradientBackground from '../../components/ScreenGradientBackground';

export default function Instruction({ navigation }) {
  return (
    <ScreenGradientBackground>
      <View style={{ flex: 1, }}>
        <WorkoutsScreensAppbar isMain={false} title={"Instructions"} />
        <ScrollView contentContainerStyle={{}}>

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


          <View style={{ paddingHorizontal: 25,paddingTop:15 }}>
            <Text style={{ color: 'white', fontWeight: "500", fontSize: 30, letterSpacing: 3 }}>Step one:</Text>
            <Text  style={{ fontSize: 16, letterSpacing: 2 }}>
              Heat 3 tablespoons olive oil and about a teaspoon of black pepper in a medium skillet over medium-low heat until ingredients are fragrant and pepper is barely starting to sizzle, about 1 minute. Set aside.              </Text>
          </View>

          <View style={{ paddingHorizontal: 25,paddingTop:15 }}>
            <Text style={{ color: 'white', fontWeight: "500", fontSize: 30, letterSpacing: 3 }}>Step two:</Text>
            <Text  style={{ fontSize: 16, letterSpacing: 2 }}>
              Heat 3 tablespoons olive oil and about a teaspoon of black pepper in a medium skillet over medium-low heat until ingredients are fragrant and pepper is barely starting to sizzle, about 1 minute. Set aside.              </Text>
          </View>
        </ScrollView>

      </View>
    </ScreenGradientBackground>
  );
}

const styles = StyleSheet.create({});
