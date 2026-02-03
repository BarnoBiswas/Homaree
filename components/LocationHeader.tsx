import { EvilIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";

type Props = {
  road?: string;
  city?: string;
};

export default function LocationHeader({
  road = "Gabtola Road",
  city = "Dhaka",
}: Props) {
  return (
    <View className="mt-16 flex-row items-start">
      <EvilIcons name="location" size={32} color="white" className="mt-2"/>

      <View className="ml-1">
        <Text className="text-lg font-bold text-white">
          {road}
        </Text>
        <Text className="text-md text-white/90">
          {city}
        </Text>
      </View>
    </View>
  );
}
