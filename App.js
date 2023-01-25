import { StyleSheet, View, FlatList, Button } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/Goalinput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);
  const [modalOpen,setModalOpen]=useState(false)
  const addGoalHandler = (enteredGoalText) => {
    // setCourseGoal([...courseGoal,enteredGoalText]) dogru yol degil
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
    {/* status bar telefonlarda ustte olan saat vb yazilar olan cubuk onun stylini ayarliyoruz light dark yada auto */}
    <View style={styles.container}>
      <Button title='Add New Goal' color='#122357' onPress={()=>setModalOpen(true)}/>
      {modalOpen && <GoalInput goalHandler={addGoalHandler} showModal={modalOpen} setModalOpen={setModalOpen}/> }
      <View style={styles.listInput}>
        {/* flatlist map gibi mapdeki yerine data ile arrayi veriyoruz render item ile de functionu
         scrolviewden iyi olarakda gorunmeyen itemleri yuklemiyor hizli */}
        <FlatList 
          data={courseGoal}
          renderItem={(itemData) => {
            return (
              //viewe sardik cunku texte border radius ios da desteklenmiyor */}
              //direk texte itemdata verince calismadi cunku obje ve icinde index icerigi ise item diyerek ulasiyoruz var
              //key yine lazim ama farkli sekilde veriliyor
              //direk statemize keyli olarak veriyoruz isim onemli key olmak zorunda yani objeye ceviriyoruz ve biyere key vermemize gerek kalmiyor yukarida
              //yada keyExtractor ile function olarak key verebiliriz flatlistin ozellligi
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

//  {/* ScrollView gorunmeyen elemanlari da yukler oyuzdez fazla eleman varsa propblem olusur flatlist kullanilmalidir
//           {/* //viewe sardik cunku texte border radius ios da desteklenmiyor */}
//           <View style={styles.goalItem} key={index}>
//               <Text style={{ color: "white" }}>{goal}</Text>
//           </View> */}
