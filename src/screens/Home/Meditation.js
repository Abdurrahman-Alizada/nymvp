import * as React from 'react';
import { ScrollView, View, Image, TouchableOpacity } from 'react-native';
import { Appbar,Text, Button, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import WorkoutsScreensAppbar from '../../components/Appbars/WorkoutsScreensAppbar';
import GradientButton from '../../components/GradientButton';

const Meditation = ({ }) => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, paddingVertical: "5%", backgroundColor: '#121212' }}>
            <WorkoutsScreensAppbar isMain={false} title={"START WORKOUT"} />
            <ScrollView style={{ flex: 1, padding: 10, backgroundColor: '#121212' }}>
                {/* Card 1 */}
                <Text style={{ color: "#fff", marginBottom: 25, textAlign: "center" }}>Start Pull Workout</Text>
                <Text style={{ color: "#fff", marginBottom: 15, fontSize: 18, textAlign: "center" }}>Cardio</Text>
                <Card style={{
                      shadowColor: '#fff',
                      shadowOffset: { width: 0, height: 4 },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
                  
                    marginBottom: 15, backgroundColor: '#1C1C1C', borderRadius: 10 }}>
                    <Card.Content>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ marginBottom: 3, flexDirection: "row", alignItems: "flex-start" }}>
                                <Image
                                    style={{
                                        width: 30,
                                        height: 34,
                                        marginRight: 5,
                                        resizeMode: "contain"
                                    }}
                                    source={require('../../assets/cardio.png')}
                                />
                                <Text style={{ color: '#FFF', fontSize: 22 }}>Cardio Workout</Text>
                            </View>
                            <Text style={{ color: '#B0B0B0' }}>18/5/23</Text>

                        </View>
                        <Text style={{ color: '#B0B0B0', marginBottom: 10 }}>30 min</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flex: 1 }}>
                                <View style={{ marginTop: 5, flexDirection: "row", justifyContent: "space-between" }}>
                                    <Text style={{ fontWeight: 'bold', marginBottom: 5, color: '#FFF' }}>Exercise</Text>
                                    <Text style={{ fontWeight: 'bold', marginBottom: 5, color: '#FFF' }}>Time</Text>
                                </View>
                                <View style={{ marginTop: 5, flexDirection: "row", justifyContent: "space-between" }}>
                                    <Text style={{ color: '#FFF' }}>Jumping Jacks</Text>
                                    <Text style={{ color: '#FFF' }}>50 seconds for each exercise</Text>
                                </View>
                                <View style={{ marginTop: 5, flexDirection: "row", justifyContent: "space-between" }}>
                                    <Text style={{ color: '#FFF' }}>Rest</Text>
                                    <Text style={{ color: '#FFF' }}>5 mins</Text>
                                </View>
                                <View style={{ marginTop: 5, flexDirection: "row", justifyContent: "space-between" }}>
                                    <Text style={{ color: '#FFF' }}>Jump Rope</Text>
                                    <Text style={{ color: '#FFF' }}>3 mins</Text>
                                </View>
                                <View style={{ marginTop: 5, flexDirection: "row", justifyContent: "space-between" }}>
                                    <Text style={{ color: '#FFF' }}>Flyes</Text>
                                    <Text style={{ color: '#FFF' }}>2 mins</Text>
                                </View>
                                <View style={{ marginTop: 5, flexDirection: "row", justifyContent: "space-between" }}>
                                    <Text style={{ color: '#FFF' }}>Rope pushdowns</Text>
                                    <Text style={{ color: '#FFF' }}>5 mins</Text>
                                </View>
                                <View style={{ marginTop: 5, flexDirection: "row", justifyContent: "space-between" }}>
                                    <Text style={{ color: '#FFF' }}>Cross Punches</Text>
                                    <Text style={{ color: '#FFF' }}>2 mins</Text>
                                </View>
                            </View>

                        </View>
                    </Card.Content>
                </Card>

                <TouchableOpacity onPress={() => navigation.navigate({ name: "HomeStack", params: { screen: "StartWorkouts" } })}>
                    <GradientButton
                        textStyle={{ color: "#fff", letterSpacing: 3 }}
                        style={{
                            padding: "5%", alignItems: "center", marginTop: 40, borderRadius: 20
                        }}
                        text={"Start Workouts"}
                    />
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default Meditation;
