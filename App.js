import React, {useState} from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals(courseGoals => [...courseGoals, {key: Math.random().toString(), value: goalTitle}]);
    setIsAddMode(false);
  };

  const removeGoalsHandler = () => {
    setCourseGoals(courseGoals => []);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals(courseGoals => {
      return courseGoals.filter((goal) => goal.key !== goalId);
    })
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button 
        title="Add New Goal" 
        onPress={() => setIsAddMode(true)}/>
      <GoalInput 
        visible={isAddMode} 
        onAddGoal={addGoalHandler} 
        onCancel={cancelGoalAdditionHandler}
      />
      <View style={styles.clearButton}>
      <Button 
        title ="Clear List" 
        onPress= {removeGoalsHandler}
      />
      </View>
      <FlatList 
        data={courseGoals} 
        renderItem = {itemData => 
          <GoalItem id = {itemData.item.key} onDelete = {removeGoalHandler} title = {itemData.item.value}/> 
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }, 
  list: {
    marginTop: 5,
    marginBottom: 75
  },
  clearButton: {
    marginVertical: 10
  }
});
