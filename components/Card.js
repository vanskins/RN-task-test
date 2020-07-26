import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

export default Card = (props) => {
  const { index, location, name, picture } = props;
  return (
    <TouchableOpacity onPress={() => alert(index)}>
      <View
        style={{
          height: 120,
          justifyContent: "center",
          margin: 7,
          borderRadius: 15,
          backgroundColor: 'white'
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <View style={{ marginLeft: 10 }}>
            <Image
              style={{ width: 80, height: 80, borderRadius: 50 }}
              source={{ uri: picture.medium }}
            />
          </View>
          <View style={{ justifyContent: 'center', marginLeft: 10 }}>
            <Text
              style={{ fontSize: 18, fontWeight: '600' }}
            >{`${name.first}, ${name.last}`}</Text>
            <Text
              style={{ fontSize: 16 }}
            >{`${location.city} ${location.country}`}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
