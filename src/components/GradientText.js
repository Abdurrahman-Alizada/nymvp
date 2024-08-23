import { Text } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const GradientButton = ({style,text, textStyle}) => {
  return (
<LinearGradient colors={['#C5D7D7', '#839898']} 
    style={style} 
    start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}>
        <Text style={textStyle}> {text} </Text>
 </LinearGradient>
  )
}

export default GradientButton