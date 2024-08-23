import { Text } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const GradientIconButton = ({style,children}) => {
  return (
<LinearGradient colors={['#C5D7D7', '#839898']} 
    style={style} 
    start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}>
        {children}
 </LinearGradient>
  )
}

export default GradientIconButton