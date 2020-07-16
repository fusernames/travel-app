import React from "react";
import { Text, View } from "react-native";
import { Layout, useTheme } from "@ui-kitten/components";
import Container from "../components/Container";
import SvgUri from "react-native-svg-uri";
import { BlurView } from "expo";

const RESULTS = [
  {
    flag: require("../assets/flags/077-france.svg"),
    name: "France",
    cities: ["Paris", "Lyon", "Marseille", "Lille"],
  },
  {
    flag: require("../assets/flags/206-canada.svg"),
    name: "Canada",
    cities: ["Montreal", "Vancouver", "Toronto"],
  },
  {
    flag: require("../assets/flags/206-canada.svg"),
    name: "Canada",
    cities: ["Montreal", "Vancouver", "Toronto"],
  },
  {
    flag: require("../assets/flags/206-canada.svg"),
    name: "Canada",
    cities: ["Montreal", "Vancouver", "Toronto"],
  },
];

export default () => {
  const theme = useTheme();
  return (
    <Layout level="1">
      <Container>
        <View>
          {RESULTS.map((result, i) => (
            <View
              style={{
                marginVertical: 4,
                borderRadius: 6,
                padding: 4,
                backgroundColor: "rgba(255, 255, 255, .4)",
              }}
            >
              <View
                style={{
                  borderRadius: 6,
                  flexDirection: "row-reverse",
                  backgroundColor: "rgba(255, 255, 255, 1)",
                }}
              >
                <SvgUri
                  style={{
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5,
                    overflow: "hidden",
                    height: 40,
                    width: 40,
                    marginRight: 8,
                  }}
                  source={result.flag}
                />
                <View
                  key={i}
                  style={{
                    flex: 1,
                    backgroundColor: "rgba(255, 255, 255, 1)",
                    borderRadius: 3,
                    padding: 16,
                    alignItems: "flex-start",
                  }}
                >
                  <Text style={{ fontWeight: "bold", marginBottom: 8 }}>
                    {result.name}
                  </Text>
                  {result.cities.map((city) => (
                    <Layout level="2" style={{ padding: 2, marginVertical: 2 }}>
                      <Text
                        key={city}
                        style={{ color: theme["color-primary-500"] }}
                      >
                        {city}
                      </Text>
                    </Layout>
                  ))}
                </View>
              </View>
            </View>
          ))}
        </View>
      </Container>
    </Layout>
  );
};
