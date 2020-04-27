import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";


const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (

        <Modal visible = {props.visible} animationType="slide">
            <View style={styles.inputContainer}>
            <TextInput 
            placeholder = "Course Goal" 
            style = {styles.input} 
            onChangeText = {goalInputHandler}
            />
            <View style={styles.buttonContainer}>
                <View style={styles.button}><Button title ="ADD" onPress= {addGoalHandler}/></View>
                <View style={styles.button}><Button title="Cancel" color='red' onPress={props.onCancel}/></View>
            </View>
        </View>
      </Modal>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%'
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
      },
      input: {
        width: '80%',
        borderBottomColor: 'black', 
        borderBottomWidth: 1, 
        padding: 5,
        marginBottom: 10
      },
      button: {
        width: '40%'
      },
});

export default GoalInput;