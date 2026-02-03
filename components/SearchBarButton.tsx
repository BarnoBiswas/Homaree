import { Feather } from "@expo/vector-icons";
import React from "react";
import { Pressable, Text } from "react-native";

type Props = {
  onPress?: () => void;
};

export default function SearchBarButton({ onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      className="w-full h-12 bg-white rounded-full flex-row items-center px-6"
    >
      {/* Search Icon */}
      <Feather name="search" size={20} color="#6b7280" />

      {/* Text */}
      <Text className="ml-3 text-md text-gray-500">
        Search for restaurant
      </Text>
    </Pressable>
  );
}
