import { Viev, TouchableOpacity, Image, View, StatusBar } from 'react-native'
import React from 'react'
import { Text, useTheme } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const WorkoutsScreensAppbar = ({ isMain, title }) => {
  const navigation = useNavigation()
  const theme = useTheme()
  return (
    <View style={{marginTop:"5%", flexDirection: "row",  alignItems: "flex-end", justifyContent: isMain ? "center" : "space-between", paddingHorizontal: "5%" }}>
      {!isMain &&
        <TouchableOpacity onPress={() => navigation.goBack()}>

          <Image
            style={{
              width: 46,
              height: 46,
              resizeMode: "contain"
            }}
            source={require('../../assets/arrowleft.png')}
          />
        </TouchableOpacity>
      }
      <View style={{ justifyContent: "center", alignItems: "center", marginLeft:!isMain ? -30:0 }}>

        <Image
          source={require('../../assets/logob.png')}
          style={{
            height: 33,
            width: 162,
            resizeMode: 'contain',
            marginTop: 20,
            // alignSelf: 'center',
          }}
        />
        <Text style={{ color: "#fff", marginTop: 7, fontSize:18,letterSpacing:3 }}>{title}</Text>
      </View>
      <View></View>
    </View>
  )
}

export default WorkoutsScreensAppbar