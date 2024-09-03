import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  onPress,
} from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [goals, setGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setGoals((currentGoals) => [...currentGoals, enteredGoalText]);
  }
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TextInput
          placeholder="Enter Your Name"
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <Button title="Click me" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {/* <Text style={styles.todoText}>TO DO LIST . . .</Text> */}
        {goals.map((goal) => (
          <Text key={goal}>{goal}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    paddingTop: 15,
    flexDicrection: "column",
    backgroundColor: "#fff",
  },
  innerContainer: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    paddingBottom: 10,
    flexDirection: "row",
    borderBottomWidth: 2,
    borderColor: "#cccccc",
  },
  textInput: {
    flex: 1,
    width: "80%",
    fontSize: 19,
    color: "#232323",
    padding: 2,
    marginRight: 10,
    paddingLeft: 5,
    borderColor: "#ccccc",
    borderWidth: 1,
    borderRadius: 2,
  },
  goalsContainer: {
    padding: 10,
  },
  todoText: {
    fontSize: 19,
    color: "#232323",
  },
});

//OUTSIDE OF THE FUNCTION
// Lesson > view > styles
// Lesson
// Elements
// Styles
//================================//================================//
//============================//Break//=============================//
//==============================//==================================//
// Lesson 2 Flexbox
// Elements
{
  /* <View style={{}}>
      <View
        style={{
          padding: 50,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "stretch",
          width: "80%",
          height: 300,
        }}
      >
        <View
          style={{
            backgroundColor: "red",
          }}
        >
          <Text> Box</Text>
        </View>
        <View
          style={{
            backgroundColor: "green",
          }}
        >
          <Text> Box</Text>
        </View>
        <View
          style={{
            backgroundColor: "blue",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 20,
              paddingTop: 34,
              paddingRight: 5,
            }}
          >
            {" "}
            Box
          </Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: 500,
          padding: 10,
          flex: 1,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "pink",
          }}
        >
          <Text> Box</Text>
        </View>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "teal",
          }}
        >
          <Text> Box</Text>
        </View>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "skyblue",
          }}
        >
          <Text> Box</Text>
        </View>
      </View>
    </View> */
}
// Styles
// None(Inline Styles)
//================================//================================//
//============================//Break//=============================//
//==============================//==================================//
// Lesson 1 Adding styles

// Elements
// <View style={styles.container}>
//   <View style={styles.innerContainer}>
//     <Text style={styles.mainText}> Haro Haro Tayo</Text>
//     <TouchableOpacity style={styles.button} onPress={onPress}>
//       <Text style={styles.buttonText}>Click Me</Text>
//     </TouchableOpacity>
//     <View style={styles.innerContainer}>
//       <TextInput style={styles.textInput} placeholder="Enter your name" />
//       <TouchableOpacity style={styles.button} onPress={onPress}>
//         <Text style={styles.buttonText}>Click Me</Text>
//       </TouchableOpacity>
//     </View>
//   </View>
// </View>
// Styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 10,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   mainText: {
//     color: "white",
//     fontSize: 20,
//     backgroundColor: "#0c0c0c",
//     padding: 10,
//   },
//   innerContainer: {
//     width: "80%",
//     height: "50%",
//     backgroundColor: "white",
//     alignItems: "center",
//     justifyContent: "center",
//     borderWidth: 2,
//     borderColor: "#184f18b5",
//     margin: 15,
//   },
//   button: {
//     backgroundColor: "#4CAF50", // Background color
//     paddingVertical: 14, // Vertical padding for the button
//     paddingHorizontal: 28, // Horizontal padding for the button
//     borderRadius: 8, // Rounded corners
//     borderWidth: 2, // Optional border width
//     borderColor: "#388E3C", // Optional border color
//     alignItems: "center", // Center the text horizontally
//     shadowColor: "#000", // Shadow color
//     shadowOffset: { width: 0, height: 2 }, // Shadow offset
//     shadowOpacity: 0.3, // Shadow opacity
//     shadowRadius: 4, // Shadow radius
//     elevation: 5, // Android shadow
//   },
//   buttonText: {
//     color: "#FFFFFF", // Text color
//     fontSize: 18, // Font size
//     fontWeight: "bold", // Bold text
//     textTransform: "uppercase", // Uppercase text
//   },
//   textInput: {
//     width: "80%",
//     height: 40,
//     borderColor: "#184f18b5",
//     borderWidth: 1,
//     marginTop: 10,
//     paddingLeft: 10,
//     margin: 10,
//   },
// });
