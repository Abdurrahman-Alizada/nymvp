import { Viev, TouchableOpacity, Image, View } from 'react-native'
import React from 'react'
import { Text } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const WorkoutsScreensAppbar = ({isMain, title}) => {
  const navigation = useNavigation()
  return (
    <View style={{ flexDirection: "row", alignItems: "flex-end", justifyContent: isMain ? "center" : "space-between", padding: "5%" }}>
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
      <View style={{ justifyContent: "center", alignItems: "center" }}>

        <Image
          source={require('../../assets/logob.png')}
          style={{
            height: 33,
            width: 162,
            resizeMode: 'contain',
            // marginTop: 40,
            // alignSelf: 'center',
          }}
        />
        <Text style={{ color: "#fff" }}>{title}</Text>
      </View>
      <View></View>
    </View>
  )
}

export default WorkoutsScreensAppbar