import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Platform
} from "react-native";
import { getUsers } from "./actions";
import Card from "./components/Card";
export default function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingFooter, setIsLoadingFooter] = useState(false);
  useEffect(() => {
    const getItems = async () => {
      const res = await getUsers();
      if (res) {
        setData(res);
      }
    };
    getItems();
  }, []);
  const fetchData = async () => {
    setIsLoadingFooter(true)
    const res = await getUsers();
    if (res) {
      const usr = data.concat(res);
      setData(usr);
    }
    setIsLoadingFooter(false)
  };

  const refresh = async () => {
    setIsLoading(true);
    const res = await getUsers();
    if (res) {
      setData(res);
    }
    setIsLoading(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      {Platform.OS === "android" && <View style={styles.android} />}
      <View style={{ flex: 1 }}>
        <Text
          style={styles.userLabel}
        >
          user results ({data.length})
        </Text>
        {data.length > 0 && (
          <FlatList
            data={data}
            refreshing={isLoading}
            onRefresh={refresh}
            renderItem={(user) => {
              return <Card index={user.index} {...user.item} />;
            }}
            keyExtractor={(item) => item.email}
            onEndReachedThreshold={0.01}
            onEndReached={() => fetchData()}
            ListFooterComponent={() => <ActivityIndicator animating={isLoadingFooter} size="small" color="#636e72" />}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#dfe6e9",
  },
  userLabel: {
    marginTop: 10,
    marginBottom: 5,
    color: "#b2bec3",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
  },
  android: {
    marginTop: 22,
  }
});
