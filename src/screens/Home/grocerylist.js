import React, { useState, useCallback, useMemo, useRef } from 'react';
import { StyleSheet, View, Image, ScrollView, TouchableOpacity, Button } from 'react-native';
import { TouchableRipple,Text, Checkbox, Divider } from 'react-native-paper';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import WorkoutsScreensAppbar from '../../components/Appbars/WorkoutsScreensAppbar';
import GradientButton from '../../components/GradientButton';
import ScreenGradientBackground from '../../components/ScreenGradientBackground';

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
    <ScreenGradientBackground>
    <BottomSheetModalProvider>
      <View style={{ flex: 1, paddingTop: "10%" }}>
        <WorkoutsScreensAppbar isMain={false} title={"Grocery LIST"} />
        <ScrollView contentContainerStyle={{ padding: 20 }}>
          <View style={{ borderColor: "#A7A7A7", borderWidth: 2, paddingHorizontal: "3%", paddingBottom: "15%", paddingTop: "3%", borderRadius: 20 }}>
            <View style={{ paddingHorizontal: "4%", paddingVertical: "2%" }}>
              <Text style={{ color: "#fff", fontSize: 18 }}>All items:</Text>
            </View>
            {foodItems.map((item, index) => (
              <TouchableOpacity>
                <Checkbox.Item color='#fff' key={index} label={item.label} status="checked" />
                <Divider style={{ backgroundColor: "#414141", height: 2 }} />
              </TouchableOpacity>

              // <TouchableRipple
              //   key={index}
              //   onPress={() => handleCheckboxChange(item.value)}
              //   style={styles.optionContainer}
              // >
              //   <View style={styles.optionContent}>
              //     <Text style={styles.optionText}>{item.label}</Text>
              //     <Checkbox
              //       status={checkedItems[item.value] ? 'checked' : 'unchecked'}
              //       onPress={() => handleCheckboxChange(item.value)}
              //       color="lightgrey"
              //       uncheckedColor="lightgrey"
              //     />
              //   </View>
              // </TouchableRipple>
            ))}
          </View>

          <View style={{ justifyContent: "center", alignSelf: "center", marginTop: "5%" }}>
            <TouchableOpacity
              onPress={handlePresentModalPress}
              style={{
                // margin: 20,
                alignSelf: "center",
                height: 50,
                width: 320,
                borderRadius: 20,
                justifyContent: "center",
                borderWidth: 2,
              }}
            >
              <GradientButton
                textStyle={{ color: '#fff', fontSize: 20, textAlign: "center" }}
                style={{
                  borderRadius: 20,
                  width: '100%',
                  height: 50,
                  justifyContent: 'center',
                }}
                text={'Add to list'}
              />

            </TouchableOpacity>

            <TouchableOpacity
              onPress={handlePresentModalPress}
              style={{
                height: 50,
                width: 320,
                borderRadius: 20,
                borderWidth: 2,
                borderColor: "#C5D7D7",
                backgroundColor: "black",
                justifyContent: "center",
                marginTop: "5%",
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
          handleStyle={{backgroundColor:"#1C1C1C",color:"#414141",}}
          handleIndicatorStyle={{backgroundColor:"#414141",width:"20%"}}
        >
          <BottomSheetView style={styles.contentContainer}>
            <Text style={{ fontSize: 17, fontWeight: "400",marginTop:48, color: "#FFFFFF", alignSelf: "center" }}>Choose Contact Method</Text>
            <View style={{ flexDirection: "row", justifyContent: "center", width: '100%', margin: 30 }}>
              <Image
                style={{ height: 75, width: 75, marginRight: 30 }}
                source={require("../../assets/call.png")}
              />

              <Image
                style={{ height: 65, width: 65, marginRight: 30 }}
                source={require("../../assets/email.png")}
              />
            </View>
            <View style={{ justifyContent: "center" }}>

              <Text style={{ fontSize: 15, fontWeight: "400", alignSelf: "center", color: "white", marginRight: 130, marginTop: -22 }}>Message me</Text>
              <Text style={{ fontSize: 15, fontWeight: "400", alignSelf: "center", color: "#FFFFFF", marginTop: -22, marginLeft: 70 }}>Email me</Text>

            </View>

          </BottomSheetView>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
    </ScreenGradientBackground>
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
    backgroundColor: "#1C1C1C",
  },
});
