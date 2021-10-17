import * as React from "react"
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
  TouchableOpacity,
} from "react-native"
import axios from "axios"

const Person = ({ navigation, route }) => {
  const [userData, setUserData] = React.useState()

  React.useEffect(() => {
    try {
      const { params: paramReceived } = route
      const fetchData = async () => {
        const result = await axios.get(
          `https://api.github.com/users/${paramReceived.userName}`
        )
        setUserData(result.data)
      }
      fetchData()
    } catch (error) {
      console.log(error)
    }
  }, [])

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View>
          <TouchableOpacity
            style={styles.containerBackButton}
            onPress={() => navigation.goBack()}
            title="Back"
          >
            <Image
              source={require("../assests/arrow_left_white.png")}
              style={styles.arrow}
            />
            <Text style={styles.backButton}>Back</Text>
          </TouchableOpacity>
        </View>
      ),
    })
  }, [navigation])

  return (
    <View style={styles.container}>
      {userData ? (
        <View style={styles.profileContainer}>
          <View style={styles.containerData}>
            <TouchableHighlight
              style={[styles.profileImgContainer, { borderWidth: 1 }]}
            >
              <Image
                source={{
                  uri: userData.avatar_url,
                }}
                style={styles.profileImg}
              />
            </TouchableHighlight>
            <View style={styles.userDescriptionContainer}>
              <Text style={styles.userName}>{userData.name}</Text>
              <Text style={styles.userLocation}>
                {userData.location || "No retornada"}
              </Text>
            </View>
          </View>
          <View style={styles.divider} />
        </View>
      ) : (
        <Text>Cargando informacion...</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    paddingLeft: 20,
    paddingTop: 20,
  },
  containerData: { flexDirection: "row" },
  profileContainer: {
    flex: 1,
    paddingRight: 15,
  },
  profileImgContainer: {
    marginLeft: 8,
    height: 65,
    width: 65,
    borderRadius: 40,
  },
  profileImg: {
    height: 65,
    width: 65,
    borderRadius: 40,
  },
  userDescriptionContainer: {
    marginLeft: 20,
    paddingTop: 12,
  },
  userName: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 3,
  },
  userLocation: {
    fontSize: 12,
    color: "grey",
  },
  containerBackButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    fontSize: 17,
    fontWeight: "bold",
    marginLeft: 10,
    color: "white",
  },
  arrow: {
    width: 30,
    height: 30,
  },
  divider: {
    borderBottomColor: "#E1DDDC",
    borderBottomWidth: 1,
    marginTop: 14,
  },
})

export default Person
