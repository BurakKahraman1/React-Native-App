import { StyleSheet, View, FlatList, Button } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/Goalinput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);
  const [modalOpen,setModalOpen]=useState(false)
  const addGoalHandler = (enteredGoalText) => {
   
    setCourseGoal((element) => [
      ...element,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  };

  const deleteGoal=(id)=>{
    setCourseGoal((current)=>{
      return current.filter((goal)=> goal.key !==id)
    })
  }
  console.log('hello')

  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.container}>
      <Button title='Add New Goal' color='#122357' onPress={()=>setModalOpen(true)}/>
      {modalOpen && <GoalInput goalHandler={addGoalHandler} showModal={modalOpen} setModalOpen={setModalOpen}/> }
      <View style={styles.listInput}>
       <FlatList 
          data={courseGoal}
          renderItem={(itemData) => {
            return (
                 <GoalItem id={itemData.item.key} value={itemData.item.text} onDeleteGoal={deleteGoal} />
              );
            }}
            />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor:'#f4ce98',
  },

  listInput: {
    flex: 5,
    marginTop:10,
  },
});

