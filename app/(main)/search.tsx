import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";

export default function SearchPage() {
  return (
    <LinearGradient colors={["#3f7d5b", "#3f7d5b"]} className="flex-1">
      <View className="flex-1 items-center justify-center">
        <Text>Search</Text>
        <View style={{ height: 8 }} />
        <Text>Search page placeholder.</Text>
      </View>
    </LinearGradient>
  );
}
