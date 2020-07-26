import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from "react-native";

export default Card = (props) => {
  const { index, location, name, picture } = props;
  return (
    <TouchableOpacity onPress={() => {
      Alert.alert("Information", `User index is ${index}`)
    }}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: picture.medium }} />
          </View>
          <View style={styles.info}>
            <Text
              style={styles.nameLabel}
            >{`${name.first}, ${name.last}`}</Text>
            <Text
              style={styles.addressLabel}
            >{`${location.city} ${location.country}`}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    justifyContent: "center",
    margin: 7,
    borderRadius: 15,
    backgroundColor: "white",
  },
  content: { flexDirection: "row" },
  image: { width: 80, height: 80, borderRadius: 50 },
  info: { justifyContent: "center", marginLeft: 10 },
  imageContainer: { marginLeft: 10 },
  nameLabel: { fontSize: 18, fontWeight: "600" },
  addressLabel: { fontSize: 16 },
});
