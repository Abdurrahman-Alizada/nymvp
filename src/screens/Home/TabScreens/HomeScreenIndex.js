// import React from 'react';
// import {View, Text, Image, TouchableOpacity} from 'react-native';

// const HomeScreenIndex = () => {
//   const itineraryData = [
//     {day: 'SUN', date: '12'},
//     {day: 'MON', date: '13'},
//     {day: 'TUE', date: '14'},
//     {day: 'WED', date: '15'},
//     {day: 'THU', date: '16'},
//     {day: 'FRI', date: '17'},
//     {day: 'SAT', date: '18'},
//   ];

//   return (
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: 'black',
//         alignItems: 'center',
//         padding: 20,
//       }}>
//       {/* Logo Image */}
//       <Image
//         source={require('../../../assets/logob.png')}
//         style={{
//           height: '4%',
//           width: '60%',
//           resizeMode: 'center',
//           marginTop: 60,
//         }}
//       />

//       {/* Greeting Section */}
//       <View style={{marginTop: 40}}>
//         <Text
//           style={{
//             fontSize: 16,
//             alignSelf: 'flex-start',
//             color: 'grey',
//             left: 40,
//             top: 30,
//           }}>
//           Good Morning,
//         </Text>
//         <Text
//           style={{
//             fontSize: 26,
//             alignSelf: 'flex-start',
//             color: 'white',
//             fontWeight: '700',
//             left: 40,
//             top: 30,
//           }}>
//           Axel
//         </Text>
//         <Image
//           source={require('../../../assets/profilepic.png')}
//           style={{
//             width: 60,
//             height: 60,
//             borderRadius: 45,
//             borderWidth: 2,
//             borderColor: '#4BC1C8',
//             marginTop: -40,
//             right: -340,
//           }}
//         />
//         <Text
//           style={{
//             fontSize: 20,
//             alignSelf: 'flex-start',
//             color: 'white',
//             fontWeight: '600',
//             left: -110,
//             top: 50,
//           }}>
//           YOUR ITINERARY
//         </Text>

//         {/* Circular Date Buttons */}
//         <View style={{flexDirection: 'row', marginTop: 30, borderWidth: 3,borderColor:"black",height:"30%",width:"70%"}}>
//           {itineraryData.map((item, index) => (
//             <TouchableOpacity
//               key={index}
//               style={{
//                 backgroundColor: 'white',
//                 borderRadius: 30,
//                 width: 50,
//                 height: 50,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 marginHorizontal: 5,
//               }}>
//               <Text style={{color: 'black', fontSize: 12, fontWeight: '400'}}>
//                 {item.day}
//               </Text>
//               <Text style={{color: 'black', fontSize: 18, fontWeight: '600'}}>
//                 {item.date}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </View>
//     </View>
//   );
// };
import React, {useRef} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {Card} from 'react-native-paper';
import Carousel from 'react-native-reanimated-carousel'; // Import the carousel

const HomeScreenIndex = () => {
  const scrollViewRef = useRef(null);

  const itineraryData = [
    {day: 'SUN', date: '12'},
    {day: 'MON', date: '13'},
    {day: 'TUE', date: '14'},
    {day: 'WED', date: '15'},
    {day: 'THU', date: '16'},
    {day: 'FRI', date: '17'},
    {day: 'SAT', date: '18'},
  ];

  const workoutData = [
    {
      day: 'Monday',
      routine: 'Arm Day',
      image: require('../../../assets/Arms.png'),
    },
    {
      day: 'Tuesday',
      routine: 'Leg Day',
      image: require('../../../assets/Legs.png'),
    },
    {
      day: 'Wednesday',
      routine: 'Cardio',
      image: require('../../../assets/Arms.png'),
    },
    {
      day: 'Thursday',
      routine: 'Back Day',
      image: require('../../../assets/Legs.png'),
    },
    {
      day: 'Friday',
      routine: 'Chest Day',
      image: require('../../../assets/Arms.png'),
    },
  ];

  const images = [
    require('../../../assets/breakfast.png'),
    require('../../../assets/dinner.png'),
    require('../../../assets/breakfast.png'),
    require('../../../assets/dinner.png'),
    require('../../../assets/dinner.png'),
  ];

  const scrollRight = () => {
    scrollViewRef.current.scrollTo({
      x: scrollViewRef.current.contentOffset.x + 100, // Adjust scroll distance
      animated: true,
    });
  };

  const scrollLeft = () => {
    scrollViewRef.current.scrollTo({
      x: scrollViewRef.current.contentOffset.x - 100, // Adjust scroll distance
      animated: true,
    });
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: 'black',
      }}>
      <View style={{width: '100%'}}>
        <Image
          source={require('../../../assets/logob.png')}
          style={{
            height: 35,
            width: 170,
            resizeMode: 'contain',
            marginTop: 60,
            alignSelf: 'center',
          }}
        />
      </View>

      {/* Greeting Section */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: '5%',
          width: '100%',
          marginTop: 20,
        }}>
        <View>
          <Text style={{color: '#fff'}}>Good Morning</Text>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>
            Axel
          </Text>
        </View>
        <View>
          <Image source={require('../../../assets/profilepic.png')} />
        </View>
      </View>

      <View style={{padding: '5%'}}>
        <Text
          style={{
            fontSize: 20,
            alignSelf: 'flex-start',
            color: 'white',
            fontWeight: '600',
            textAlign: 'left',
          }}>
          YOUR ITINERARY
        </Text>
        <Card
          elevation={3}
          style={{backgroundColor: '#000'}}
          contentStyle={{flexDirection: 'row', marginTop: '5%'}}>
          {itineraryData.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{
                backgroundColor: 'white',
                borderRadius: 30,
                width: 50,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 5,
              }}>
              <Text style={{color: 'black', fontSize: 12, fontWeight: '400'}}>
                {item.day}
              </Text>
              <Text style={{color: 'black', fontSize: 18, fontWeight: '600'}}>
                {item.date}
              </Text>
            </TouchableOpacity>
          ))}
        </Card>
      </View>
      {/* react-native-reanimated-carousel view */}
      <View style={{ marginTop: 20, height: 200 }}>
        <Carousel
          loop
          width={300} // Adjust width as needed
          height={200} // Adjust height as needed
          autoPlay={true}
          data={images}
          renderItem={({ item }) => (
            <View style={{ borderRadius: 10, overflow: 'hidden' }}>
              <Image source={item} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
            </View>
          )}
        />
      </View>

      <View style={{marginTop: 10}}>
        {/* Circular Date Buttons */}
        


        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            top: 20,
            color: 'white',
            left: 40,
          }}>
          WORKOUT
        </Text>

        {/* Workout Details */}
        <View style={{padding: '5%', margin: '5%'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text
                style={{
                  color: '#fff',
                  fontWeight: '700',
                  fontSize: 14,
                  letterSpacing: 2,
                  lineHeight: 16,
                }}>
                Monday - Arms
              </Text>
              <Text style={{color: '#fff', fontSize: 12}}>Pull ups x5</Text>
              <Text style={{color: '#fff', fontSize: 12}}>Rope puchdowns</Text>
              <Text style={{color: '#fff', fontSize: 12}}>Preachers curl</Text>

              <Text style={{color: '#fff', fontSize: 12}}>Hammer curls</Text>

              <Text style={{color: '#fff', fontSize: 12}}>Inclined curls</Text>
            </View>
            <View>
              <Image
                style={{width: 109, height: 108}}
                source={require('../../../assets/Arms.png')}
              />
            </View>
          </View>
        </View>

        <View style={{padding: '5%', margin: '5%'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text
                style={{
                  color: '#fff',
                  fontWeight: '700',
                  fontSize: 14,
                  letterSpacing: 2,
                  lineHeight: 16,
                }}>
                Monday - Arms
              </Text>
              <Text style={{color: '#fff', fontSize: 12}}>Pull ups x5</Text>
              <Text style={{color: '#fff', fontSize: 12}}>Rope puchdowns</Text>
              <Text style={{color: '#fff', fontSize: 12}}>Preachers curl</Text>

              <Text style={{color: '#fff', fontSize: 12}}>Hammer curls</Text>

              <Text style={{color: '#fff', fontSize: 12}}>Inclined curls</Text>
            </View>
            <View>
              <Image
                style={{width: 109, height: 108}}
                source={require('../../../assets/Arms.png')}
              />
            </View>
          </View>
        </View>

      </View>

    </ScrollView>
  );
};

export default HomeScreenIndex;
