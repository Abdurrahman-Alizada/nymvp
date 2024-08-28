import * as React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { Appbar, Button, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import WorkoutsScreensAppbar from '../../../components/Appbars/WorkoutsScreensAppbar';
import GradientButton from '../../../components/GradientButton';

const WorkoutsScreen = ({ }) => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, paddingVertical: "5%", backgroundColor: '#121212' }}>
            <WorkoutsScreensAppbar isMain={true} title="Workouts" />
            <ScrollView style={{ flex: 1, padding: 10, backgroundColor: '#121212' }}>
                {/* Card 1 */}
                <Card onPress={() => navigation.navigate({ name: "HomeStack", params: { screen: "Meditatoin" } })} style={{
                    shadowColor: '#fff',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    marginBottom: 15, backgroundColor: '#1C1C1C', borderRadius: 10
                }}>
                    <Card.Content>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
                                <Image
                                    style={{
                                        width: 30,
                                        height: 34,
                                        marginRight: 5,
                                        resizeMode: "contain"
                                    }}
                                    source={require('../../../assets/workout1.png')}
                                />
                                <Text style={{ color: '#FFF', fontSize: 22 }}>Push workout</Text>
                            </View>
                            <Text style={{ color: '#B0B0B0' }}>18/5/23</Text>

                        </View>
                        <Text style={{ color: '#B0B0B0', marginBottom: 10 }}>2h 25 min</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontWeight: 'bold', marginBottom: 5, color: '#FFF' }}>Exercise</Text>
                                <Text style={{ color: '#FFF' }}>Bench press</Text>
                                <Text style={{ color: '#FFF' }}>Inclined dumbell press</Text>
                                <Text style={{ color: '#FFF' }}>Flyes</Text>
                                <Text style={{ color: '#FFF' }}>Rope pushdowns</Text>
                                <Text style={{ color: '#FFF' }}>Single rope pushdowns</Text>
                                <Text style={{ color: '#FFF' }}>Inclined curls</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontWeight: 'bold', marginBottom: 5, color: '#FFF' }}>Repetitions</Text>
                                <Text style={{ color: '#FFF' }}>65 kg x 12 x 3</Text>
                                <Text style={{ color: '#FFF' }}>25 kg x 10 x 3</Text>
                                <Text style={{ color: '#FFF' }}>12 kg x 10 x 3</Text>
                                <Text style={{ color: '#FFF' }}>20 kg x 12 x 3</Text>
                                <Text style={{ color: '#FFF' }}>7 kg x 12 x 3</Text>
                                <Text style={{ color: '#FFF' }}>15 kg x 10 x 3</Text>
                            </View>
                        </View>
                    </Card.Content>
                </Card>

                {/* Card 2 */}
                <Card onPress={() => navigation.navigate({ name: "HomeStack", params: { screen: "Cardio" } })} style={{
                    marginBottom: 15,
                    // iOS shadow properties
                    shadowColor: '#fff',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    // Android elevation property
                    elevation: 2,
                    backgroundColor: '#1C1C1C', borderRadius: 10
                }}>
                    <Card.Content>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
                                <Image
                                    style={{
                                        width: 30,
                                        height: 34,
                                        marginRight: 5,
                                        resizeMode: "contain"
                                    }}
                                    source={require('../../../assets/workout2.png')}
                                />
                                <Text style={{ color: '#FFF', fontSize: 22 }}>Pull workout</Text>
                            </View>
                            <Text style={{ color: '#B0B0B0' }}>18/5/23</Text>

                        </View>
                        <Text style={{ color: '#B0B0B0', marginBottom: 10 }}>2h 25 min</Text>
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
                {/* <TouchableOpacity onPress={() => navigation.navigate({ name: "HomeStack", params: { screen: "StartWorkouts" } })}>
                    <GradientButton
                        textStyle={{ color: "#fff", letterSpacing: 3 }}
                        style={{
                            padding: "3%", alignItems: "center", marginTop: 40, borderRadius: 20
                        }}
                        text={"Workouts"}
                    />
                </TouchableOpacity> */}
            </ScrollView>
        </View>
    );
};

export default WorkoutsScreen;
