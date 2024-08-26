import React, { useState, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import Carousel from 'react-native-reanimated-carousel';
import { width } from '../../../GlobalStyles'; // Assuming this provides the screen width

const HomeScreenIndex = () => {
  const [isFast, setIsFast] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isPagingEnabled, setIsPagingEnabled] = useState(true);
  const carouselRef = useRef(null);

  const itineraryData = [
    { day: 'SUN', date: '12' },
    { day: 'MON', date: '13' },
    { day: 'TUE', date: '14' },
    { day: 'WED', date: '15' },
    { day: 'THU', date: '16' },
    { day: 'FRI', date: '17' },
    { day: 'SAT', date: '18' },
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

  // Carousel dimensions
  const PAGE_WIDTH = width; // Adjust this if necessary
  const CAROUSEL_WIDTH = PAGE_WIDTH * 0.85;
  const CAROUSEL_HEIGHT = PAGE_WIDTH / 2;

  const handlePrevious = () => {
    carouselRef.current?.scrollTo({ count: -1, animated: true });
  };

  const handleNext = () => {
    carouselRef.current?.scrollTo({ count: 1, animated: true });
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: 'black',
        paddingBottom: '25%',
      }}>
      {/* Logo Section */}
      <View style={{ width: '100%' }}>
        <Image
          source={require('../../../assets/logob.png')}
          style={{
            height: 35,
            width: 170,
            resizeMode: 'contain',
            marginTop: 40,
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
          <Text style={{ color: '#aaa' }}>Good Morning</Text>
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#fff' }}>
            Axel
          </Text>
        </View>
        <View>
          <Image
            source={require('../../../assets/profilepic.png')}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              borderColor: '#333',
              borderWidth: 2,
            }}
          />
        </View>
      </View>

      <View style={{ padding: '5%' }}>
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
          style={{
            backgroundColor: '#333',
            borderRadius: 20,
            padding: 10,
            marginTop: 10,
          }}
          contentStyle={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          {itineraryData.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{
                backgroundColor: index === 2 ? '#5EC8D8' : '#000',
                borderRadius: 25,
                width: 50,
                height: 60,
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 5,
              }}>
              <Text style={{ color: 'white', fontSize: 12, fontWeight: '400' }}>
                {item.day}
              </Text>
              <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>
                {item.date}
              </Text>
            </TouchableOpacity>
          ))}
        </Card>
      </View>

      {/* Meals Carousel */}
      <View style={{ marginTop: 20, height: CAROUSEL_HEIGHT, alignItems: "center", position: 'relative' }}>
        <Carousel
          loop
          width={CAROUSEL_WIDTH}
          height={CAROUSEL_HEIGHT}
          autoPlay={isAutoPlay}
          autoPlayInterval={isFast ? 100 : 2000}
          data={images}
          pagingEnabled={isPagingEnabled}
          ref={carouselRef}
          renderItem={({ item }) => (
            <View style={{ borderRadius: 10, overflow: 'hidden' }}>
              <Image
                source={item}
                style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
              />
            </View>
          )}
        />
        {/* Left Navigation Button */}
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: '50%',
            left: 10,
            transform: [{ translateY: -20 }],
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderRadius: 25,
            padding: 10,
          }}
          onPress={handlePrevious}
        >
          <Text style={{ color: 'white', fontSize: 20 }}>‹</Text>
        </TouchableOpacity>
        {/* Right Navigation Button */}
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: '50%',
            right: 10,
            transform: [{ translateY: -20 }],
            backgroundColor: "#000",
            borderRadius: 25,
            padding: 10,
          }}
          onPress={handleNext}
        >
          <Text style={{ color: 'white', fontSize: 20 }}>›</Text>
        </TouchableOpacity>
      </View>

      {/* Workouts Section */}
      <View style={{ marginTop: 20, paddingHorizontal: '5%', paddingBottom: '40%' }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            color: 'white',
            marginBottom: 10,
          }}>
          WORKOUTS
        </Text>

     <Card 
     elevation={3}
     style={{
      backgroundColor: '#333',
      // borderRadius: 20,
      padding: 10,
      marginTop: 10,
    }}
     >

        {workoutData.map((workout, index) => (
          <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: '#fff',
                  fontWeight: '700',
                  fontSize: 14,
                  letterSpacing: 2,
                  marginBottom: 10,
                }}>
                {`${workout.day} - ${workout.routine}`}
              </Text>
              <Text style={{ color: '#fff', fontSize: 12 }}>Pull ups x5</Text>
              <Text style={{ color: '#fff', fontSize: 12 }}>Rope pushdowns</Text>
              <Text style={{ color: '#fff', fontSize: 12 }}>Preachers curl</Text>
              <Text style={{ color: '#fff', fontSize: 12 }}>Hammer curls</Text>
              <Text style={{ color: '#fff', fontSize: 12 }}>Inclined curls</Text>
            </View>
            <View>
              <Image
                style={{ width: 109, height: 108, borderRadius: 10, position: 'relative' }}
                source={workout.image}
              />
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  top: 40,
                  left: 30,
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  padding: 10,
                  borderRadius: 5,
                }}>
                <Text style={{ color: '#fff' }}>START</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
     </Card>
      </View>
    </ScrollView>
  );
};

export default HomeScreenIndex;
