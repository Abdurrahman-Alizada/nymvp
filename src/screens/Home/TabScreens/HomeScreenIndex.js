import React, { useState, useRef } from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Card, Text, useTheme } from 'react-native-paper';
import Carousel from 'react-native-reanimated-carousel';
import { width } from '../../../GlobalStyles'; // Assuming this provides the screen width
import ScreenGradientBackground from '../../../components/ScreenGradientBackground';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreenIndex = ({ navigation }) => {
  const [isFast, setIsFast] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isPagingEnabled, setIsPagingEnabled] = useState(true);
  const carouselRef = useRef(null);
  const theme = useTheme();
  const itineraryData = [
    { day: 'SUN', date: '12' },
    { day: 'MON', date: '13' },
    { day: 'TUE', date: '14' },
    { day: 'WED', date: '15' },
    { day: 'THU', date: '16' },
    { day: 'FRI', date: '17' },
    // { day: 'SAT', date: '18' },
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

  const data = [
    {
      image: require('../../../assets/breakfast.png'),
      text: "Breakfast"
    },
    {
      image: require('../../../assets/dinner.png'),
      text: "Lunch"
    },
    {
      image: require('../../../assets/breakfast.png'),
      text: "Dinner"
    },

  ];

  // Carousel dimensions
  const PAGE_WIDTH = width; // Adjust this if necessary
  const CAROUSEL_WIDTH = PAGE_WIDTH * 0.85;
  const CAROUSEL_HEIGHT = PAGE_WIDTH / 2.2;

  const handlePrevious = () => {
    carouselRef.current?.scrollTo({ count: -1, animated: true });
  };

  const handleNext = () => {
    carouselRef.current?.scrollTo({ count: 1, animated: true });
  };
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <ScreenGradientBackground>

      <ScrollView
        style={{
          flex: 1,
          // backgroundColor: 'black',
          paddingBottom: '20%',
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

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: '5%',
            width: '100%',
            marginTop: 10,
          }}>
          <View>
            <Text style={{ color: '#aaa', fontSize: 16 }}>Good Morning</Text>
            <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#fff' }}>
              Axel
            </Text>
          </View>
          <View>
            <Image
              source={require('../../../assets/profilepic.png')}
              style={{
                width: 60,
                height: 60,
                borderRadius: 50,
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
              letterSpacing: 3
            }}>
            YOUR ITINERARY
          </Text>
          <Card
            elevation={3}
            style={{
              borderRadius: 20,
              marginTop: 2,
              shadowColor: '#fff',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

            }}
            contentStyle={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <LinearGradient
              colors={['#1D1D1D', '#050505']}
              style={{
                alignItems: 'center',
                marginRight: 2,
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderRadius: 15,
                width: "100%",
                padding: 8
              }}
              start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}>
              {itineraryData.map((item, index) => (
                index !== 2 ?
                  <TouchableOpacity
                    key={index}
                    style={{
                      // backgroundColor: index === 2 ? '#5EC8D8' : '#000',
                      borderRadius: 25,
                      width: "14%",
                      // height: 60,
                      minHeight: 85,
                      padding: 5,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: 4,
                    }}>
                    <Text style={{ color: 'white', fontSize: 12, }}>
                      {item.day}
                    </Text>
                    <View style={{ backgroundColor: "#fff", height: 35, width: 35, alignItems: "center", justifyContent: "center", borderRadius: 50 }}>

                      <Text style={{ color: theme.colors.primary, fontSize: 16, fontWeight: '600' }}>
                        {item.date}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  :
                  <LinearGradient
                    colors={['#C5D7D7', '#839898']}
                    style={{
                      width: "14%", minHeight: 85,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: 2,
                      borderRadius: 15,
                      padding: 5
                    }}
                    start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}>
                    <TouchableOpacity
                      key={index}
                      style={{
                        borderRadius: 25,
                        alignItems: "center", justifyContent: "center"
                      }}>
                      <Text style={{ color: 'white', fontSize: 12, }}>
                        {item.day}
                      </Text>
                      <View style={{ backgroundColor: "#fff", height: 35, width: 35, alignItems: "center", justifyContent: "center", borderRadius: 50 }}>

                        <Text style={{ color: theme.colors.primary, fontSize: 16, fontWeight: '600' }}>
                          {item.date}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </LinearGradient>

              ))}

            </LinearGradient>
          </Card>
        </View>

        {/* Meals Carousel */}
        <Text
          style={{
            fontSize: 20,
            color: 'white',
            fontWeight: '600',
            textAlign: 'left',
            letterSpacing: 3,
            marginLeft: 20
          }}>
          MEALS
        </Text>
        <View
          style={{
            shadowColor: '#fff',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            // backgroundColor: theme.colors.cardBackground,
            borderRadius: 10,
            marginBottom: 20,
            marginHorizontal: 20,
            height: CAROUSEL_HEIGHT * 0.9,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <LinearGradient
            colors={['#1D1D1D','#050505']}
            style={{
              alignItems: 'center',
              flexDirection: 'row', // Set row direction for icons and carousel
              justifyContent: 'space-between',
              borderRadius: 15,
              width: '100%',
              paddingVertical: 10,
            }}
            start={{ y: 0.0, x: 0.0 }}
            end={{ y: 0.0, x: 1.0 }}>
            {/* Left Arrow Icon */}
            <TouchableOpacity
              style={{
                // backgroundColor: 'rgba(0, 0, 0, 0.5)',
                borderRadius: 25,
                padding: 5,
              }}
              onPress={handlePrevious}>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  resizeMode: 'contain',
                }}
                source={require('../../../assets/arrowleft.png')}
              />
            </TouchableOpacity>

            {/* Carousel */}
            <Carousel
              loop
              width={CAROUSEL_WIDTH * 0.9} // Make the carousel a bit smaller
              autoPlay={isAutoPlay}
              autoPlayInterval={4000}
              data={data}
              pagingEnabled={isPagingEnabled}
              ref={carouselRef}
              mode="parallax"
              modeConfig={{
                parallaxScrollingOffset: 220,
                parallaxScrollingScale: 0.75, // Scale for the main image
                parallaxAdjacentItemScale: 0.5, // Scale for the side images
              }}
              onProgressChange={(_, absoluteProgress) => setCurrentIndex(Math.round(absoluteProgress))}
              renderItem={({ item, index }) => {
                const isMainImage = index === currentIndex; // Assuming currentIndex is your current selected index
                
                return (
                  <View style={{ alignItems: 'center' }}>
                    {isMainImage ? (
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate({
                            name: 'HomeStack',
                            params: { screen: 'Recipe' },
                          })
                        }
                        style={{
                          borderRadius: 10,
                          overflow: 'hidden',
                          alignItems: 'center',
                        }}>
                        <Image
                          source={item.image}
                          style={{
                            width: 120,
                            height: 120,
                            resizeMode: 'cover',
                            borderRadius: 10,
                          }} // Larger size for main image
                        />
                        <Text
                          style={{
                            marginTop: 5,
                            color: '#fff',
                            fontSize: 14,
                            fontWeight: '800',
                            textAlign: 'center',
                          }}>
                          {item.text}
                        </Text>
                      </TouchableOpacity>
                    ) : (
                      <View
                        style={{
                          borderRadius: 10,
                          overflow: 'hidden',
                          alignItems: 'center',
                        }}>
                        <Image
                          source={item.image}
                          style={{
                            width: 120,
                            height: 120,
                            resizeMode: 'cover',
                            borderRadius: 10,
                          }} // Larger size for main image
                        />
                        <Text
                          style={{
                            marginTop: 5,
                            color: '#fff',
                            fontSize: 14,
                            fontWeight: '800',
                            textAlign: 'center',
                          }}>
                          {item.text}
                        </Text>
                      </View>
                    )}
                  </View>
                );
              }}
              style={{ alignSelf: "center" }}
            />

            {/* Right Arrow Icon */}
            <TouchableOpacity
              style={{
                // backgroundColor: 'rgba(0, 0, 0, 0.5)',
                borderRadius: 25,
                padding: 5,
              }}
              onPress={handleNext}>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  resizeMode: 'contain',
                }}
                source={require('../../../assets/arrowright.png')}
              />
            </TouchableOpacity>
          </LinearGradient>
        </View>


        {/* Workouts Section */}
        <View style={{ marginTop: 20, paddingHorizontal: '5%', paddingBottom: '40%' }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
              color: 'white',
              marginBottom: 2,
              letterSpacing:3
            }}>
            WORKOUTS
          </Text>

          <Card
            elevation={3}
            style={{
              // borderRadius: 20,
              marginTop: 5,
              shadowColor: '#fff',
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

            }}
          >
            <LinearGradient
              colors={['#1D1D1D', '#050505']}
              style={{
                padding: 30,

              }}
              start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}>

              {workoutData.map((workout, index) => (
                <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        color: '#fff',
                        fontWeight: '700',
                        fontSize: 14,
                        letterSpacing: 2,
                        marginBottom: 5,
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
                      {/* <Text style={{ color: '#fff' }}>START</Text> */}
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </LinearGradient>
          </Card>
        </View>
      </ScrollView>
    </ScreenGradientBackground>
  );
};

export default HomeScreenIndex;
