import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Appbar, Card, Avatar } from 'react-native-paper';
import { Calendar } from 'react-native-calendars';
import WorkoutsScreen from './Workouts';
import WorkoutsScreensAppbar from '../../../components/Appbars/WorkoutsScreensAppbar';

const HistorScreen = () => {
    const [selectedDate, setSelectedDate] = React.useState('2023-05-15'); // Initial selected date

    const handleDayPress = (day) => {
        setSelectedDate(day.dateString);
    };

    return (
        <View style={{ flex: 1, paddingVertical: "8%", backgroundColor: '#121212' }}>
            <WorkoutsScreensAppbar isMain={true} title={"History"} />

            <ScrollView contentContainerStyle={{ paddingBottom: "10%", paddingTop: "5%", backgroundColor: '#121212' }}>
                <Card style={{ padding: 5, backgroundColor: '#1C1C1C', borderRadius: 10 }}>
                    <Calendar
                        theme={{
                            backgroundColor: '#121212',
                            calendarBackground: '#121212',
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
                </Card>
                <Text style={{ color: '#FFF', textAlign: 'center', marginTop: 20, marginBottom: 10, fontSize: 18 }}>
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
                                <Text style={{ color: '#FFF' }}>Pull ups x5</Text>
                                <Text style={{ color: '#FFF' }}>Lat pull-downs</Text>
                                <Text style={{ color: '#FFF' }}>Bent-over-row</Text>
                                <Text style={{ color: '#FFF' }}>Preachers curl</Text>
                                <Text style={{ color: '#FFF' }}>Hammer curls</Text>
                                <Text style={{ color: '#FFF' }}>Inclined curls</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontWeight: 'bold', marginBottom: 5, color: '#FFF' }}>Repetitions</Text>
                                <Text style={{ color: '#FFF' }}>Body Weight x 12 x 3</Text>
                                <Text style={{ color: '#FFF' }}>70 kg x 10 x 3</Text>
                                <Text style={{ color: '#FFF' }}>40 kg x 10 x 3</Text>
                                <Text style={{ color: '#FFF' }}>35 kg x 12</Text>
                                <Text style={{ color: '#FFF' }}>15 kg x 12 x 3</Text>
                                <Text style={{ color: '#FFF' }}>15 kg x 10 x 3</Text>
                            </View>
                        </View>
                    </Card.Content>
                </Card>
                <Card style={{
                      shadowColor: '#fff',
                      shadowOffset: { width: 0, height: 4 },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
                   backgroundColor: '#1C1C1C', margin: 10, borderRadius: 15 }}>
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
                                <Text style={{ color: '#FFF' }}>Pull ups x5</Text>
                                <Text style={{ color: '#FFF' }}>Lat pull-downs</Text>
                                <Text style={{ color: '#FFF' }}>Bent-over-row</Text>
                                <Text style={{ color: '#FFF' }}>Preachers curl</Text>
                                <Text style={{ color: '#FFF' }}>Hammer curls</Text>
                                <Text style={{ color: '#FFF' }}>Inclined curls</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontWeight: 'bold', marginBottom: 5, color: '#FFF' }}>Repetitions</Text>
                                <Text style={{ color: '#FFF' }}>Body Weight x 12 x 3</Text>
                                <Text style={{ color: '#FFF' }}>70 kg x 10 x 3</Text>
                                <Text style={{ color: '#FFF' }}>40 kg x 10 x 3</Text>
                                <Text style={{ color: '#FFF' }}>35 kg x 12</Text>
                                <Text style={{ color: '#FFF' }}>15 kg x 12 x 3</Text>
                                <Text style={{ color: '#FFF' }}>15 kg x 10 x 3</Text>
                            </View>
                        </View>
                    </Card.Content>
                </Card>
            </ScrollView>
        </View>
    );
};

export default HistorScreen;
