import { StyleSheet, View, Text, Pressable } from "react-native";

let GoalItem = (props) => {
  return (
    
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={() => props.onDeleteGoal(props.id)}
        style={({pressed})=> pressed && styles.pressedItem}
      >
   
        <Text style={{ color: "white", padding: 8, }}>{props.value}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#122357",
  },
  pressedItem:{
    opacity:0.5
  },
});
