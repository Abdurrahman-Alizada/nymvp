import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation for navigation
import AntDesign from 'react-native-vector-icons/AntDesign'; // Import AntDesign for icons

const Termscondition = () => {
  const navigation = useNavigation(); // Hook for navigation

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        padding: 20,
        justifyContent: 'space-between', // Distribute space between children
      }}>
      <View style={{ justifyContent: 'center', width: '100%' }}>
        <Image
          source={require('../../assets/logob.png')}
          style={{
            height: '20%',
            width: '60%',
            resizeMode: 'center',
            alignSelf: 'center',
            marginTop: 20, 
          }}
        />
      </View>
      

      {/* <View style={{ marginTop: -40,flexDirection:"row",padding:10 }}> 
      <TouchableOpacity 
        onPress={() => navigation.goBack()} 
        style={{ alignSelf: 'flex-start' }}> 
        <AntDesign style={{marginRight:110}}name="arrowleft" size={24} color="white" />
      </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            marginHorizontal:-80,
            fontWeight: '500',
            color: 'white',
            marginBottom: 5, 
          }}>
          TERMS AND CONDITIONS
        </Text>
        </View> */}
        <View style={{justifyContent:"center"}}>

        <Text
          style={{
            fontSize: 18,
            fontWeight: '400',
            textAlign: 'center',
            color: 'white',
            margin:30,
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
            paddingVertical: 15,
            borderRadius: 15,
            width: '70%',
            // height:30,
            alignItems: 'center',
            height: 50,
            alignSelf: 'center',
            marginTop: 170,
            marginBottom: 100, // Space from bottom of the screen
          }}
          onPress={() => {
            navigation.navigate('BottomTabs'); // Ensure this route exists in your navigator
          }}>
          <Text style={{ color: 'white', fontSize: 18, alignSelf: "center" }}>
           Go to App
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Termscondition;