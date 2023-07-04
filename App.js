import { StatusBar } from "expo-status-bar";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { myProfile } from "./src/data";
import Header from "./src/Header";
import Margin from "./src/Margin";
import MyProfile from "./src/MyProfile";
import Division from "./src/Division";

const statusBarHeight = getStatusBarHeight(true);
// const bottomSpace = getBottomSpace();

export default function App() {
  return (
    <View style={styles.container}>
      <Header />

      <Margin height={10} />

      <MyProfile
        uri={myProfile.uri}
        name={myProfile.name}
        introduction={myProfile.introduction}
      />

      <Division />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: statusBarHeight,
  },
});
