import { View, StatusBar, Image } from 'react-native'
import React from 'react'
import WorkoutsScreensAppbar from '../../../components/Appbars/WorkoutsScreensAppbar'
import { useTheme, Text } from 'react-native-paper'

const Profile = () => {
    const theme = useTheme()
    return (
        <View style={{ flex: 1, paddingVertical: "3%" }}>
            <WorkoutsScreensAppbar isMain={true} title={"PROFILE OVERVIEW"} />
            <Text style={{ textAlign: "center", marginTop: "5%", fontSize: 18 }}>Choose your plan</Text>
            <Image
                style={{
                    width: 100,
                    height: 100,
                    marginRight: 5,
                    resizeMode: "contain",
                    alignSelf:"center",
                    marginTop:14
                }}
                source={require('../../../assets/avatar.png')}
            />
        </View>
    )
}

export default Profile