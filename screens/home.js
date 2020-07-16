// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  Screen,
  Dimensions,
  Picker,
} from "react-native";
import {
  Select,
  SelectItem,
  RangeDatepicker,
  Icon,
  Button,
  useTheme,
  IndexPath,
} from "@ui-kitten/components";
// import { TextInput } from "react-native-paper";
import { BlurView } from "expo-blur";
import Container from "../components/Container";

const selectItems = [
  "< 50",
  "50 - 100",
  "100 - 150",
  "150 - 200",
  "200 - 300",
  "300 - 400",
  "400 - 500",
];

const screen = Dimensions.get("screen");

export default function Home({ navigation }) {
  const [range, setRange] = useState({});
  const [budget, setBudget] = useState(new IndexPath(0));
  const theme = useTheme();

  return (
    <Container>
      <Text
        style={{
          fontSize: 30,
          marginBottom: 10,
          color: "#fff",
          fontWeight: "bold",
          textShadowColor: "rgba(0, 0, 0, 0.5)",
          textShadowOffset: { width: -1, height: 1 },
          textShadowRadius: 7,
        }}
      >
        Travel App
      </Text>
      <Text
        style={{
          color: "#fff",
          textShadowColor: "rgba(0, 0, 0, 0.7)",
          textShadowOffset: { width: -1, height: 1 },
          textShadowRadius: 7,
          fontSize: 16,
        }}
      >
        Donnez nous votre argent $$$
      </Text>
      <View style={styles.container}>
        <View
          intensity={100}
          tint="default"
          style={{
            width: "100%",
            borderRadius: 10,
            padding: 20,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              marginBottom: 16,
              fontWeight: "bold",
              textShadowColor: "rgba(0, 0, 0, 0.2)",
              textShadowOffset: { width: -1, height: 1 },
              textShadowRadius: 7,
            }}
          >
            Trouvez un voyage
          </Text>
          <Select
            placeholder="Quel est votre budget ?"
            style={{ marginBottom: 8 }}
            value={selectItems[budget.row]}
            selectedIndex={budget}
            onSelect={(index) => setBudget(index)}
          >
            {selectItems.map((selectItem) => (
              <SelectItem key={selectItem} title={selectItem} />
            ))}
          </Select>
          <RangeDatepicker
            accessoryRight={(props) => <Icon {...props} name="calendar" />}
            range={range}
            onSelect={(nextRange) => setRange(nextRange)}
          />
          <View style={{ alignItems: "center", marginTop: 10 }}>
            <Button style={{}} onPress={() => navigation.navigate("Results")}>
              Trouver une destination
            </Button>
          </View>
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    // elevation: 10,
    // shadowColor: "#000",
    // shadowOffset: { width: 10, height: 10 },
    // shadowOpacity: 0.3,
    // shadowRadius: 8,
    backgroundColor: "rgba(255, 255, 255, .4)",
    borderRadius: 10,
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
