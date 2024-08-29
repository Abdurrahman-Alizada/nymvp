import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Appbar, Card, Avatar } from 'react-native-paper';
import { Calendar } from 'react-native-calendars';
import WorkoutsScreen from './Workouts';
import WorkoutsScreensAppbar from '../../../components/Appbars/WorkoutsScreensAppbar';
import ScreenGradientBackground from '../../../components/ScreenGradientBackground';
import LinearGradient from 'react-native-linear-gradient';

const HistorScreen = () => {
    const [selectedDate, setSelectedDate] = React.useState('2023-05-15'); // Initial selected date

    const handleDayPress = (day) => {
        setSelectedDate(day.dateString);
    };

    return (
        <ScreenGradientBackground>
            <View style={{ flex: 1, paddingVertical: "8%", }}>
                <WorkoutsScreensAppbar isMain={true} title={"History"} />

                <ScrollView contentContainerStyle={{ justifyContent: "center", paddingBottom: "10%", paddingTop: "5%", }}>
                    <View style={{
                        shadowColor: '#fff',
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.25,
                        shadowRadius: 20,
                    }}>

                        <View style={{
                            shadowColor: '#fff',
                            shadowOffset: { width: 0, height: 4 },
                            shadowOpacity: 0.25,
                            shadowRadius: 20,
                            backgroundColor: '#1C1C1C',
                            margin: 10,
                            borderRadius: 10,
                            overflow: "scroll"
                        }}>
                            <LinearGradient
                                colors={['#1D1D1D', '#050505']}
                                style={{ flex: 1 }} // Ensure gradient covers full area
                                start={{ y: 0.0, x: 0.0 }}
                                end={{ y: 0.0, x: 1.0 }}
                            >
                                <Calendar
                                    theme={{
                                        backgroundColor: 'transparent', // Set to transparent to show gradient
                                        calendarBackground: 'transparent',
                                        textSectionTitleColor: '#ffffff',
                                        dayTextColor: '#ffffff',
                                        todayTextColor: '#B0B0B0',
                                        selectedDayBackgroundColor: '#6B8E8E',
                                        selectedDayTextColor: '#ffffff',
                                        monthTextColor: '#ffffff',
                                        arrowColor: '#ffffff',
                                        textDayFontWeight: '300',
                                        textMonthFontWeight: 'bold',
                                        textDayHeaderFontWeight: '300',
                                        textDayFontSize: 16,
                                        textMonthFontSize: 18,
                                        textDayHeaderFontSize: 16,
                                    }}
                                    markedDates={{
                                        [selectedDate]: { selected: true, marked: true, selectedColor: '#6B8E8E' },
                                    }}
                                    current={'2023-05-01'}
                                    monthFormat={'MMMM yyyy'}
                                    hideExtraDays={true}
                                    firstDay={1}
                                    onDayPress={handleDayPress}
                                />
                            </LinearGradient>
                        </View>
                    </View>


                    <Text style={{ color: '#FFF', marginLeft: 15, marginTop: 20, marginBottom: 10, fontSize: 18 }}>
                        Sessions completed today
                    </Text>

                    <Card style={{
                        shadowColor: '#fff',
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        backgroundColor: '#1C1C1C', margin: 10, borderRadius: 15
                    }}>
                        <Card.Content>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                                <Avatar.Icon size={40} icon="dumbbell" color="#FFF" style={{ backgroundColor: '#121212', marginRight: 10 }} />
                                <Text style={{ color: '#FFF', fontSize: 20, fontWeight: 'bold' }}>Pull workout</Text>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Text style={{ color: '#B0B0B0', fontSize: 14 }}>18/5/23</Text>
                                </View>
                            </View>

                            <Text style={{ color: '#B0B0B0', fontSize: 16, marginBottom: 10 }}>2h 25 min - 25 sets</Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontWeight: 'bold', marginBottom: 5, color: '#FFF' }}>Exercise</Text>
                                    <Text style={{ color: '#B0B0B0' }}>Pull ups x5</Text>
                                    <Text style={{ color: '#B0B0B0' }}>Lat pull-downs</Text>
                                    <Text style={{ color: '#B0B0B0' }}>Bent-over-row</Text>
                                    <Text style={{ color: '#B0B0B0' }}>Preachers curl</Text>
                                    <Text style={{ color: '#B0B0B0' }}>Hammer curls</Text>
                                    <Text style={{ color: '#B0B0B0' }}>Inclined curls</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontWeight: 'bold', marginBottom: 5, color: '#FFF' }}>Repetitions</Text>
                                    <Text style={{ color: '#B0B0B0' }}>Body Weight x 12 x 3</Text>
                                    <Text style={{ color: '#B0B0B0' }}>70 kg x 10 x 3</Text>
                                    <Text style={{ color: '#B0B0B0' }}>40 kg x 10 x 3</Text>
                                    <Text style={{ color: '#B0B0B0' }}>35 kg x 12</Text>
                                    <Text style={{ color: '#B0B0B0' }}>15 kg x 12 x 3</Text>
                                    <Text style={{ color: '#B0B0B0' }}>15 kg x 10 x 3</Text>
                                </View>
                            </View>
                        </Card.Content>
                    </Card>
                    <Card style={{
                        shadowColor: '#fff',
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        backgroundColor: '#1C1C1C', margin: 10, borderRadius: 15
                    }}>
                        
                        <Card.Content>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                                <Avatar.Icon size={40} icon="dumbbell" color="#FFF" style={{ backgroundColor: '#121212', marginRight: 10 }} />
                                <Text style={{ color: '#FFF', fontSize: 20, fontWeight: 'bold' }}>Push workout</Text>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <Text style={{ color: '#B0B0B0', fontSize: 14 }}>18/5/23</Text>
                                </View>
                            </View>

                            <Text style={{ color: '#B0B0B0', fontSize: 16, marginBottom: 10 }}>2h 25 min - 25 sets</Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontWeight: 'bold', marginBottom: 5, color: '#FFF' }}>Exercise</Text>
                                    <Text style={{ color: '#B0B0B0' }}>Pull ups x5</Text>
                                    <Text style={{ color: '#B0B0B0' }}>Lat pull-downs</Text>
                                    <Text style={{ color: '#B0B0B0' }}>Bent-over-row</Text>
                                    <Text style={{ color: '#B0B0B0' }}>Preachers curl</Text>
                                    <Text style={{ color: '#B0B0B0' }}>Hammer curls</Text>
                                    <Text style={{ color: '#B0B0B0' }}>Inclined curls</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontWeight: 'bold', marginBottom: 5, color: '#FFF' }}>Repetitions</Text>
                                    <Text style={{ color: '#B0B0B0' }}>Body Weight x 12 x 3</Text>
                                    <Text style={{ color: '#B0B0B0' }}>70 kg x 10 x 3</Text>
                                    <Text style={{ color: '#B0B0B0' }}>40 kg x 10 x 3</Text>
                                    <Text style={{ color: '#B0B0B0' }}>35 kg x 12</Text>
                                    <Text style={{ color: '#B0B0B0' }}>15 kg x 12 x 3</Text>
                                    <Text style={{ color: '#B0B0B0' }}>15 kg x 10 x 3</Text>
                                </View>
                            </View>
                        </Card.Content>
                    </Card>
                </ScrollView>
            </View>
        </ScreenGradientBackground>
    );
};

export default HistorScreen;
