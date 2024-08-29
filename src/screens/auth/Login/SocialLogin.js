import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'; // Facebook icon
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Google icon
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Apple icon
import GradientIconButton from '../../../components/GradientIconButton';
import { useNavigation } from '@react-navigation/native';

const SocialLogin = () => {
    const navigation = useNavigation();
    return (
        <View style={{ alignItems: 'center', marginVertical: 60 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '80%' }}>
                <Divider style={{ flex: 1, height: 1, backgroundColor: '#888' }} />
                <Text style={{ fontFamily: "AnekBangla-Regular", marginHorizontal: 10, color: '#888' }}>or Log in with</Text>
                <Divider style={{ flex: 1, height: 1, backgroundColor: '#888' }} />
            </View>

            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                <View style={{
                    shadowColor: '#fff',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginHorizontal: 10,
                    borderWidth: 1,
                    borderColor: '#555',
                    width: 60,
                    height: 60,
                    borderRadius: 10,
                    backgroundColor: 'transparent',

                }}>
                    <TouchableOpacity style={{}}>
                        <Image style={{ height: 30, width: 30 }} source={require("../../../assets/facebook.png")} />
                    </TouchableOpacity>
                </View>

                <View style={{
                    shadowColor: '#fff',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginHorizontal: 10,
                    borderWidth: 1,
                    borderColor: '#555',
                    width: 60,
                    height: 60,
                    borderRadius: 10,
                    backgroundColor: 'transparent',

                }}>
                    <TouchableOpacity style={{}}>
                        <Image style={{ height: 30, width: 30 }} source={require("../../../assets/google.png")} />
                    </TouchableOpacity>
                </View>

                <View style={{
                    shadowColor: '#fff',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginHorizontal: 10,
                    borderWidth: 1,
                    borderColor: '#555',
                    width: 60,
                    height: 60,
                    borderRadius: 10,
                    backgroundColor: 'transparent',

                }}>
                    <TouchableOpacity style={{}}>
                        <Image style={{ height: 30, width: 30 }} source={require("../../../assets/apple.png")} />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate({ name: "HomeStack", params: { screen: 'TermsAndConditions' } })}
            >

                <Text style={{ color: "#fff", marginTop: 30, fontSize: 14, textTransform: "uppercase" }}>Terms and conditions</Text>
            </TouchableOpacity>
        </View>
    );
};

const iconButtonStyle = {

};

export default SocialLogin;
