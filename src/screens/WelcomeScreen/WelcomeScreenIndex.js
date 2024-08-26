// import { useNavigation } from '@react-navigation/native';
// import React, { useEffect, useRef } from 'react';
// import { View, Text, ImageBackground, StatusBar, Animated, TouchableOpacity } from 'react-native';
// import { Button, useTheme } from 'react-native-paper';
// import GradientButton from '../../components/GradientButton';

// const WelcomeScreenIndex = () => {
//   const theme = useTheme()
//   const navigation = useNavigation()
//   return (
//     <ImageBackground
//       source={require("../../assets/bakgrund.png")}
//       style={{
//         flex: 1,
//         resizeMode: 'cover',
//         justifyContent: 'center',
//         width: '100%',
//         height: '100%',
//       }}
//     >
//       <StatusBar translucent backgroundColor="transparent" />

//       <View
//         style={{
//           flex: 1,
//           backgroundColor: 'rgba(0, 0, 0, 0.5)',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//       >
//         <Text style={{ fontSize: 18, color: '#fff', fontFamily: 'AnekBangla' }}>
//           WELCOME TO
//         </Text>
//         <Text style={{ fontSize: 30, color: '#fff', fontFamily: 'Modak-Regular' }}>
//           PREFORMLY
//         </Text>
//         <TouchableOpacity onPress={()=>navigation.navigate({name:"Auth", params:{screen:"Login"}})} style={{ width: "60%", padding: 12, alignItems: "center", marginTop: 10, backgroundColor: theme.colors.primary, borderRadius: 10 }}>
//           <Text style={{ color: "#fff" }}>LOGIN NOW</Text>
//         </TouchableOpacity>
//         {/* <TouchableOpacity onPress={()=>navigation.navigate({name:"Auth", params:{screen:"SignUpwithEmail"}})} style={{width: "60%",}}> */}
//         <TouchableOpacity onPress={()=>navigation.navigate("BottomTabs")} style={{width: "60%",}}>

//         <GradientButton
//           textStyle={{color:"#fff", letterSpacing:3}}
//           style={{
//              padding: 12, alignItems: "center", marginTop: 10, borderRadius: 10
//           }} text={"REGISTER NOW"} />
//         </TouchableOpacity>
//       </View>
//     </ImageBackground>
//   );
// };

// export default WelcomeScreenIndex;




import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { View, Text, ImageBackground, StatusBar, Animated, TouchableOpacity } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import GradientButton from '../../components/GradientButton';

const Onboarding = () => {
  const theme = useTheme()
  const navigation = useNavigation()
  return (
    <ImageBackground
      source={require("../../assets/bakgrund.png")}
      style={{
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <StatusBar translucent backgroundColor="transparent" />

      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 18, color: '#fff', fontFamily: 'AnekBangla' }}>
          WELCOME TO
        </Text>
        <Text style={{ fontSize: 30, color: '#fff', fontFamily: 'Modak-Regular' }}>
          PREFORMLY
        </Text>
        <TouchableOpacity onPress={()=>navigation.navigate({name:"Auth", params:{screen:"Login"}})} style={{ width: "60%", padding: 12, alignItems: "center", marginTop: 10, backgroundColor: theme.colors.primary, borderRadius: 10 }}>
          <Text style={{ color: "#fff" }}>LOGIN NOW</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate({name:"Auth", params:{screen:"SignUpwithEmail"}})} style={{width: "60%",}}>
        {/* <TouchableOpacity onPress={()=>navigation.navigate("BottomTabs")} style={{width: "60%",}}> */}

        <GradientButton
          textStyle={{color:"#fff", letterSpacing:3}}
          style={{
             padding: 12, alignItems: "center", marginTop: 10, borderRadius: 10
          }} text={"REGISTER NOW"} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Onboarding;