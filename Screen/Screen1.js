import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

export default function Screen1() {
    const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View
        style={{
          flex: 1,
          width: "272px",
          height: "36px",
          marginTop: "100px",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "Inter",
            fontSize: "24px",
            lineHeight: "36px",
            fontWeight: 700,
          }}
        >
          Welcome to Cafe world
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Image
          source={require("../assets/jewel_cafe.png")}
          style={{ width: "200px", height: "62px" }}
        ></Image>
      </View>
      <View style={{ flex: 1 }}>
        <Image
          source={require("../assets/javas_cafe.png")}
          style={{ width: "200px", height: "62px" }}
        ></Image>
      </View>
      <View style={{ flex: 1 }}>
        <Image
          source={require("../assets/trungnguyen.png")}
          style={{ width: "200px", height: "62px" }}
        ></Image>
      </View>
      <View style={{ flex: 2 }}>
        <Pressable
          onPress={() => {
            navigation.navigate("Screen2");
          }}
          style={{
            width: "312px",
            height: "50px",
            borderRadius: "6px",
            backgroundColor: "#00BDD6",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Inter",
              fontSize: "24px",
              lineHeight: "36px",
              color: "white",
              fontWeight: 700,
            }}
          >
            Get Strated
          </Text>
        </Pressable>
      </View>
    </View>
  );
}