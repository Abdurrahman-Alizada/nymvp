import { View, Text } from 'react-native'
import React from 'react'
import GeneralAppbar from '../../../components/Appbars/GeneralAppbar'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const HomeScreenIndex = () => {
  const navigation = useNavigation()
  return (
    <View>
      <GeneralAppbar title={"Home screen"} />
      <Text>HomeScreenIndex</Text>
      <Button
        onPress={() => navigation.navigate({ name: "HomeStack", params:{screen:"Recipi"}  })}
      >Go to Recipe page</Button>
    </View>
  )
}

export default HomeScreenIndex