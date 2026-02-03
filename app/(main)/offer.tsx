import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";

export default function OfferPage() {
  return (
    <LinearGradient colors={["#3f7d5b", "#3f7d5b"]} className="flex-1">
      <View className="flex-1 items-center justify-center">
        <Text>Offer</Text>
        <View style={{ height: 8 }} />
        <Text>Offer page placeholder.</Text>
      </View>
    </LinearGradient>
  );
}
