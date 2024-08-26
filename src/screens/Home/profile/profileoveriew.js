import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const ProfileOverview = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        padding: 20,
        justifyContent: 'center',
      }}>
      <View style={{justifyContent: 'center', width: '100%'}}>
        <Image
          source={require('../../../assets/logob.png')}
          style={{
            height: '20%',
            width: '60%',
            resizeMode: 'center',
            alignSelf: 'center',
            marginTop: -55,
          }}
        />
      </View>
      <View style={{marginTop: -60}}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
            textAlign: 'center',
            color: 'white',
            margin: 20,
          }}>
          PROFILE OVERVIEW
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '400',
            textAlign: 'center',
            color: 'white',
            marginTop: -10,
          }}>
          CHOOSE YOUR PLAN
        </Text>
      </View>

      <View style={{alignItems: 'center', marginBottom: 20}}>
        <Image
          source={require('../../../assets/profilepicgrl.png')}
          style={{
            width: 70,
            height: 70,
            borderRadius: 50,
            borderWidth: 2,
            borderColor: '#3498db',
          }}
        />
        <Text
          style={{
            fontSize: 20,
            marginTop: 10,
            fontWeight: 'bold',
            color: 'white', // Changed from '#333' to 'white' for better contrast
          }}>
          Sven-Ingvar
        </Text>
      </View>

      <View
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 15,
          borderRadius: 10,
          backgroundColor: '#1E1E1E', // Slightly lighter black for the card background
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 1},
          shadowOpacity: 0.2,
          shadowRadius: 1.5,
          marginBottom: 20,
          width: '100%',
        }}>
        <View 
          style={{
            backgroundColor: '#C5D7D7', 
            paddingVertical: 10, 
            paddingHorizontal: 15,
            alignItems: 'center',
            borderRadius: 15,
            marginBottom: 10,
            width: '80%', // Adjusted width for better proportion
            alignSelf: 'center', // Center the box horizontally
          }}
        >
          <Text style={{fontSize: 22, fontWeight: 'bold', color: '#000'}}>
            Personal
          </Text>
          <Text style={{fontSize: 18, color: '#000'}}>
            $9.99 monthly
          </Text>
        </View>
        <View style={{marginTop: 10}}>
          {[
            'Unlimited monthly meal generations',
            'Auto-generation',
            'Recipes by email',
            'Access to members area',
            'Profile overview',
            'On-website recipes',
            'Monthly overview',
            'Cooking instructions',
            'Advanced profile',
            'Choose mission/goal',
          ].map((perk, index) => (
            <Text
              key={index}
              style={{fontSize: 14, marginBottom: 5, color: '#ccc'}}>
              {perk}
            </Text>
          ))}
        </View>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: '#C5D7D7',
          paddingVertical: 15,
          borderRadius: 15,
          width: '70%',
          alignItems: 'center',
          marginTop: -30, // Slightly reduced margin to better align with other elements
          height: 50, // Adjusted height for a more button-like appearance
          alignSelf: 'center',
        }}
        onPress={() => {
          // Handle navigation or action here
        }}>
        <Text style={{color: '#000', fontSize: 18, fontWeight: 'bold'}}>
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileOverview;
