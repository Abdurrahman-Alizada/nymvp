import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const ScreenGradientBackground = ({ children }) => {
    return (
        <LinearGradient
            colors={['#1D1D1D', '#050505']}
            style={{ flex: 1 }}
            start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}>
            <StatusBar backgroundColor={"transparent"} barStyle={"light-content"} />
            {children}
        </LinearGradient>
    )
}

export default ScreenGradientBackground