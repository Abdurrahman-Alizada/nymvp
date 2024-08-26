// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
// import { TouchableRipple, Checkbox, Button } from 'react-native-paper';

// export default function GroceryList({ navigation }) {
//   const [checkedItems, setCheckedItems] = useState({});

//   const foodItems = [
//     { label: 'Pasta', value: 'pasta' },
//     { label: 'Parmesan', value: 'pizza' },
//     { label: 'Heavy Cream', value: 'burger' },
//     { label: 'Mushrooms', value: 'salad' },
//     { label: 'White wine', value: 'sushi' },
//     { label: 'Burrata cheese', value: 'sushi' },
//   ];

//   const handleCheckboxChange = (value) => {
//     setCheckedItems((prev) => ({
//       ...prev,
//       [value]: !prev[value],
//     }));
//   };

//   return (
//     <View style={{ flex: 1, backgroundColor: 'black' }}>
//       <View style={{ justifyContent: 'center', alignItems: 'center' }}>
//         <Image
//           source={require('../../assets/logob.png')}
//           style={{
//             height: '12%',
//             width: '60%',
//             resizeMode: 'center',
//             marginTop: 45,
//           }}
//         />
//       </View>

//       <View style={styles.headerContainer}>
//         <Text style={styles.headerText}>GROCERY LIST</Text>
//         <View style={styles.weeklyContainer}>
//           <Text style={styles.allItemsText}>All Items</Text>
//           <Button
//             mode="contained"
//             style={styles.dropdownButton}
//             contentStyle={styles.dropdownButtonContent}
//             onPress={() => { /* Add functionality for dropdown */ }}
//           >
//             Weekly
//           </Button>
//         </View>
//       </View>

//       <ScrollView contentContainerStyle={{ padding: 20 }}>
//         {foodItems.map((item) => (
//           <TouchableRipple
//             key={item.value}
//             onPress={() => handleCheckboxChange(item.value)}
//             style={styles.optionContainer}
//           >
//             <View style={styles.optionContent}>
//               <Text style={styles.optionText}>{item.label}</Text>
//               <Checkbox
//                 status={checkedItems[item.value] ? 'checked' : 'unchecked'}
//                 onPress={() => handleCheckboxChange(item.value)}
//                 color="lightgrey"
//                 uncheckedColor="lightgrey"
//               />
//             </View>
//           </TouchableRipple>
//         ))}
//         <View style={{ justifyContent: "center", alignSelf: "center", marginTop: -10 }}>
//           <TouchableOpacity
//             onPress={() => {
//               navigation.navigate("grocerylist");
//             }}
//             style={{
//               margin: 20,
//               height: 50, // Set height
//               width: 320, // Set width
//               borderRadius: 20,
//               justifyContent: "center",
//               borderWidth: 2,
//               borderColor: "#C5D7D7",
//               backgroundColor: "#C5D7D7",
//             //   marginTop:-10,

//             }}
//           >
//             <Text style={{ color: 'white', fontWeight: "400", fontSize: 17, alignSelf: "center" }}>Add to list</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             onPress={() => {
//               navigation.navigate("Instruction");
//             }}
//             style={{
//               margin: 20,
//               height: 50, // Set height
//               width: 320, // Set width
//               borderRadius: 20,
//               borderWidth: 2,
//               borderColor: "#C5D7D7",
//               backgroundColor: "black",
//               justifyContent: "center",
//               marginTop:-10,
//             }}
//           >
//             <Text style={{ color: 'white', fontWeight: "400", fontSize: 17, alignSelf: "center" }}>Send me my list</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   headerContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginVertical: -10,
//   },
//   headerText: {
//     color: 'white',
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   weeklyContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between', // Align items to the ends
//     alignItems: 'center',
//     width: '100%', // Full width
//     paddingHorizontal: 20,
//   },
//   allItemsText: {
//     color: 'white',
//     fontSize: 16,
//     marginRight: 10, // Spacing between text and button
//   },
//   dropdownButton: {
//     backgroundColor: '#444',
//     borderRadius: 8,
//   },
//   dropdownButtonContent: {
//     height:40,
//   },
//   optionContainer: {
//     backgroundColor: '#333',
//     padding: 10,
//     marginBottom: 10,
//     borderRadius: 8,
//   },
//   optionContent: {
//     flexDirection: 'row',
//     justifyContent: 'space-between', // Align items to the ends
//     alignItems: 'center',
//   },
//   optionText: {
//     color: 'white',
//     fontSize: 16,
//   },
// });
import React, { useState, useCallback, useMemo, useRef } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Button } from 'react-native';
import { TouchableRipple, Checkbox } from 'react-native-paper';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

export default function GroceryList({ navigation }) {
  const [checkedItems, setCheckedItems] = useState({});
  const bottomSheetModalRef = useRef(null); // You can remove <BottomSheetModal> type if not using TypeScript
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  const foodItems = [
    { label: 'Pasta', value: 'pasta' },
    { label: 'Parmesan', value: 'pizza' },
    { label: 'Heavy Cream', value: 'burger' },
    { label: 'Mushrooms', value: 'salad' },
    { label: 'White wine', value: 'sushi' },
    { label: 'Burrata cheese', value: 'sushi' },
  ];

  const handleCheckboxChange = (value) => {
    setCheckedItems((prev) => ({
      ...prev,
      [value]: !prev[value],
    }));
  };

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <BottomSheetModalProvider>
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={require('../../assets/logob.png')}
            style={{
              height: '12%',
              width: '60%',
              resizeMode: 'center',
              marginTop: 45,
            }}
          />
        </View>

        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>GROCERY LIST</Text>
          <View style={styles.weeklyContainer}>
            <Text style={styles.allItemsText}>All Items</Text>
            <Button
              title="Weekly"
              color="black"
              onPress={handlePresentModalPress}
            />
          </View>
        </View>

        <ScrollView contentContainerStyle={{ padding: 20 }}>
          {foodItems.map((item) => (
            <TouchableRipple
              key={item.value}
              onPress={() => handleCheckboxChange(item.value)}
              style={styles.optionContainer}
            >
              <View style={styles.optionContent}>
                <Text style={styles.optionText}>{item.label}</Text>
                <Checkbox
                  status={checkedItems[item.value] ? 'checked' : 'unchecked'}
                  onPress={() => handleCheckboxChange(item.value)}
                  color="lightgrey"
                  uncheckedColor="lightgrey"
                />
              </View>
            </TouchableRipple>
          ))}
          <View style={{ justifyContent: "center", alignSelf: "center", marginTop: -10 }}>
            <TouchableOpacity
              onPress={handlePresentModalPress}
              style={{
                margin: 20,
                height: 50,
                width: 320,
                borderRadius: 20,
                justifyContent: "center",
                borderWidth: 2,
                borderColor: "#C5D7D7",
                backgroundColor: "#C5D7D7",
              }}
            >
              <Text style={{ color: 'white', fontWeight: "400", fontSize: 17, alignSelf: "center" }}>Add to list</Text>
            </TouchableOpacity>

            <TouchableOpacity
  onPress={() => {
    navigation.navigate("profileoveriew"); // Navigate to the Instruction screen
  }}
  style={{
    margin: 20,
    height: 50,
    width: 320,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#C5D7D7",
    backgroundColor: "black",
    justifyContent: "center",
    marginTop: -10,
  }}
>
  <Text style={{ color: 'white', fontWeight: "400", fontSize: 17, alignSelf: "center" }}>
    Send me my list
  </Text>
</TouchableOpacity>

          </View>
        </ScrollView>

        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <BottomSheetView style={styles.contentContainer}>
            <Text style={{fontSize:17,fontWeight:"400",color:"#FFFFFF",alignSelf:"center"}}>Choose Contact Method</Text>
            <View style={{ flexDirection: "row",justifyContent:"center", width: '100%',margin:30 }}>
  <Image 
    style={{ height: 75, width: 75 ,marginRight: 30}} 
    source={require("../../assets/call.png")} 
  />

  <Image 
    style={{ height: 65, width: 65,marginRight: 30 }} 
    source={require("../../assets/email.png")} 
  />
</View>
<View style={{justifyContent:"center"}}>

    <Text style={{fontSize:15,fontWeight:"400",alignSelf:"center",color:"white",marginRight:130,marginTop:-22}}>Message me</Text>
    <Text style={{fontSize:15,fontWeight:"400",alignSelf:"center",color:"#FFFFFF",marginTop:-22,marginLeft:70}}>Email me</Text>

</View>

          </BottomSheetView>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: -10,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  weeklyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  allItemsText: {
    color: 'white',
    fontSize: 16,
    marginRight: 10,
  },
  optionContainer: {
    backgroundColor: '#333',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  optionContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionText: {
    color: 'white',
    fontSize: 16,
    
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:"black",
  },
});
