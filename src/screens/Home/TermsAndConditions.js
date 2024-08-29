import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation for navigation
import AntDesign from 'react-native-vector-icons/AntDesign'; // Import AntDesign for icons
import ScreenGradientBackground from '../../components/ScreenGradientBackground';
import WorkoutsScreensAppbar from '../../components/Appbars/WorkoutsScreensAppbar';

const Termscondition = () => {
  const navigation = useNavigation(); // Hook for navigation

  return (
    <ScreenGradientBackground>
      <View
        style={{
          flex: 1,
          padding: 20,
          justifyContent: 'space-between', // Distribute space between children
        }}>
     <WorkoutsScreensAppbar isMain={true} title={"TERMS AND CONDITIONS"} />


 
        <View style={{ justifyContent: "center" }}>

          <Text
            style={{
              fontSize: 18,
              fontWeight: '400',
              textAlign: 'center',
              color: 'white',
              margin: 30,
            }}>
            TERMS AND CONDITIONS
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              textAlign: 'justify',
              color: 'grey',

              marginHorizontal: 20, // Add some horizontal padding
            }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with
            the release of Letraset sheets containing Lorem Ipsum passages, and
            more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </Text>
        </View>


        <View style={{ justifyContent: "center", marginTop: -60 }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#C5D7D7',
              // paddingVertical: 15,
              borderRadius: 10,
              width: '70%',
              // height:30,
              alignItems: 'center',
              height: 45,
              justifyContent:"center",
              alignSelf: 'center',
              marginTop: 100,
              marginBottom: 100, // Space from bottom of the screen
            }}
            onPress={() => {
              navigation.navigate('BottomTabs'); // Ensure this route exists in your navigator
            }}>
            <Text style={{ color: 'white', fontSize: 18, alignSelf: "center" }}>
            Report a problem
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenGradientBackground>
  );
};

export default Termscondition;