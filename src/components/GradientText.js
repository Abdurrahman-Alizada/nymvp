import { StyleSheet, Text } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const GradientText = ({ style, text, textStyle }) => {
  return (
    <LinearGradient
      start={{ x: 0.0, y: 0.0 }}
      end={{ x: 0.0, y: 1.0 }}
      locations={[0.0, 1.0]}
      colors={['#ffffff40', '#fffffff5']} //<-- last 2 chars from color control the opacity
      useViewFrame={false}
      style={styles.gradient}
    />
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 14,
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
export default GradientText