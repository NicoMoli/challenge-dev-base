import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "./screens/Home"
import Person from "./screens/Person"

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#141701",
            },
            headerTitleStyle: {
              color: "white",
            },
          }}
        />
        <Stack.Screen
          name="Person"
          component={Person}
          options={({ navigation, route }) => ({
            title: "Home",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#141701",
            },
            headerTitleStyle: {
              color: "white",
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
