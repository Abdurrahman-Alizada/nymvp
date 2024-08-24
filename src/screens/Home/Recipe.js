import { View, Text } from 'react-native'
import React from 'react'
import GeneralAppbar from '../../components/Appbars/GeneralAppbar'

const Recipe = () => {
  return (
    <View >
      <GeneralAppbar title={"Recipi"} />
      <Text>Recipe</Text>
    </View>
  )
}

export default Recipe