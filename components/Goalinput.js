import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal,Image } from "react-native";

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };
  return (
    <Modal visible={props.showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/favicon.png')}/>
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View  style={styles.buttons}>
            <Button
              title="Add Goal"
              onPress={() => {
                props.goalHandler(enteredGoalText);
                setEnteredGoalText("");
                props.setModalOpen(false)
              }}
            />
          </View>
          <View style={styles.buttons}>
            <Button title="Cancel" color='#f11111' onPress={()=>props.setModalOpen(false)}/>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#cccccc",
    backgroundColor:'#f4ce98',
    padding:16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor:'#ffffc3',
    borderRadius:6,
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop:16,
  },
  buttons:{
    width:'30%',
    marginHorizontal:8,
  },

  image:{
    width:100,
    height:100,
    margin:20,
    marginTop:"-30%"
  }
});
