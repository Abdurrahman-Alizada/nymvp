import { View, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import WorkoutsScreensAppbar from '../../../components/Appbars/WorkoutsScreensAppbar'
import { useTheme, Text, Card } from 'react-native-paper'

const Profile = () => {
    const theme = useTheme()
    return (
        <View style={{ flex: 1, paddingVertical: "3%", backgroundColor: "#1C1C1C" }}>
            <WorkoutsScreensAppbar isMain={true} title={"PROFILE OVERVIEW"} />
            <Text style={{ 
                textAlign: "center", 
                marginTop: "5%", 
                fontSize: 18, 
                color: theme.colors.text 
            }}>Choose your plan</Text>
            <Image
                style={{
                    width: 100,
                    height: 100,
                    marginRight: 5,
                    resizeMode: "contain",
                    alignSelf: "center",
                    marginTop: 14,
                    borderRadius: 50,
                }}
                source={require('../../../assets/avatar.png')}
            />
            <Text style={{ 
                textAlign: "center", 
                marginTop: 10, 
                fontSize: 16, 
                color: "#D0D0D0", 
                fontFamily: "FuzzyBubble-Regular" 
            }}>sven-ingvar</Text>
            
            <Card style={{ 
                marginHorizontal: 20, 
                marginTop: 20, 
                borderRadius: 10, 
                backgroundColor: "#2E2E2E",
                paddingVertical: 20,
                paddingHorizontal: 10,
            }}>
                <View style={{ 
                    alignItems: 'center', 
                    backgroundColor: "#A3D4C2", 
                    borderRadius: 10, 
                    padding: 10,
                    marginBottom: 15,
                }}>
                    <Text style={{ fontSize: 24, color: "#FFFFFF", fontWeight: "bold" }}>Personal</Text>
                    <Text style={{ fontSize: 16, color: "#FFFFFF", marginTop: 5 }}>$9.99 monthly</Text>
                </View>
                <Text style={{ color: "#FFFFFF", fontSize: 14, lineHeight: 22 }}>
                    • Unlimited <Text style={{ fontWeight: 'bold' }}>monthly</Text> meal generations{"\n"}
                    • Auto-generation{"\n"}
                    • Recipes by email{"\n"}
                    • Access to members area{"\n"}
                    • Profile overview{"\n"}
                    • Monthly overview{"\n"}
                    • On-website-recipes{"\n"}
                    • Cooking instructions{"\n"}
                    • Advanced profile{"\n"}
                    • Choose mission/goal
                </Text>
            </Card>
            
            <TouchableOpacity 
                style={{ 
                    alignSelf: "center", 
                    backgroundColor: "#A3D4C2", 
                    borderRadius: 10, 
                    paddingVertical: 10, 
                    paddingHorizontal: 40, 
                    marginTop: 20 
                }}
                onPress={() => {/* Handle button press here */}}>
                <Text style={{ color: "#FFFFFF", fontSize: 16 }}>Get Started</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Profile;
