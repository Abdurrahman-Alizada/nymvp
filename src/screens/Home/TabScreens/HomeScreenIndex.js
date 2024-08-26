
import React, {useRef} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView, Pressable} from 'react-native';
import {Card} from 'react-native-paper';
import Carousel from 'react-native-reanimated-carousel'; // Import the carousel
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const HomeScreenIndex = () => {
  const scrollViewRef = useRef(null);
  const navigation = useNavigation(); // Get the navigation object

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
      <View style={{ marginTop: 20, height: 200 }}>
        <Carousel
          loop
          width={300} // Adjust width as needed
          height={200} // Adjust height as needed
          autoPlay={true}
          data={images}
          renderItem={({ item }) => (

            
            <Pressable 
  style={{ borderRadius: 10, overflow: 'hidden' }}  
  onPress={() => navigation.navigate("Recipe")}
>
  <Image source={item} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
</Pressable>
          )}
        />
      </View>

      <View style={{marginTop: 10}}>
        


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
