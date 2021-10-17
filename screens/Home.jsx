import * as React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

const Home = ({ navigation }) => {
  const users = [
    {
      id: 1,
      name: "GrahamCampbell",
    },
    {
      id: 2,
      name: "Fabpot",
    },
    {
      id: 3,
      name: "Weierophinney",
    },
    {
      id: 4,
      name: "Rkh",
    },
    {
      id: 5,
      name: "Josh",
    },
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top 5 GitHub Users</Text>
      <Text style={styles.description}>
        {"Tap the username to see more\ninformation"}{" "}
      </Text>
      <View style={styles.buttonsContainer}>
        {users?.map((item) => (
          <View key={item.id}>
            <TouchableOpacity
              key={item.id}
              onPress={() =>
                navigation.navigate("Person", { userName: item.name })
              }
              style={styles.buttons}
            >
              <Text style={styles.textButton}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    paddingLeft: 30,
    paddingTop: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
  },
  description: {
    marginTop: 10,
    marginBottom: 18,
    fontSize: 19,
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  buttons: {
    borderRadius: 4,
    marginRight: 10,
    marginTop: 10,
    width: "auto",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#2980B9",
    alignItems: "center",
  },
  textButton: {
    fontSize: 19,
    color: "white",
  },
})

export default Home
