import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Button, Checkbox, Dialog, Portal } from 'react-native-paper';
import WorkoutsScreensAppbar from '../../../components/Appbars/WorkoutsScreensAppbar';
import GradientButton from '../../../components/GradientButton';
import ScreenGradientBackground from '../../../components/ScreenGradientBackground';
import LinearGradient from 'react-native-linear-gradient';
import {
    BottomSheetModal,
    BottomSheetView,
    BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

const exercises = [
    {
        id: 1,
        name: 'Bench press',
        details: '3 x 8-12 repetitions',
        sets: [
            { id: 1, name: 'Set 1: 12 rep 30 kg' },
            { id: 2, name: 'Set 2: 10 rep 35 kg' },
            { id: 3, name: 'Set 3: xx rep xx kg' }
        ]
    },
    {
        id: 2,
        name: 'Inclined dumbbells press',
        details: '3 x 8-12 repetitions',
        sets: [
            { id: 1, name: 'Set 1: 12 rep 30 kg' },
            { id: 2, name: 'Set 2: 10 rep 35 kg' },
            { id: 3, name: 'Set 3: xx rep xx kg' }
        ]
    },
    // Add more exercises as needed
];

export default function WorkoutScreen({ navigation }) {
    const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
    const [currentSetIndex, setCurrentSetIndex] = useState(0);
    const [isWorkoutStarted, setIsWorkoutStarted] = useState(false);
    const [showEndModal, setShowEndModal] = useState(false);
    const [checkedSets, setCheckedSets] = useState({});
    const [timer, setTimer] = useState(5);
    const [totalTime, setTotalTime] = useState(0);

    const bottomSheetModalRef = useRef(null); // You can remove <BottomSheetModal> type if not using TypeScript
    const snapPoints = useMemo(() => ['25%', '50%'], []);

    const handlePresentModalPress = useCallback(() => {
        console.log("hello")
        bottomSheetModalRef.current?.present();
    }, []);

    const handleCloseModalPress = useCallback(() => {
        console.log("hello")
        bottomSheetModalRef.current?.close();
    }, []);
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
    }, []);

    useEffect(() => {
        let interval;

        if (isWorkoutStarted) {
            interval = setInterval(() => {
                setTotalTime((prevTime) => prevTime + 1);
                if (timer > 0) {
                    setTimer(timer - 1);
                } else {
                    const currentExercise = exercises[currentExerciseIndex];
                    const currentSet = currentExercise.sets[currentSetIndex];

                    setCheckedSets((prevCheckedSets) => ({
                        ...prevCheckedSets,
                        [currentExercise.id]: {
                            ...prevCheckedSets[currentExercise.id],
                            [currentSet.id]: true,
                        },
                    }));

                    if (currentSetIndex < currentExercise.sets.length - 1) {
                        setCurrentSetIndex((prevIndex) => prevIndex + 1);
                        setTimer(5); // Reset timer for next set
                    } else if (currentExerciseIndex < exercises.length - 1) {
                        setCurrentExerciseIndex((prevIndex) => prevIndex + 1);
                        setCurrentSetIndex(0);
                        setTimer(5); // Reset timer for the next exercise
                    } else {
                        clearInterval(interval);
                        setIsWorkoutStarted(false);
                        setShowEndModal(true);
                    }
                }
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isWorkoutStarted, timer]);

    const startWorkout = () => {
        setIsWorkoutStarted(true);
        setTimer(5); // Start the timer for the first set
    };

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const confirmEndWorkout = () => {
        setCurrentExerciseIndex(0);
        setCurrentSetIndex(0);
        setIsWorkoutStarted(false);
        setCheckedSets({});
        setShowEndModal(false);
        setTotalTime(0);
        handleCloseModalPress()
    };

    return (
        <ScreenGradientBackground>
            <BottomSheetModalProvider>

                <View style={styles.container}>

                    <ScrollView contentContainerStyle={{ paddingBottom: "30%" }}>
                        <WorkoutsScreensAppbar isMain={true} title={"ACTIVE WORKOUT"} />
                        <View style={{ marginVertical: 40, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                            <Image style={{ height: 46, width: 46 }} source={require("../../../assets/timer.png")} />
                            <Text style={{ marginLeft: 20, color: "#ffff", fontSize: 30, fontWeight: "700" }}>{formatTime(timer)}</Text>
                        </View>

                        {exercises.map((exercise, index) => (
                            <View style={{
                                padding: 4,
                                borderRadius: 20,
                                shadowColor: '#fff',
                                shadowOffset: { width: 0, height: 4 },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,
                                elevation: 5,
                                marginBottom: 10
                            }}
                                key={index}
                            >
                                <LinearGradient
                                    colors={['#1D1D1D', '#050505']}
                                    start={{ y: 0.0, x: 0.0 }}
                                    end={{ y: 0.0, x: 1.0 }}
                                    style={{ flex: 1, borderRadius: 20, padding: 5 }} // Ensure gradient covers full area with border radius
                                    key={exercise.id}
                                >
                                    <View style={{ padding: 10, borderRadius: 20 }}>

                                        <View style={styles.exerciseRow}>
                                            <Text style={styles.exerciseName}>{exercise.name}</Text>
                                        </View>
                                        <Text style={styles.details}>{exercise.details}</Text>

                                        {isWorkoutStarted && currentExerciseIndex === index && exercise.sets.map((set) => (
                                            <View key={set.id} style={styles.setRow}>
                                                <Text style={styles.subTask}>{set.name}</Text>
                                                <Checkbox
                                                    color='#fff'
                                                    status={checkedSets[exercise.id]?.[set.id] ? 'checked' : 'unchecked'}
                                                />
                                            </View>
                                        ))}
                                    </View>
                                </LinearGradient>
                            </View>

                        ))}
                        {/* {isWorkoutStarted && (
                        <View style={styles.timerContainer}>
                            <Text style={styles.timerText}>Next set in: {timer} seconds</Text>
                        </View>
                    )} */}
                        <TouchableOpacity
                            onPress={isWorkoutStarted ? () => handlePresentModalPress() : startWorkout}
                        // onPress={handlePresentModalPress}
                        >
                            <GradientButton
                                textStyle={{ color: "#fff", fontSize: 20, letterSpacing: 3 }}
                                style={{
                                    height: 55, justifyContent: "center", alignItems: "center", marginTop: 40, borderRadius: 20
                                }}
                                text={!isWorkoutStarted ? "Start workout" : 'End Workout'}
                            />
                        </TouchableOpacity>

                    </ScrollView>
                    <BottomSheetModal
                        ref={bottomSheetModalRef}
                        index={1}
                        snapPoints={snapPoints}
                        onChange={handleSheetChanges}
                        handleStyle={{ backgroundColor: "#1C1C1C", color: "#414141", }}
                        handleIndicatorStyle={{ backgroundColor: "#414141", width: "20%" }}
                    >
                        <BottomSheetView style={{ backgroundColor: "#1C1C1C", height: "100%" }}>
                            <LinearGradient
                                colors={['#1D1D1D', '#050505']}
                                style={{ flex: 1 }}
                                start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}>

                                <View style={{ alignItems: "center", justifyContent: "center", width: '100%', }}>
                                    {/* <Image style={{height:170}} source={require("../../../assets/Confirmed-rafiki 1.png")} /> */}
                                    <Image style={{ height: 170, width: 170 }} source={require("../../../assets/check.png")} />
                                    <Text style={{ fontSize: 18, letterSpacing: 3, width: "80%", textAlign: "center", fontWeight: "400", color: "#FFFFFF", alignSelf: "center" }}>Are you sure, you want to end your workout</Text>
                                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 25 }}>

                                        <TouchableOpacity
                                            onPress={handleCloseModalPress}

                                            style={{ height: 55, marginRight: 6, width: "40%", justifyContent: "center", alignItems: "center", borderRadius: 20, borderWidth: 2, borderColor: "#fff" }}>
                                            <Text style={{ fontSize: 20, color: "#fff" }}>Back</Text>
                                        </TouchableOpacity>

                                        <View style={{ width: "40%", height: 55 }}>
                                            <TouchableOpacity 
                                            onPress={confirmEndWorkout}
                                            >

                                                <GradientButton
                                                    textStyle={{ color: '#fff', fontSize: 20, textAlign: "center" }}
                                                    style={{
                                                        borderRadius: 20,
                                                        width: '100%',
                                                        height: 55,
                                                        justifyContent: 'center',
                                                    }}
                                                    text={'Yes'}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </LinearGradient>


                        </BottomSheetView>
                    </BottomSheetModal>
                    {/* <Portal>
                            <Dialog
                                style={{ backgroundColor: "#1C1C1C" }}
                                visible={showEndModal} onDismiss={() => setShowEndModal(false)}>
                                <Dialog.Title style={{ color: "#fff" }}>End Workout</Dialog.Title>
                                <Dialog.Content>
                                    <Text style={{ color: "#fff" }}>Are you sure you want to end the workout?</Text>
                                </Dialog.Content>
                                <Dialog.Actions>
                                    <Button labelStyle={{ color: "#fff" }} onPress={confirmEndWorkout}>Yes</Button>
                                    <Button labelStyle={{ color: "#fff" }} onPress={() => setShowEndModal(false)}>No</Button>
                                </Dialog.Actions>
                            </Dialog>
                        </Portal> */}
                </View>
            </BottomSheetModalProvider>
        </ScreenGradientBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 40,
        flexGrow: 1,
    },
    exerciseContainer: {
        marginBottom: 20,
        padding: 15,
        borderRadius: 10,
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    exerciseRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    exerciseName: {
        fontSize: 18,
        color: '#ffffff',
    },
    details: {
        fontSize: 14,
        color: '#A1A1A1',
        marginTop: 5,
        marginBottom: 10,
        letterSpacing: 3
    },
    setRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
    },
    subTask: {
        fontSize: 14,
        color: '#ffffff',
        letterSpacing: 2
    },
    timerContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    timerText: {
        fontSize: 20,
        color: '#ffffff',
    },
    timer: {
        fontSize: 24,
        color: '#ffffff',
        textAlign: 'center',
        // marginBottom: 20,
    },
});
