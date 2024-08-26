import {StyleSheet, Text, View, Image,ScrollView} from 'react-native';
import React from 'react';
import {IconButton} from 'react-native-paper'; // Import IconButton from React Native Paper

export default function Instruction({navigation}) {
  return (

    <View style={{flex: 1, backgroundColor: 'black'}}>
              <ScrollView contentContainerStyle={{flexGrow: 1}}>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../../assets/logob.png')}
          style={{
            height: '12%',
            width: '60%',
            resizeMode: 'center',
            marginTop: 45,
          }}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          marginTop: 110, // Positioning this view at the top
        }}>
        <IconButton
          icon="arrow-left-circle-outline"
          color="white"
          size={30}
          onPress={() => navigation.navigate('Recipe')}
          style={{marginHorizontal: 20}}
        />
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontSize: 22,
            fontWeight: '400',
            marginHorizontal: 30,
          }}>
          Instructions
        </Text>
      </View>

      <View style={{justifyContent: 'center', alignSelf: 'center'}}>
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
      <View style={{ justifyContent: "flex-start" }}>
  <Text
    style={{
      color: 'white',
      fontSize: 25,
      textAlign: 'left', // Aligns the text to the left
      fontWeight: '500',
      marginVertical: 20,
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
      marginVertical: 20,
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
    }}>
    Heat 3 tablespoons olive oil and about a {'\n'}
    teaspoon of black pepper in a medium{'\n'}
    skillet over medium-low heat until {'\n'}
    ingredients are fragrant and pepper is {'\n'}
    barely starting to sizzle, about 1{'\n'}
    minute. Set aside.
  </Text>
</View>
</ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({});
