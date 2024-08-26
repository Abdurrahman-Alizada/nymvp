import {View, Text, Image,TouchableOpacity} from 'react-native';
import React from 'react';
import {IconButton} from 'react-native-paper'; // Import IconButton from React Native Paper
import {useNavigation} from '@react-navigation/native'; // Import useNavigation for navigation
// import { ScrollView } from 'react-native-gesture-handler';

const Recipe = () => {
  const navigation = useNavigation(); // Hook for navigation

  return (

    <View style={{flex: 1, backgroundColor: 'black'}}>
          {/* <ScrollView> */}

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
          onPress={() => navigation.navigate('HomeScreenIndex')}
          style={{marginHorizontal: 20}}
        />
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontSize: 18,
            fontWeight: '500',
            marginHorizontal: 30,
          }}>
          RECIPE OVERVIEW
        </Text>
      </View>
      <Text
        style={{
          color: '#767676',
          fontSize: 22,
          textAlign: 'center',
          marginTop: 30,
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
    marginTop: 20,
    // width: '100%',
  }}
>
  <IconButton
    icon="arrow-left-circle-outline"
    color="white"
    size={30}
    onPress={() => navigation.navigate('HomeScreenIndex')}
    style={{marginHorizontal: 20}}
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
    icon="arrow-right-circle-outline" // Right arrow icon
    color="white"
    size={30}
    onPress={() => {
    }}
    style={{marginHorizontal: 20}}
  />
</View>
<View>
  <Text style={{fontSize:22,fontWeight:"500",alignSelf:"center",color:"white",marginTop:20}}>CACIO E PEPE</Text>
  <Text style={{fontSize:14,fontWeight:"300",alignSelf:"center",color:"white",marginTop:0}}>CACIO E PEPE</Text>

</View>
<View style={{flexDirection: 'row', justifyContent: 'space-between',marginHorizontal:30,marginTop:20}}>
  {/* Grocery List Button */}
  <TouchableOpacity
    onPress={() => {
      navigation.navigate("grocerylist")    
    }} style={{borderRadius:20,justifyContent:"center",borderWidth:2,borderColor:"#C5D7D7",backgroundColor:"#C5D7D7",height:50,width:160}}>
    <Text style={{color: 'white',fontWeight:"400", fontSize: 17,alignSelf:"center"}}>Grocery List</Text>
  </TouchableOpacity>

  {/* Instruction Button */}
  <TouchableOpacity
    onPress={() => {
navigation.navigate("Instruction")    }}
    style={{borderRadius:20,borderWidth:2,borderColor:"#C5D7D7",backgroundColor:"#C5D7D7",height:50,width:160,justifyContent:"center"}}
    >
    <Text style={{color: 'white',fontWeight:"400", fontSize: 17,alignSelf:"center"}}>Instruction</Text>
  </TouchableOpacity>
</View>
<View style={{ justifyContent: "flex-start", margin: 20 }}>
  <Text style={{ color: 'white', fontWeight: "500", fontSize: 30 }}>Recipe:</Text>
  <Text style={{ color: 'white', fontWeight: "400", fontSize: 15 }}>
    • 4 tablespoons (60ml) extra-virgin {'\n'} olive oil, divided {'\n'}
    • 1 teaspoon coarsely ground black {'\n'} pepper, to taste{'\n'}
    • Kosher salt, to taste{'\n'}
    • 1/2 pound (225g) spaghetti{'\n'}
    • 2 tablespoons (30g) unsalted butter{'\n'}
    • 2 ounces Pecorino Romano cheese
  </Text>
</View>

{/* </ScrollView> */}

    </View>
  );
};

export default Recipe;