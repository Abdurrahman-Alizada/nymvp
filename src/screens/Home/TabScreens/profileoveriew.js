import { View, StatusBar, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import WorkoutsScreensAppbar from '../../../components/Appbars/WorkoutsScreensAppbar';
import { useTheme, Text, Card } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-reanimated-carousel';
import { width } from '../../../GlobalStyles';
import ScreenGradientBackground from '../../../components/ScreenGradientBackground';

const Profile = () => {
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState(0); // state to track the active index
  
  const plans = [
    {
      title: 'Personal',
      price: '$9.99 monthly',
      features: [
        'Unlimited monthly meal generations',
        'Auto-generation',
        'Recipes by email',
        'Access to members area',
        'Profile overview',
        'Monthly overview',
        'On-website-recipes',
        'Cooking instructions',
        'Advanced profile',
        'Choose mission/goal',
      ],
    },
    {
      title: 'Team',
      price: '$19.99 monthly',
      features: [
        'Unlimited monthly meal generations',
        'Auto-generation',
        'Recipes by email',
        'Access to members area',
        'Profile overview',
        'Monthly overview',
        'On-website-recipes',
        'Cooking instructions',
        'Advanced profile',
        'Choose mission/goal',
      ],
    },
    {
      title: 'Family',
      price: '$29.99 monthly',
      features: [
        'Unlimited monthly meal generations',
        'Auto-generation',
        'Recipes by email',
        'Access to members area',
        'Profile overview',
        'Monthly overview',
        'On-website-recipes',
        'Cooking instructions',
        'Advanced profile',
        'Choose mission/goal',
      ],
    },
    // Add more plans here if needed
  ];

  return (
    <ScreenGradientBackground>
      <ScrollView contentContainerStyle={{ marginBottom:"5%"}}>
        <WorkoutsScreensAppbar isMain={true} title={"PROFILE OVERVIEW"} />

        <Text style={{ marginTop: "2%", textAlign: "center", fontSize: 18,letterSpacing:3 }}>Choose your plan</Text>
        <Image
          style={{
            width: 100,
            height: 100,
            marginRight: 5,
            resizeMode: "contain",
            alignSelf: "center",
            marginTop: 10,
            borderRadius: 50,
          }}
          source={require('../../../assets/avatar.png')}
        />
        <Text style={{
          textAlign: "center",
          marginTop: 5,
          fontSize: 16,
          color: "#D0D0D0",
          fontFamily: "FuzzyBubble-Regular"
        }}>sven-ingvar</Text>

        <Carousel
          width={width}
          height={500}
          data={plans}
          // style={{ marginBottom: "5%" }}
          scrollAnimationDuration={1000}
          onSnapToItem={(index) => setActiveIndex(index)} // track active index
          renderItem={({ item }) => (
            <View style={{ marginBottom: "5%" }}>
              <Image
                source={require('../../../assets/diamods.png')}
                style={{
                  width: 50,
                  height: 50,
                  marginTop: 20,
                  alignSelf: "center",
                  marginBottom: -40,
                  zIndex: 999
                }}
                resizeMode="contain"
              />
              <Card style={{
                marginHorizontal: 20,
                marginTop: 20,
                backgroundColor: "#1C1C1C",
                shadowColor: '#fff',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
              }}>
                <LinearGradient colors={['#C5D7D7', '#839898']}
                  style={{ borderTopRightRadius: 20, borderTopLeftRadius: 20, }}
                  start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}>
                  <View style={{
                    alignItems: 'center',
                    borderRadius: 10,
                    padding: 10,
                    marginBottom: 15,
                  }}>
                    <Text style={{ fontSize: 24, marginTop: 8, color: "#FFFFFF", fontWeight: "bold" }}>{item.title}</Text>
                    <Text style={{ fontSize: 16, color: "#FFFFFF", }}>{item.price}</Text>
                  </View>
                </LinearGradient>

                <Text style={{ padding: "5%", marginTop: 5, color: "#FFFFFF", fontSize: 14, lineHeight: 23 }}>
                  {item.features.map((feature, index) => (
                    <Text key={index}>• {feature}{"\n"}</Text>
                  ))}
                </Text>
              </Card>
              
            </View>
          )}
        />

        {/* Pagination Dots */}
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: "25%" }}>
          {plans.map((_, index) => (
            <View
              key={index}
              style={{
                height: 8,
                width: 8,
                backgroundColor: index === activeIndex ? '#fff' : '#ccc',
                borderRadius: 4,
                marginHorizontal: 4,
              }}
            />
          ))}
        </View>
      </ScrollView>
    </ScreenGradientBackground>
  );
}

export default Profile;
