import { Appbar, Text, useTheme, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Image, StatusBar, TouchableOpacity, View } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../../themeContext';
import { useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

export default function AuthAbbar({ title }) {
  const navigation = useNavigation();
  const theme = useTheme();

  const { toggleTheme, isThemeDark } = useContext(ThemeContext);

  return (
    <LinearGradient
      colors={['#1D1D1D', '#050505']}
      start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}>

      <StatusBar
        barStyle={'light-content'}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: "center"
        }}>
       
          <Image
            style={{
              width: 150,
              height: 150,
              resizeMode: "contain"
            }}
            source={require('../../assets/logob.png')}
          />
        
      </View>

    </LinearGradient>
  );
}
