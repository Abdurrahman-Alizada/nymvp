import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Button, Checkbox, Dialog, Portal } from 'react-native-paper';
import WorkoutsScreensAppbar from '../../../components/Appbars/WorkoutsScreensAppbar';
import GradientButton from '../../../components/GradientButton';

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

export default function WorkoutScreen() {
    const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
    const [currentSetIndex, setCurrentSetIndex] = useState(0);
    const [isWorkoutStarted, setIsWorkoutStarted] = useState(false);
    const [showEndModal, setShowEndModal] = useState(false);
    const [checkedSets, setCheckedSets] = useState({});
    const [timer, setTimer] = useState(5);
    const [totalTime, setTotalTime] = useState(0);

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
    };

    return (
        <View style={styles.container}>
            <WorkoutsScreensAppbar isMain={true} title={"ACTIVE WORKOUT"} />
            <Text style={styles.timer}>{formatTime(totalTime)}</Text>

            <ScrollView contentContainerStyle={{ paddingBottom: "30%" }}>
                {exercises.map((exercise, index) => (
                    <View key={exercise.id} style={styles.exerciseContainer}>
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
                ))}
                {isWorkoutStarted && (
                    <View style={styles.timerContainer}>
                        <Text style={styles.timerText}>Next set in: {timer} seconds</Text>
                    </View>
                )}
                <TouchableOpacity
                    onPress={isWorkoutStarted ? () => setShowEndModal(true) : startWorkout}
                >
                    <GradientButton
                        textStyle={{ color: "#fff", letterSpacing: 3 }}
                        style={{
                            padding: "5%", alignItems: "center", marginTop: 40, borderRadius: 20
                        }}
                        text={isWorkoutStarted ? 'End Workout' : 'Start Workout'}
                    />
                </TouchableOpacity>

                <Portal>
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
                </Portal>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical:40,
        backgroundColor: '#121212',
        flexGrow: 1,
    },
    exerciseContainer: {
        marginBottom: 20,
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#1F1F1F',
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
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
        marginBottom: 20,
    },
});
